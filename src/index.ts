import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { Settings } from './Types/settings';

export * as GraphQL from 'graphql';

export default (settings: Settings, fields?: any, mutations?: any) => (app: Application) => {
  const rootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQuery',
      description: 'Root Query',
      fields: () => fields,
    }),
    mutation: mutations
      ? new GraphQLObjectType({
          name: 'Mutation',
          description: 'Root Mutation',
          fields: () => mutations,
        })
      : undefined,
  });

  app.get(settings.path, graphqlHTTP({ schema: rootSchema, graphiql: settings.interface || true }));
  app.post(settings.path, graphqlHTTP({ schema: rootSchema, graphiql: false }));
};
