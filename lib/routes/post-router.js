const Router = require("@koa/router");
const router = new Router();

const postController = require('../controllers/post-controller');

router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.delete('/posts/:id', postController.deleteById);
router.post('/posts', postController.create);
router.get('/api/posts/search', postController.findText)

module.exports = router;