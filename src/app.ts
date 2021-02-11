import express from 'express';
import routesConfigurator from './routesConfigurator';

const app = express();

app.use(express.json());
app.use(routesConfigurator);
app.listen(3000, () => {
  console.log('Server started');
});