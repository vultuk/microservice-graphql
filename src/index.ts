import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';

import { Settings } from './Types/settings';

export default (schema: any, settings: Settings) => (app: Application): Application => {
  app.use(settings.path, graphqlHTTP({ schema, graphiql: settings.interface || true }));

  return app;
};
