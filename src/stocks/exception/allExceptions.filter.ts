import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(httpStatus, JSON.stringify(response));

    const responseBody = {
      statusCode: httpStatus,
      message: 'Internal Server Error, Check Your Log ??',
    };
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
