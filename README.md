<div align="center">
    <br />
    <h3 align="center">Notiq ✨</h3>
    <div>
        [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
        [![Liveblocks](https://img.shields.io/badge/Liveblocks-RealTime-blue)](https://liveblocks.io/)
        [![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)](https://workers.cloudflare.com/)
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    </div>
    <br />
    <h4 align="center">Real-time Collaborative Editor Powered by AI</h4>
    <br />
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🪟 [Overview](#overview)
2. 🧩 [Tech Stack](#tech-stack)
3. 🚀 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Links](#links)

## <a name="overview">🪟 Overview</a>

A sleek rich text editor workspace which embraces real-time conflict-free collaboration, with chat-to-document and summary translation powered by OpenAI. 

🌐 ![Notiq Demo](https://notiq-livid.vercel.app/)

## <a name="tech-stack">🧩 Tech Stack</a>

- **Frontend**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Backend**: Cloudflare, Hono
- **Database**: Firebase Firestore
- **Authentication**: Clerk
- **Real-Time Collaboration**: Liveblocks
- **AI Integration**: OpenAI
- **Type Safety**: TypeScript
- **Version-Control**: Git, GitHub

## <a name="features">🚀 Features</a>

- 🌐 **Real-Time Collaboration**: Conflict-free Workspace with others in real-time.
- 🤖 **AI-Powered Assistance**: Leverage OpenAI to enhance your productivity with chat-to-document, summary translation, and more.
- ✍️ **Rich Text Editing**: Create and format documents with ease using a rich text editor.
- 🖱️ **Live Cursors**: See where your collaborators are working in real time with live presence cursors.
- 🔐 **User Authentication**: Secure and seamless authentication with Clerk.
- 🎨 **Responsive Design**: Built with Tailwind CSS and shadcn for a modern, responsive UI.
- 🚀 **Scalable Backend**: Powered by Firebase Firestore for real-time database functionality.
- ⚡ **Optimized Performance**: Deployed on Vercel and enhanced with Cloudflare for fast and reliable performance.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

## Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM package manager or NPM/Yarn
- Clerk account for authentication
- Convex account for database
- OpenAI/Anthropic API key for AI capabilities

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
FIREBASE_API_KEY=your_firebase_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret
CLOUDFLARE_AI_TOKEN=your_cf_ai_token
OPENAI_API_KEY=your_openai_key
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/xndroli/notiq.git
cd Notiq
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Start the client:

```bash
npm run client
# or
yarn client
# or
pnpm client
# or
bun client
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to start using Notiq.

## Performance Optimizations

- Implemented prompt caching
- Optimized token usage
- Efficient streaming implementation
- Smart context window management

## <a name="links">🔗 Links</a>

Here is the list of all the resources used in the project:

- [Node.JS](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Next.JS](https://nextjs.org/)
- [Lucide React](https://lucide.dev/)
- [Radix](https://www.radix-ui.com/icons)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk ](https://https://clerk.com/)
- [IBM's watsonx.ai Flows Engine](https://wxflows.ibm.stepzen.com/)
- [LangChain](https://www.langchain.com/)
- [Convex](https://www.convex.dev/)
- [Anthropic](https://console.anthropic.com/dashboard)
- [Vercel](https://vercel.com/)