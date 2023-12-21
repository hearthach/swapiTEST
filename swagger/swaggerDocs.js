/**
 * @swagger
 * /people:
 *   get:
 *     summary: Obtiene una lista de personas
 *     description: Devuelve una lista de personas de la base de datos.
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 * /people/{id}:
 *   get:
 *     summary: Obtiene una persona por ID
 *     description: Devuelve una persona específica por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos de la persona
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Persona no encontrada
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         birth_year:
 *           type: string
 *         // Otros atributos de la persona
 */

// Este archivo no necesita exportar nada, solo contiene comentarios JSDoc.
