const Router = require("@koa/router");
const router = new Router();

const postController = require('../controllers/post-controller');

router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.get('/api/posts/search', postController.findText);
router.delete('/posts/:id', postController.deleteById);
router.post('/posts', postController.create);


module.exports = router;