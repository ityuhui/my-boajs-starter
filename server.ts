import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');