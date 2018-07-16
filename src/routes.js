import { Router } from 'express';
import swaggerSpec from './utils/swagger';
import usersController from './controllers/users';
import to_dosController from './controllers/to_dos';
import categoriesController from './controllers/categories';
import loginController from './controllers/login';
import logoutController from './controllers/logout';
import * as verifyToken from './middlewares/verifyTokens';
import refreshController from './controllers/refresh';




/**
 * Contains all API routes for the application.
 */
let router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * @swagger
 * definitions:
 *   App:
 *     title: App
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       apiVersion:
 *         type: string
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API version
 *     description: App version
 *     produces:
 *       - application/json
 *     tags:
 *       - Base
 *     responses:
 *       200:
 *         description: Application and API version
 *         schema:
 *           title: Users
 *           type: object
 *           $ref: '#/definitions/App'
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', usersController);
router.use('/to_dos',verifyToken.checkAccessToken, to_dosController);
router.use('/categories',categoriesController);
router.use('/login',loginController);
router.use('/logout',logoutController);
router.use('/refresh',refreshController);



export default router;
