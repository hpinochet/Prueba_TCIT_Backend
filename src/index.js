const express = require('express');
const routerConfig = require('./routes/indexRoutes.js');
const globalConstants = require('./const/globalConstants.js');
const cors = require('cors');

const configuracionApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const configuracionRouter = (app) => {
  app.use(cors());
  app.use('/api/', routerConfig.rutas_init());
};

const init = () => {
  const app = express();
  configuracionApi(app);
  configuracionRouter(app);
  
  app.listen(globalConstants.PORT, () => {
    console.log(`Servidor API escuchando en el puerto ${globalConstants.PORT}`);
  });

  return app;
};

init();
