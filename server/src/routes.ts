import express from 'express';
import PointsControlles from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsControlles();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create)
routes.get('/points/:id', itemsController.show);

export default routes;