import swaggerJSDoc from "swagger-jsdoc";

export const openApiSpecification = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Law Firm Backend API",
      version: "1.0.0",
      description: "Production-ready API for consultations, admin access, and contact messages."
    },
    servers: [{ url: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/" }]
  },
  apis: []
});
