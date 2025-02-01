import express from "express";
import {
  getEvent,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = express.Router();

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all events
 *    tags: [Events]
 *    responses:
 *      200:
 *        description: A list of all events
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Event'
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  post:
 *    summary: Create a new event
 *    tags: [Events]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - date
 *              - location
 *            properties:
 *              name:
 *                type: string
 *              date:
 *                type: string
 *                format: date
 *                description: Date of the event in 'YYYY-MM-DD' format
 *              location:
 *                type: string
 *    responses:
 *      201:
 *        description: Event created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *
 * /events/{id}:
 *  get:
 *    summary: Get an event by id
 *    tags: [Events]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Event found successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Event'
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  put:
 *    summary: Update an event by id
 *    tags: [Events]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - date
 *              - location
 *              - description
 *              - isFree
 *            properties:
 *              name:
 *                type: string
 *              date:
 *                type: string
 *                format: date
 *                description: Date of the event in 'YYYY-MM-DD' format
 *              location:
 *                type: string
 *              description:
 *                type: string
 *              isFree:
 *                type: boolean
 *    responses:
 *      200:
 *        description: Event updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  delete:
 *    summary: Delete an event by id
 *    tags: [Events]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Event deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

router
  .get("/", getEvents)
  .post("/", addEvent)
  .get("/:id", getEvent)
  .put("/:id", updateEvent)
  .delete("/:id", deleteEvent);

export default router;
