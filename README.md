# lecafe - Swipe-Based Matchmaking App (React Native Challenge for FullTimeForce)

## 📌 Overview

**lecafe** is a React Native application built using **Expo** for a FullTimeForce coding challenge. It replicates the swipe-to-match interaction popularized by Tinder while focusing on delivering a pixel-perfect user experience. It includes swipe logic, action feedback, modals with expandable information, and vibrant visual design using gradients.

## 🚀 Features

- Swipe actions via buttons (Like, Dislike, Super Like)
- Animated transitions using `react-native-reanimated`
- Expandable and minimizable profile modal
- Pixel-perfect UI according to the design reference
- Dynamic gradient styles for filter buttons and interest tags
- Responsive layout across devices

## ⚙️ Tech Stack

- **Expo SDK 53**
- **React Native** `0.79`
- **React** `19.0.0`
- `react-native-reanimated` v3
- `react-native-gesture-handler`
- `expo-linear-gradient`
- Google Fonts: Maven Pro & Quicksand

## 📂 Folder Structure

```
/project-root
│
├── components/ # Reusable UI components
│ ├── ProfileCard.js
│ ├── ProfileModal.js
│ ├── ActionButtons.js
│ ├── FilterButton.js
│ └── icons/ # Custom SVG icon components
│ ├── WarningIcon.js
│ └── ExpandIcon.js
│
├── data/ # Mock user profiles
│ └── mockProfiles.js
│
├── constants/ # Shared constants (e.g., gradient colors)
│ └── gradients.js
│
├── screens/ # App views
│ └── HomeScreen.js
│
├── App.js # App entry point
├── package.json
└── README.md
```

## ⚙️ Installation & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Tvallejoss/fulltimeforce-mobile-challenge
cd fulltimeforce-mobile-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Expo Development Server

```bash
npm run start
```

Then use the Expo Go app or an emulator to run the application on your device.

---

## 🤝 Notes for Evaluators

- All animations and swipes are handled using `react-native-reanimated`.
- The app was built entirely from scratch with design references.
- Profile data is mocked and categorized by interest type (friendship, love, relationship).
- Expand/minimize interaction uses a custom SVG arrow that rotates based on state.
- The modal view is **pixel-perfect**, with rounded borders, adjusted paddings, and dynamic content area based on state.

---

## 🔗 Useful Links

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [Reanimated v3 Docs](https://docs.swmansion.com/react-native-reanimated/)
- [Gesture Handler Docs](https://docs.swmansion.com/react-native-gesture-handler/)

---

## 🎉 Thank You

Thanks for taking the time to review this project!.
