# Hygraph Test Project

A dynamic landing page built using Next.js 13 and Tailwind CSS. With the integration of the Hygraph CMS, content editors can seamlessly add Feature Sections and Callouts.

## Demo

[https://hygraph-mu.vercel.app/test-project](https://hygraph-mu.vercel.app/test-project)

## Overview

The landing page has a hierarchical structure:

- **Page**
  - **Section**
    - **Block**
      - **Hero**
      - **FeatureSection**
      - **Callout**

A "Section" can host one or multiple "Blocks". Each "Block" can house components like "Hero", "FeatureSection", or "Callout". Learn more from [Hygraph's Component Documentation](https://hygraph.com/docs/guides/schema/components).

## Getting Started

### Prerequisites

- Yarn or npm installed
- A free account on [Hygraph CMS](https://app.hygraph.com/signup)

### Installation

1. Clone the repo:

   ```bash
   git clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```bash
   HYGRAPH_ENDPOINT=
   HYGRAPH_TOKEN=
   ```

   Replace the values with your Hygraph endpoint and token. You can find these in your Hygraph dashboard.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

To add new sections or components, visit the Hygraph CMS and configure your data based on the structure mentioned in the Overview section.

## Deployment

This project is primed for deployment on Vercel. If you haven't, sign up for a [free account on Vercel](https://vercel.com/signup).

## License

This project is open-source. Feel free to fork, modify, and distribute as you see fit.
