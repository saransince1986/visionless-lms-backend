const normalizedPath = require('path').join(__dirname);

export function loadRoutes() {
  const routes = [];
  require('fs') // eslint-disable-line global-require
    .readdirSync(normalizedPath)
    .forEach((file) => {
      console.log('File: ', file);
      if (file !== 'index.js') {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const routesFile = require(`./${file}`).default;
        routesFile.forEach((route) => {
          routes.push(route);
        });
      }
    });
  return routes;
}
