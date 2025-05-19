
# Dashboard UI

A responsive dashboard UI built with React.js, Tailwind CSS, and shadcn/ui components. This project demonstrates a clean, modern content management dashboard with article management functionality.

## Features

- Responsive design that works on mobile and desktop
- Sidebar navigation with collapsible menu
- Articles dashboard with table view
- Filter articles by status (published, scheduled, draft, archived)
- Action buttons for article management
- Loading states with skeleton loaders
- Settings page with different tabs

## Project Structure

```
src/
│
├── components/
│   ├── DashboardTable.tsx    # Table component for articles
│   ├── Header.tsx            # Top navigation header
│   ├── Layout.tsx            # Main layout wrapper
│   ├── Loader.tsx            # Skeleton loader components
│   └── Sidebar.tsx           # Sidebar navigation
│
├── pages/
│   ├── Dashboard.tsx         # Main dashboard view
│   ├── NotFound.tsx          # 404 page
│   └── Settings.tsx          # Settings page
│
├── routes/
│   └── AppRoutes.tsx         # Routing configuration
│
├── App.tsx                   # Main app component
└── main.tsx                  # Entry point
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:8080`

## Technologies Used

- React.js with TypeScript
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for routing
- Lucide React for icons

## Screenshots

[Add a screenshot of your dashboard here]

