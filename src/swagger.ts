import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Event API",
      version: "1.0.0",
      description: "API documentation for Event API",
    },

    servers: [
      process.env.NODE_ENV !== "production"
        ? {
            url: "http://localhost:3000/api/",
            description: "dev server",
          }
        : {
            url: "https://event-api.onrender.com/api/",
            description: "production server",
          },
    ],

    components: {
      schemas: {
        Event: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            date: {
              type: "string",
              format: "date",
              description: "Date of the event in 'Month Day, Year' format",
            },
            location: { type: "string" },
            description: { type: "string" },
            isFree: { type: "boolean" },
            createdAt: { type: "string" },
            updatedAt: { type: "string" },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
    tags: [{ name: "Events", description: "Endpoints for events" }],
  },
  apis: ["**/*.ts"],
};

export const specs = swaggerJSDoc(options);
