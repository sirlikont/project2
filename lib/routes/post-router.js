const Router = require("@koa/router");
const router = new Router();

const postModel = require('../models/post-model');

router.get('/posts', (ctx) => {
   ctx.body = postModel.posts;
});

router.get('/posts/:id', (ctx) => {
    const index = ctx.request.params.id;
    ctx.body = postModel.posts[index];
 });

 router.delete('/posts/:id', (ctx) => {
    const index = ctx.request.params.id;
    postModel.posts.splice(index, 1);
    ctx.status = 204;
 });

 router.post('/posts', (ctx) => {
    const text = ctx.request.body.text;
    postModel.posts.push({ text });

    ctx.status = 201;
 });

module.exports = router;