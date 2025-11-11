# Flushed Kiss

This project is an interactive bar website built with React and GSAP, designed to showcase a modern bar or restaurant experience. It features eye-catching animations and dynamic scroll effects, offering an engaging user interface for exploring drinks and other offerings.

## Features

*   **Dynamic Animations:** Utilizes GSAP and ScrollTrigger for smooth, captivating animations throughout the site.
*   **Responsive Design:** Built with React and Tailwind CSS, ensuring a seamless experience across various devices.
*   **Interactive Components:** Features distinct sections for Hero, Cocktails, About, Art, Menu, and Contact, each with unique visual elements and interactions.
*   **Modern UI/UX:** Focuses on a clean, professional, and aesthetically pleasing user interface.

## Technologies Used

*   **Frontend Framework:** React
*   **Animation Library:** GSAP (GreenSock Animation Platform) with ScrollTrigger and SplitText plugins.
*   **Styling:** Tailwind CSS
*   **Build Tool:** Vite
*   **Language:** JavaScript (ES Modules)
*   **State Management:** React Hooks (implicit)

## Installation

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JamS1t/mojito-gsap.git
    cd mojito-gsap
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Credits
This project is inspired by and follows a YouTube tutorial:
https://www.youtube.com/watch?v=AW1yfBKRMKc&t
Huge thanks to the creator: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), for providing clear explanations and guidance on React, Tailwind, and GSAP animation.

## Usage

To run the development server and view the project locally:

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your web browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Project Structure

```
mojito-gsap/
├── public/             # Static assets (images, fonts, videos)
│   ├── fonts/
│   ├── images/
│   ├── videos/
│   └── vite.svg
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Art.jsx
│   │   ├── CockTails.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── NavBar.jsx
│   ├── constants/      # Constants used throughout the application
│   ├── index.css       # Global CSS styles
│   ├── index.jsx       # Application entry point
│   └── App.jsx         # Main App component
├── .gitattributes
├── .gitignore
├── eslint.config.js    # ESLint configuration
├── index.html          # Main HTML file
├── LICENSE             # Project license file
├── package-lock.json   # npm package lock file
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite build tool configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
