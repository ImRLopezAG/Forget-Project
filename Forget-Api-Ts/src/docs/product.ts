/**
 * @swagger
 * components:
 *   schemas:
 *     SaveProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         category:
 *           type: string
 *       example:
 *         name: Product Name
 *         price: 9.99
 *         description: Product description
 *         image: example.jpg
 *         category: Category ID
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         category:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product management
 */

/**
 * @swagger
 * /api/Product/List:
 *   get:
 *     tags:
 *       - Product
 *     summary: Get all products
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Get all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/Product/Get/{id}:
 *   get:
 *     tags:
 *       - Product
 *     summary: Get a product
 *     description: Get a product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Get a product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Product/Create:
 *   post:
 *     tags:
 *       - Product
 *     summary: Create a product
 *     description: Create a new product
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveProduct'
 *     responses:
 *       201:
 *         description: Create a product
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Product/Update/{id}:
 *   put:
 *     tags:
 *       - Product
 *     summary: Update a product
 *     description: Update a product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveProduct'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid request body or parameter
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Product/Delete/{id}:
 *   delete:
 *     tags:
 *       - Product
 *     summary: Delete a product
 *     description: Delete a product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Delete a product
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
