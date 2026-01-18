# 🐍 Snake Game

A classic Snake game implementation built with vanilla JavaScript, HTML5, and Canvas. Navigate your snake around the game board, eat food to grow longer, and compete for the highest score!

## 🎮 Features

- **Classic Gameplay** - Navigate the snake using arrow keys to eat food and grow longer
- **Score Tracking** - Current score and high score display with persistent storage
- **Pause/Resume** - Press Space to pause and resume the game at any time
- **Collision Detection** - Game ends when the snake hits the walls or itself
- **Auto-Save High Score** - Your best score is saved in browser's localStorage
- **Smooth Controls** - Responsive arrow key controls with direction validation
- **Game Over Screen** - Beautiful overlay displaying final score with restart option
- **Color-Coded Snake** - Head and body segments with distinct colors for better visibility
- **Modern UI** - Dark theme with cyan borders and smooth animations

## 🚀 How to Play

1. **Open** `index.html` in your web browser
2. **Use Arrow Keys** to control the snake's direction:
   - `↑` Arrow Up - Move Up
   - `↓` Arrow Down - Move Down
   - `←` Arrow Left - Move Left
   - `→` Arrow Right - Move Right
3. **Eat Food** - Guide your snake to the red food squares to grow and earn points
4. **Avoid Collisions** - Don't hit the walls or your own tail!
5. **Press Space** to pause/resume the game
6. **Press ENTER** when game is over to restart

## 📊 Scoring

- Each food eaten = 1 point
- Your high score is automatically saved and persists between sessions
- Try to beat your personal best!

## 📁 Project Structure

```
snake-game/
├── index.html           # Main HTML file with game canvas
├── style.css            # Game styling and layout
├── js/
│   ├── main.js          # Game loop and main logic
│   ├── config.js        # Game configuration (canvas size, FPS, box size)
│   ├── snake.js         # Snake movement and growth logic
│   ├── food.js          # Food generation and positioning
│   ├── collision.js     # Collision detection logic
│   ├── controls.js      # Keyboard input handling
│   ├── renderer.js      # Canvas drawing functions
│   ├── score.js         # Score tracking and high score management
│   ├── gameState.js     # Game state management
│   └── utils.js         # Utility functions
└── assets/              # Game assets (sounds, images)
```

## 🛠️ Technical Details

### Technology Stack

- **HTML5** - Game structure and canvas element
- **CSS3** - Styling and layout
- **JavaScript (ES6 Modules)** - Game logic with modular architecture
- **Canvas API** - Graphics rendering

### Game Configuration

- **Canvas Size** - 400x400 pixels
- **Box Size** - 20x20 pixels
- **Frame Rate** - 7 FPS (adjustable in config.js)

### Key Components

| File           | Purpose                                 |
| -------------- | --------------------------------------- |
| `main.js`      | Core game loop and collision checking   |
| `snake.js`     | Snake position, movement, and growth    |
| `food.js`      | Food spawning logic                     |
| `collision.js` | Wall and self-collision detection       |
| `controls.js`  | Keyboard event handling                 |
| `renderer.js`  | Canvas drawing operations               |
| `score.js`     | Score calculation and storage           |
| `gameState.js` | Game state variables (paused, gameOver) |
| `config.js`    | Game constants and settings             |

## 🎯 Installation

No installation required! Simply:

1. Download or clone the project
2. Open `index.html` in any modern web browser
3. Start playing!

## 💾 Data Persistence

- High scores are saved using **localStorage**
- Your best score will be remembered even after closing the browser
- Clear browser data to reset the high score

## 🎨 Visual Design

### Color Scheme

- **Background** - Dark slate (#0f172a)
- **Canvas Border** - Cyan (#38bdf8)
- **Snake Head** - Bright green (#22c55e)
- **Snake Body** - Dark green (#16a34a)
- **Food** - Red (#ef4444)

### Game Over Screen

- Semi-transparent dark overlay
- Large "GAME OVER" text
- Final score display
- Clear restart instructions

## 🎨 Customization

You can easily customize the game by editing `js/config.js`:

```javascript
export const canvas_size = 400; // Change canvas dimensions
export const box_size = 20; // Change snake/food size
export const FPS = 7; // Change game speed
```

**Note:** Higher FPS values = faster gameplay, lower FPS values = slower gameplay

## 🐛 Game Over Conditions

The game ends when:

- ❌ The snake hits the top, bottom, left, or right wall
- ❌ The snake collides with its own body

When the game ends:

- A beautiful game over overlay appears with your final score
- The overlay displays instructions to press ENTER to restart
- Score resets to 0 (but high score is preserved)
- Press ENTER to start a new game!

## 🎯 Tips for High Scores

1. **Plan Ahead** - Think about your snake's path before moving
2. **Avoid Corners** - Don't box yourself into tight spaces
3. **Use Pause** - Press Space to take a break and plan your strategy
4. **Practice** - Play multiple rounds to improve your reflexes

## 🌟 Future Enhancements

Potential improvements for future versions:
- Sound Effect and Background Music
- Multiple difficulty levels
- Mobile touch controls
- Leaderboard system
- Power-ups and special items
- Different game modes (time attack, endless mode)
- Themes and customizable colors

## 📝 License

This project is open source and free to use and modify.

## 👨‍💻 Author

Created as a fun project to practice JavaScript and concepts.

---

**Enjoy the game and try to beat your high score!** 🎮✨
