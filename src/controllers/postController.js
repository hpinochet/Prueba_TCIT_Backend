const models = require("../database/models/index.js");

module.exports = {

    getAllPost: async (req, res) => {
        try {
            const posts = await models.post.findAll();
            res.json({
                data: {
                    posts: posts
                }
            });
        } catch (error) {
            console.error('Error al obtener todos los posts:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    postPost: async (req, res) => {
        try {
            if (!req.body) {
                throw new Error('El cuerpo de la solicitud es requerido');
            }
            const post = await models.post.create(req.body);
            res.json({
                data: {
                    post: post
                }
            });
        } catch (error) {
            console.error('Error al crear un nuevo post:', error);
            res.status(400).json({ error: 'Datos de la solicitud incorrectos' });
        }
    },

    deletePost: async (req, res) => {
        try {
            const post = await models.post.findOne({
                where: {
                    id: req.params.id
                }
            });
    
            if (!post) {
                return res.status(404).json({ error: 'El post no fue encontrado' });
            }
    
            const deletedPost = { ...post.get() };
    
            await models.post.destroy({
                where: {
                    id: req.params.id
                }
            });
    
            res.json({
                data: {
                    post: deletedPost
                }
            });
        } catch (error) {
            console.error('Error al eliminar el post:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
    

};
