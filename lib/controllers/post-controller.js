const postModel = require("../models/post-model");

function getAll(ctx) {
    ctx.body = postModel.posts;
}

function getById(ctx) {
    const index = ctx.request.params.id;
    
    if(Number(index) < 0 || Number(index) > postModel.posts.length - 1) {
        ctx.status = 404;
        return;
    }
    
    ctx.body = postModel.posts[index];

}

function deleteById(ctx) {
     const index = ctx.request.params.id;
     postModel.posts.splice(index, 1);
     ctx.status = 204;
  }
 
function create(ctx) {
     const text = ctx.request.body.text;

     if(!text || text === '') {
        ctx.status = 400;
        return;
     }

     postModel.posts.push({ text });
     ctx.status = 201;
  }

function findText(ctx){
    const array = [];
    const query = ctx.request.query.q;
    for(let post of postModel.posts){
        if (post.text.includes(query)) {
            console.log(post)
            array.push(post);
            
            ctx.status = 302;
        } else {
        ctx.status = 204;
        }
    }
    ctx.body = array;
    console.log(ctx.body)
    console.log(array)
}

module.exports = { getAll, getById, deleteById, create, findText }