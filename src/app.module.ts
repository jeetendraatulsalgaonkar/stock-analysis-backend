import { Module } from '@nestjs/common';
import { TickersModuleG } from './tickers/module/tickersModuleG';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { upperCaseDirectiveTransformer } from './stocks/directives/upper-case.directive';
import { TickersModule } from './stocks/modules/tickers.module';

@Module({
  imports: [
    TickersModuleG,
    TickersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) =>
        upperCaseDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
