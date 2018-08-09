import Hapi from 'hapi';
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';

import Pack from '../package.json';
import routes from './routes/index';

const init = async () => {
  const server = await Hapi.server({
    port: process.env.PORT || '8080',
    host: process.env.HOST || '0.0.0.0',
  });

  const swaggerOptions = {
    info: {
      title: 'Bencaleth LMS API Documentation',
      version: Pack.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
  try {
    await server.start();
    server.route(routes);
  } catch (err) {
    console.error(err);
  }

  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
