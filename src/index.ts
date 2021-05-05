import {Application} from 'express';
import {graphqlHTTP} from 'express-graphql';

import {Settings} from './Types/settings';

export default (app: Application) => (schema: any, settings: Settings) =>
  app.use(settings.path, graphqlHTTP({ schema, graphiql: settings.interface || true }));
