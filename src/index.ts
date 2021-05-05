import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { Settings } from './Types/settings';

export * as GraphQL from 'graphql';

export default (fields: any, settings: Settings) => (app: Application) => {
  const rootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQuery',
      description: 'Root Query',
      fields: () => fields,
    }),
  });

  app.get(settings.path, graphqlHTTP({ schema: rootSchema, graphiql: settings.interface || true }));
  app.post(settings.path, graphqlHTTP({ schema: rootSchema, graphiql: false }));
};
