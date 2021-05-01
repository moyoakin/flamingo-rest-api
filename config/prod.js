import helmet from "helmet";
import compression from "compression";

const setupProdMiddleWare = (app) => {
    app.use(helmet());
    app.use(compression())
};

export default setupProdMiddleWare;