import express from 'express';
import routesConfigurator from './routesConfigurator';

const app = express();
const port = process.env.PORT || '3000';

app.use(express.json());
app.use(AuthMiddleware)
app.use(routesConfigurator);
app.listen(port, () => {
  console.log('Server started');
});

//TODO: move to another space
function AuthMiddleware(request: express.Request, response: express.Response, next) 
{
 // response.locals.user = SecurityController.Authorize();
  console.log(response.locals.user);
  console.log("This is middleware");
  console.log(`${request.method} ${request.path}`);
  next();
}