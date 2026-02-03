# HTML5 Games Expo App

A small React Native app built with **Expo + TypeScript** that displays
a list of HTML5 games and launches them in a full-screen WebView.

---

## Features

- Displays a list of games with image and title
- Tap a game to open it in a WebView
- Dynamic navigation titles using Expo Router
- Basic accessibility support (`accessibilityRole`, labels)

---

## Games Used

The app currently includes the following HTML5 games from Famobi:

- Cut The Rope 2
- Gold Mine
- Pengu Slide
- Om Nom Run
- Parking Panic
- Traffic Tom

Each game opens inside the app rather than an external browser.

---

## Tech Stack

- Expo
- React Native
- TypeScript
- react-native-webview

---

## Running the Project

1.  Install dependencies

```bash
npm install
```

2.  Start the app

```bash
npx expo start
```

---

## Project Structure

    app/
     ├── index.tsx           # Games list screen
     └── game-webview.tsx    # WebView screen

    src/
     ├── components/
     │   └── GameCard.tsx    # Reusable game list item
     ├── data/
     │   └── games.ts        # Game definitions
     ├── assets/
     │   └── images/         # Local thumbnails
     └── types/
         └── Game.ts

---

## Design Decisions

- **FlatList** used for performance and scalability rather than
  mapping directly in JSX
- **GameCard component** extracts row UI for better separation of
  concerns
- Local image assets bundled with the app for consistent offline
  thumbnails

---

## Accessibility

- Each game row uses `accessibilityRole="button"`
- Descriptive labels such as "Play Cut The Rope 2"
- WebView labelled with current game title

---

## Data Approach

- Strongly typed `Game` model
- Local image references via `require()`
- Screen receives only the URL and title via route params
- Simple static data source suitable for extension to API later

---

## Possible Improvements

- Add **Favourites / My Games** list with persistence (AsyncStorage)
- Search or filter games
- Error handling if a game fails to load
