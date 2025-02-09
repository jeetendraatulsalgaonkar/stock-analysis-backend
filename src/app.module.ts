import { Module } from '@nestjs/common';
import { StocksModule } from './stocks.module';
import { TickersModule } from './tickers/module/tickers.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { upperCaseDirectiveTransformer } from './directives/upper-case.directive';

@Module({
  imports: [
    TickersModule,
    StocksModule,
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
