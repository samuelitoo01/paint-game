# Paint Application 🎨
 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/samuelitoo01/paint-game.svg?style=social&label=Star)](https://github.com/samuelitoo01/paint-game)

A simple and interactive web-based paint application built with HTML5 Canvas, vanilla JavaScript, and CSS. Draw freely on the canvas with customizable colors and clear your artwork with a single click.

The project focuses on real-time rendering, mouse event handling, coordinate system management, and the use of paths with `beginPath`, `moveTo`, and `lineTo`.

🔗 **Repository**: [https://github.com/samuelitoo01/paint-game](https://github.com/samuelitoo01/paint-game)

## Features

- 🖌️ **Freehand Drawing**: Draw naturally by clicking and dragging your mouse on the canvas
- 🎨 **Color Picker**: Choose any color you want for your drawings
- 🗑️ **Clear Canvas**: Instantly erase all drawings with the "Eliminar todo" (Clear All) button
- 📱 **Responsive Design**: Clean and simple interface that works in modern web browsers

## Technologies Used

- **HTML5**: Canvas element for drawing
- **CSS3**: Modern styling and layout
- **JavaScript (ES6+)**: Event handling and canvas manipulation

## Getting Started

### Prerequisites

No dependencies required! Just a modern web browser:
- Chrome (recommended)
- Firefox
- Safari
- Edge

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samuelitoo01/paint-game.git
cd paint-game
```

2. Open `index.html` in your web browser
3. Start drawing!

Alternatively, you can use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## How to Use

1. **Start Drawing**: Click and hold your mouse button on the canvas, then drag to draw
2. **Change Color**: Click on the color picker input to select a different color for your drawing
3. **Clear Canvas**: Click the "Eliminar todo" button to erase everything and start fresh

## Project Structure

```
.
├── index.html      # Main HTML file with canvas and UI elements
├── script.js       # JavaScript logic for drawing and canvas manipulation
├── styles.css      # Styling for the application
└── README.md       # This file
```

## Code Overview

### Drawing Functionality

The application uses mouse events to enable drawing:
- `mousedown`: Activates drawing mode
- `mousemove`: Draws lines while mouse is pressed
- `mouseup`: Deactivates drawing mode

### Canvas Manipulation

- Real-time coordinate calculation relative to canvas position
- Individual line strokes for smooth drawing experience
- Immediate visual feedback for all operations

## Browser Compatibility

Works on all modern browsers that support:
- HTML5 Canvas API
- ES6+ JavaScript features
- CSS Flexbox

## Future Improvements

Potential enhancements for the application:
- [ ] Brush size selection
- [ ] Undo/Redo functionality
- [ ] Save drawings as image files
- [ ] Multiple brush styles (pencil, marker, etc.)
- [ ] Touch support for mobile devices
- [ ] Drawing history/playback

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/samuelitoo01/paint-game/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Samuel Esteban Sarmiento Galvez**

- GitHub: [@samuelitoo01](https://github.com/samuelitoo01)
- Repository: [paint-game](https://github.com/samuelitoo01/paint-game)

---

**Enjoy drawing! 🎨**
