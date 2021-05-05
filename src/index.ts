import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import { Settings } from './Types/settings';

export * as GraphQL from 'graphql';

export default (schema: GraphQLSchema, settings: Settings) => (app: Application) => {
  app.get(settings.path, graphqlHTTP({ schema, graphiql: settings.interface || true }));
  app.post(settings.path, graphqlHTTP({ schema, graphiql: false }));
};
