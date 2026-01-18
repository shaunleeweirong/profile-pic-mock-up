# Architecture Documentation

## Overview
This is a LinkedIn profile page prototype built with React + Vite + Tailwind CSS. The main feature is a "1-click AI Update" button in the profile photo modal.

## Tech Stack
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure
```
/
├── index.html          # Entry HTML file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration (LinkedIn colors defined here)
├── postcss.config.js   # PostCSS configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── index.css       # Global styles + Tailwind imports
│   ├── App.jsx         # Main app component
│   └── components/     # React components
│       ├── Header.jsx           # (Task 2) Navigation bar
│       ├── ProfileCard.jsx      # (Task 3) Profile card section
│       ├── ProfilePhotoModal.jsx # (Task 4) Photo modal with AI Update
│       └── Sidebar.jsx          # (Task 6) Right sidebar
├── claude.md           # Instructions for Claude Code
└── ARCHITECTURE.md     # This file
```

## Design System

### Colors (defined in tailwind.config.js)
- `linkedin-blue`: #0a66c2 (primary brand color)
- `linkedin-background`: #f4f2ee (page background)
- `linkedin-card`: #ffffff (card backgrounds)
- `linkedin-text`: #191919 (primary text)
- `linkedin-textSecondary`: #666666 (secondary text)
- `linkedin-border`: #e0e0e0 (borders)

### Typography
Font stack: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto

## Component Architecture

### App.jsx (Main Component)
- Holds global state (current profile image)
- Renders Header, ProfileCard, Sidebar
- Manages modal open/close state

### ProfilePhotoModal.jsx (Key Feature)
- Opens when profile picture is clicked
- Shows enlarged profile photo
- Contains 5 action buttons:
  1. Edit
  2. Update
  3. Frames
  4. **AI Update** (new feature)
  5. Delete
- AI Update button cycles through placeholder images

## State Management
Simple React useState hooks - no external state library needed for this prototype.

## Current Status
- [x] Task 1: Project Setup
- [x] Task 2: Header Component
- [x] Task 3: Profile Card
- [x] Task 4: Profile Photo Modal
- [x] Task 5: AI Update Functionality
- [x] Task 6: Right Sidebar
- [x] Task 7: Polish

## How to Use

1. Run `npm run dev` to start the development server
2. Open http://localhost:5173 in your browser
3. Click on the profile picture to open the modal
4. Click "AI Update" to cycle through profile images

## Customizing Images

Edit the `PROFILE_IMAGES` array in `src/App.jsx` to use your own photos:

```javascript
const PROFILE_IMAGES = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
]
```
