const router = require("express").Router();
const usuarioController = require('../controllers/postController');

router.get('/', usuarioController.getAllPost);
router.post('/', usuarioController.postPost);
router.delete('/:id', usuarioController.deletePost);

module.exports = router;