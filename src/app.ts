import express from 'express';
import routesConfigurator from './routesConfigurator';

const app = express();
const port = process.env.PORT || '3000';

app.use(express.json());
app.use(routesConfigurator);

app.listen(port, () => {
  console.log('Server started');
});