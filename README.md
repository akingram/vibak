# Vibak Cleaning Services

React + Node.js/Express website for Vibak Cleaning Services.

## Stack

- React
- Vite
- Node.js
- Express

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/
```

## Pages

- `/`
- `/services`
- `/request-service`
- `/about`
- `/contact`

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```

## Deploy on Vercel

Import the GitHub repository into Vercel and use:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The service request API is available at `/api/service-requests`. For long-term
production storage, connect the form to a database, CRM, email service, or webhook.
