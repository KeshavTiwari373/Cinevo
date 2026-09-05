# 🎬 Cinevo

> **Find your next movie obsession.**

Cinevo is a modern movie discovery application built as a hands-on project to explore React development, API integration, reusable components, responsive interfaces, and clean frontend architecture.

Instead of endlessly scrolling through random titles, Cinevo makes it easier to discover popular movies, search for something specific, and explore a growing collection of films through a simple and responsive interface.

---

## ✨ What You Can Do

### 🔎 Discover Movies

Browse through a collection of movies and explore titles that are currently available through the application.

### 🎯 Search

Looking for something specific? Use the search experience to quickly find movies by title.

### 🔥 Trending

A dedicated trending section highlights movies that are getting the most attention, making it easier to discover what's popular.

### 📱 Responsive Experience

The interface is designed to adapt to different screen sizes, from desktop monitors to tablets and mobile devices.

### 🧩 Reusable Components

The project is structured around reusable React components so that UI elements can be maintained and extended without unnecessary duplication.

### ⚡ Smooth User Experience

Loading states, organized layouts, visual hierarchy, and responsive interactions are used to keep the application feeling fast and intuitive.

---

## 🛠️ Built With

| Technology       | Purpose                               |
| ---------------- | ------------------------------------- |
| **React**        | Building the application interface    |
| **Vite**         | Development server and build tooling  |
| **Tailwind CSS** | Responsive styling and UI design      |
| **Appwrite**     | Backend services and data persistence |
| **TMDB API**     | Movie and entertainment data          |

---

## 🏗️ Project Focus

This project is primarily a learning exercise, with an emphasis on writing frontend code that can scale beyond a single page.

Some of the concepts explored include:

- Component-based UI development
- Reusable React components
- API requests and asynchronous data
- Search functionality
- Dynamic movie lists
- Trending movie calculations
- Loading and empty states
- Responsive layouts
- Separation of UI and data logic
- Environment variables
- Maintainable project structure
- Reusable utility functions

The goal isn't just to make the application look good — it's to understand **how to organize a real-world React application**.

---

## 📂 Project Structure

A simplified view of the application structure:

```text
src/
├── components/
│   ├── MovieCard
│   ├── Search
│   ├── Trending
│   └── Spinner
│
├── pages/
│   └── Home
│
├── services/
│   └── movieApi
│
├── hooks/
│   └── ...
│
├── utils/
│   └── ...
│
├── App.jsx
└── main.jsx
```

The exact structure may evolve as the application grows. The idea is to keep responsibilities separated and make individual pieces easier to reuse.

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone <your-repository-url>
cd cinevo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

Add your own credentials to the corresponding variables.

### 4. Start the development server

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

---

## 🧠 What I Learned

Building Cinevo helped me practice more than just creating movie cards.

The project gave me experience with:

- Working with third-party APIs
- Managing asynchronous requests
- Building reusable React components
- Creating responsive layouts with Tailwind
- Handling search input and results
- Designing a trending/discovery experience
- Structuring frontend code for reuse
- Connecting a frontend application to backend services
- Managing configuration through environment variables

---

## 🔮 Possible Improvements

There are plenty of directions this project can grow in the future:

- 🎥 Movie details pages
- ❤️ Favorites / watchlist
- 👤 User authentication
- 🌙 Theme switching
- 🎭 Genre-based browsing
- 📊 Personalized recommendations
- ⭐ User ratings
- 🎞️ Trailer previews
- 🔖 Watch history
- 🤖 Smarter recommendation algorithms

---

## 📸 Preview

Screenshots of application.

<img width="1800" height="520" alt="Cinevo React App" src="https://github.com/user-attachments/assets/48a6feb3-b351-4633-bf57-877d404796ba" />

---

## ⚠️ Disclaimer

Cinevo is a practice/learning project created to improve my skills in modern frontend development and API-based applications.

Movie information and related data are provided through the external movie API used by the application.

---

## 👨‍💻 About the Project

This project is part of my journey toward becoming a better frontend/full-stack developer.

Rather than treating the application as just a UI exercise, I used it to practice **architecture, reusability, API integration, responsive design, and maintainable React code**.

More features will be added as I continue experimenting and learning.

---

### ⭐ If you found this project interesting

Feel free to explore the code, experiment with it, and build your own version.

**Built with React & a lot of curiosity. 🍿**

> > > > > > > 5f591150103e05d9755fe96c87ecaa881d78aa88
