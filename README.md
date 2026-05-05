
# 🎮 Games React

A collection of interactive mini-games built using React. This project demonstrates component-based architecture, state management, and reusable UI patterns while delivering a fun user experience.

---

## 🚀 Features

- 🎲 Dice Game
- 🔢 Number Guessing Game
- ✊ Rock Paper Scissors
- 📱 QR Code Generator
- 🕹️ Game Console UI
- 📄 Multiple Pages (Home, About, Pricing)

---

## 🏗️ Project Architecture

```

src/
│
├── Components/        # Static pages (About, Home, Pricing)
├── GameComponent/     # Core game logic components
│   ├── DiceGame.jsx
│   ├── GameConsole.jsx
│   ├── NumberGuessGame.jsx
│   ├── QRGenerator.jsx
│   ├── RockPaperScissors.jsx
│
├── assets/            # Images, styles, static files
├── App.jsx            # Root component
├── main.jsx           # Entry point

````

---

## 🧠 Core Concepts Used

- Component-based design
- State management using `useState`
- Conditional rendering
- Event handling
- Reusable UI components
- Modular folder structure

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/games-react.git
cd games-react
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 📌 How It Works

Each game is built as an independent React component inside the `GameComponent` directory. The `GameConsole` acts as a controller that loads and switches between different games dynamically.

Think of it like:

> 🎮 "Console = OS, Games = Apps"

---

## 🧩 Key Design Decisions

* Separation of concerns: UI vs game logic
* Folder-level modularization for scalability
* Independent game components → easy to extend
* Centralized entry point via `App.jsx`

---

## 🚧 Possible Improvements

* Add React Router for navigation
* Global state using Context API
* Persist scores using LocalStorage
* Add animations (Framer Motion)
* Convert to TypeScript for type safety
* Backend integration (FastAPI) for leaderboard

---

## 🐞 Common Issues

* Blank screen → Check import paths
* Game not loading → Ensure component export is correct
* Styles not applied → Verify CSS import in main.jsx

---

## 📈 Future Scope

* Multiplayer support
* AI-based opponent (for games like RPS)
* Authentication system
* Deployment with Vercel

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Karthikn-VR

```

