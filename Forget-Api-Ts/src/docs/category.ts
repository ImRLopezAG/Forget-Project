/**
 * @swagger
 * components:
 *  schemas:
 *    SaveCategory:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Category name
 *      example:
 *        name: Category name
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Category id
 *        name:
 *          type: string
 *          description: Category name
 *      example:
 *        name: Category name
 */

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management
 */

/**
 * @swagger
 * /api/Category/List:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get all entities
 *     description: Get all entities
 *     responses:
 *       200:
 *         description: Get all entities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/Category/Get/{id}:
 *  get:
 *     tags:
 *       - Category
 *     summary: Get an Category
 *     description: Get an Category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     responses:
 *       200:
 *         description: Get an Category
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/Category/Create:
 *  post:
 *     tags:
 *       - Category
 *     summary: Create an Category
 *     description: Create an Category
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveCategory'
 *     responses:
 *       201:
 *         description: Create an Category
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Category/Update/{id}:
 *  put:
 *     tags:
 *       - Category
 *     summary: Update an Category
 *     description: Update an Category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveCategory'
 *     responses:
 *       200:
 *         description: Update an Category
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Category/Delete/{id}:
 *  delete:
 *     tags:
 *       - Category
 *     summary: Delete an Category
 *     description: Delete an Category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     responses:
 *       200:
 *         description: Delete an Category
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */