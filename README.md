# 🎬 Chill Movie Web Application

A modern, responsive, and feature-rich movie streaming web application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**. Chill provides a sleek Netflix-inspired user interface for browsing trending movies, continuing watch lists, exploring genres, and user authentication.

---

## 🚀 Main Features

- **🏠 Interactive Home Page**:
  - **Dynamic Navigation Bar**: Responsive header with brand logo, main navigation links, and profile dropdown menu.
  - **Hero Banner**: Featured movie header with smooth background overlays, metadata badges, action buttons, and audio toggle controls.
  - **Movie Section Rows**: Horizontally scrollable content sections supporting both **portrait** and **landscape** card variants.
  - **Proportional Detail Hover Modal**: Centered Netflix-style pop-up preview modal on card hover featuring:
    - Dynamic watch progress bar for *"Melanjutkan Tonton Film"* (Landscape mode).
    - Detailed metadata (Age rating badge, total duration, rating, synopsis, genres).
    - Quick action buttons (Play, Add to My List, Expand Details) using Material Design Icons.

- **🔐 Authentication Module**:
  - **Login Page**: Clean form with client-side validation, password toggle visibility (`MdVisibility`), and Google Single Sign-On button.
  - **Register Page**: User registration form with matching password validation, seamless route navigation, and consistent UI/UX styling.

- **📱 Fully Responsive Footer**:
  - Multi-column footer with dynamic genre grid using CSS `max-content` layout (preventing unwanted text line-wraps).
  - Mobile-friendly interactive accordion toggles.

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Material Design `react-icons/md`)
- **Linting & Code Quality**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## 📁 Project Structure

```text
chill-movie-react-app/
├── public/
│   └── images/
│       └── posters/            # Movie poster images (portrait & landscape)
├── src/
│   ├── assets/                 # Brand logos, avatars, and background images
│   ├── components/
│   │   ├── auth/               # LoginForm, RegisterForm components
│   │   ├── common/             # Reusable UI components (Button, Input, IconButton, AgeRating)
│   │   ├── home/               # HeroBanner component
│   │   ├── icons/              # Custom brand icons (GoogleIcon)
│   │   ├── layout/             # Navbar, Footer, AuthLayout components
│   │   └── movie/              # MovieRow, MovieCard, MovieBadge components
│   ├── data/
│   │   └── dummyMovies.js      # Mock database for movies and genre master data
│   ├── pages/                  # Page views (Home.jsx, Login.jsx, Register.jsx)
│   ├── index.css               # Global CSS & Tailwind configuration
│   └── main.jsx                # Router setup & app root entry
├── package.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zidniyfak/chill-movie-react-app.git
   cd chill-movie-react-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode with HMR.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Previews the built production app locally.
- `npm run lint`: Runs ESLint to check for syntax and code quality issues.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
