# 📱 Appify

**Appify** is a modern, responsive web application where users can discover, explore, and manage their favorite applications all in one place. Built with a clean UI and smooth user experience, it allows users to browse through a complete collection of apps, install them, and keep track of their installed and favorite apps seamlessly.

**🔗 Live Demo:** [Visit Appify](https://appify-sm-sazzad.vercel.app/)

---

## ✨ Key Features

- **🏠 Home Page:** A beautiful hero section with a call-to-action to explore the app market.
- **📱 All Apps Collection:** Browse a complete collection of popular apps (WhatsApp, Spotify, Instagram, TikTok, etc.) displayed in a responsive grid layout.
- **📊 App Details Page:** Click on any app to view detailed information including ratings, reviews, size, downloads, developer info, and "You might also like" suggestions.
- **📥 Install Apps:** Easily install apps with a single click from the details page or the app cards.
- **❤️ Favourite Apps:** Save apps to your favourites list for quick access later.
- **📂 Installed Apps Manager:** Keep track of all the apps you've installed in a dedicated section. You can also uninstall apps from here.
- **🔍 Filter & Sort (Installed/Favourite):** Toggle between "Installed" and "Favourite" tabs to manage your apps efficiently.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.
- **🎨 Clean UI/UX:** Modern purple-themed design with smooth transitions and intuitive navigation.
- **🔄 Empty States:** Beautifully designed empty states with illustrations when no apps are installed or favourited.

---

## 🛠️ Technologies Used

- **Next.js** - React framework for production-grade applications
- **React.js** - Frontend library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - For modern, utility-first styling
- **React Icons** - For beautiful and consistent icons
- **React Hot Toast** - For interactive notifications (Install/Uninstall/Favourite actions)
- **Vercel** - For deployment

---

## 🚀 Run Locally

Follow these steps to run the project on your local machine:

**1. Clone the repository:**

    git clone https://github.com/sm-sazzad/Appify.git

**2. Navigate to the project directory:**

    cd Appify

**3. Install dependencies:**

    npm install

**4. Start the development server:**

    npm run dev

**5. Open in browser:**

    Visit http://localhost:3000 to view the app.

---

## 📁 Folder Structure

    Appify/
    ├── public/                       # Static assets (images, favicon, etc.)
    ├── src/                          # Source files
    │   ├── Context/                  # React Context API for global state
    │   │   └── AppProvider.tsx       # Context provider for app data (installed, favourites)
    │   ├── DataType/                 # TypeScript types and interfaces
    │   │   └── DataType.ts           # Type definitions for app data
    │   ├── app/                      # Next.js App Router directory
    │   │   ├── Components/           # Reusable UI components
    │   │   │   ├── Shared/           # Shared components (e.g., buttons, modals)
    │   │   │   ├── Banner.tsx        # Hero/Banner section
    │   │   │   ├── Card.tsx          # App card component
    │   │   │   ├── Footer.tsx        # Footer component
    │   │   │   └── PopularApps.tsx   # Popular apps section
    │   │   ├── apps/                 # Apps route
    │   │   │   ├── [AppsId]/         # Dynamic route for app details
    │   │   │   ├── layout.tsx        # Layout for apps route
    │   │   │   ├── loading.tsx       # Loading UI for apps route
    │   │   │   └── page.tsx          # Main apps page (All Apps)
    │   │   ├── installed-apps/       # Installed apps route
    │   │   └── favicon.ico           # App favicon
    ├── .gitignore
    ├── AGENTS.md
    ├── CLAUDE.md
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json

---

## 🎯 Future Improvements

- [ ] User Authentication (Login/Signup)
- [ ] Backend Integration for real-time app data
- [ ] Dark Mode toggle
- [ ] App Reviews & Ratings submission
- [ ] Search functionality with advanced filters
- [ ] Pagination or Infinite Scroll for "All Apps"

---

## 👨‍💻 Developer

**Sheikh Md Sazzad Hossain**

- **GitHub:** [@sm-sazzad](https://github.com/sm-sazzad)
- **LinkedIn:** [SM Sazzad](https://www.linkedin.com/in/sm-sazzad/)

---

Built with ❤️ by **SM Sazzad**