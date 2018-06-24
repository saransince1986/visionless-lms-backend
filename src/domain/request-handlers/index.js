import container from '../../config/awilixContainer';

module.exports = Object.keys(container.registrations)
  .filter((registration) => registration.match(/RequestHandler$/))
  .map((handler) => container.resolve(handler));
