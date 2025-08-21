# AI Image Studio

## Overview

AI Image Studio is a Next.js application that allows users to generate stunning images based on text prompts using AI. The application features a modern, responsive UI with enhanced styling, animations, and improved user experience.

## Features

- **Image Generation**: Generate images by providing text prompts.
- **Interactive Gallery**: View previously generated images in a responsive gallery.
- **Featured Image Display**: Click on any image in the gallery to display it as a featured image.
- **Enhanced UI/UX**: Modern design with smooth animations, gradient backgrounds, and custom scrollbars.
- **Keyboard Support**: Generate images by pressing the Enter key.
- **Input Validation**: Disable generate button when the prompt is empty.
- **Loading States**: Visual feedback during image generation.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `pages/index.tsx`: The main application page with image generation and gallery.
- `styles/globals.css`: Global styles, including custom utilities for line clamping and scrollbars.
- `hooks/useFetchData.ts`: Custom hook for handling data fetching.
- `interfaces/index.ts`: TypeScript interfaces for data structures.
- `pages/api/generate-image.ts`: API route for image generation.

## Learn More

To learn more about Next.js, refer to the official documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn-pages-router)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).
