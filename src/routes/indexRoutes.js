const { Router } = require("express")
const postRoutes = require("./postRoutes")

const rutas_init = () => {
    const router = Router();
    router.use("/post", postRoutes);
    return router;
};

module.exports = { rutas_init };