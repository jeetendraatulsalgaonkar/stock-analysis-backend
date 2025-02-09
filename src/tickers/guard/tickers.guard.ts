import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class TickersGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ctx: GqlExecutionContext = GqlExecutionContext.create(context);
    return true;
  }
}
