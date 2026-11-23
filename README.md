# Anju & Vats – Wedding Invitation

React + Vite + Tailwind CSS (v3). One-page, mobile-first.

    npm install
    npm run dev        # local preview
    npm run build      # outputs /dist

## Deploy (Vercel)
Push to GitHub → vercel.com → Add New Project → import → Framework: Vite → Deploy.

## Edit content
Everything is in `src/config.js`: events, times, dress codes, venue + map link, RSVP contacts,
family names, the 5 swipe photos and their notes.

## Background song
Drop an `.mp3` (any filename) into `src/assets/`. It is picked up automatically and starts when
guests tap "Open the invitation" (browsers only allow sound after a tap). A mute button appears bottom-left.
