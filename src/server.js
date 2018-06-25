import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const PORT = process.env.PORT || '8080';
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use((err, req, res, next) => {
  if (err.isBoom) {
    res.status(err.output.statusCode).send(err.output.payload);
  }
  next(err);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
