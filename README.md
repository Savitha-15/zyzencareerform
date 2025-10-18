# Career Page Project (Zyzen Assignment 02)

## Summary
React + Vite project with a beautiful animated Career Page that stores applicant submissions in Firebase Firestore.

## Tech Stack
- Frontend: React
- Animations: Framer Motion
- Backend/Database: Firebase Firestore
- Bundler: Vite

## Setup (local)
1. Install Node.js (v18+ recommended).
2. Unzip this project and open a terminal in the project folder.
3. Run `npm install`.
4. Create a Firebase project at https://console.firebase.google.com/.
   - Enable **Firestore** in test mode (or set rules appropriately).
   - From Project Settings -> SDK, copy your Firebase config.
5. Open `src/firebaseConfig.js` and replace the placeholder values with your Firebase config.
6. Run `npm run dev` to start local dev server (usually at http://localhost:5173).

## Deploy to Render
1. Push to GitHub.
2. Create a new Web Service on Render, connect the repo.
3. Build command: `npm run build`
4. Start command: `npm run preview` (or set up static site from build output as needed)

## Firestore structure
Collection: `applicants`
Each document fields:
- name (string)
- email (string)
- resume (string)
- message (string)
- createdAt (timestamp)

## Notes
- Do **not** commit your Firebase API keys publicly if you share the repository. They are okay for client-side apps but secure rules should be enforced on Firestore.
