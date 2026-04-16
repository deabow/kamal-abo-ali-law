<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/fc6307fc-2054-4f6c-aed1-5b0f2d1e3e2b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Backend (Next.js API Routes)

This project now includes a production-oriented backend skeleton using layered architecture:

- `Controllers`: Request parsing and delegation.
- `Services`: Business rules and domain assertions.
- `Repository/Prisma`: Database access.
- `Global Error Handler`: Consistent API error shape.

### Core Backend Structure

- `prisma/schema.prisma`
- `src/app/api/consultations/route.ts`
- `src/app/api/docs/route.ts`
- `src/server/errors/*`
- `src/server/services/base.service.ts`
- `src/server/modules/consultation/*`
- `src/server/security/*`
- `src/server/docs/openapi.ts`

### Environment Variables

Add these to your `.env`:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/law_firm_db"
JWT_SECRET="replace_with_strong_secret"
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
LAWYER_WHATSAPP_NUMBER="201001234567"
```

### Prisma Commands

- `npm run prisma:generate`
- `npm run prisma:migrate -- --name init`

### Example Endpoint

- `POST /api/consultations`
  - This endpoint is now a forwarding bridge (no local DB persistence).
  - Body:
    - `name: string`
    - `phone: string`
    - `category: FAMILY | CRIMINAL | CIVIL | CORPORATE | LABOR | REAL_ESTATE | OTHER`
    - `problem: string`
  - Response includes:
    - `data.status`
    - `data.channel`
    - `data.whatsappLink`

### API Docs

- `GET /api/docs` returns OpenAPI JSON specification.
