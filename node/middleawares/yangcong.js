const Koa = require('koa');
const app = new Koa();

const one = async (ctx , next) => {
  console.log(">> one");
  ctx.body = "one"
  next();
  console.log(">> one2");
//   console.log("<< one");
//   next();
}
const two = async (ctx , next) => {
  console.log(">> two");
  ctx.body = "two"
  next();
  console.log(">> two2");
  // console.log("<< two");
  // next();
}
const three = async (ctx , next) => {
  console.log(">> three ");
  ctx.body = "three"
  next();
  console.log(">> three2 ");
  // console.log("<< two");
  // next();
}

app.use(one)
app.use(two)
app.use(three)
app.listen(3000);