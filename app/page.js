// 'use client'
// import { useEffect, useState } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Services from "./components/Services";
// import Work from "./components/Work";

// export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(null); // Initial state to handle hydration

//   useEffect(() => {
//     // Check if it's the client-side
//     if (typeof window !== 'undefined') {
//       const storedTheme = localStorage.getItem('theme');
//       const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
//       // Set dark mode based on localStorage or system preference
//       if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
//         setIsDarkMode(true);
//       } else {
//         setIsDarkMode(false);
//       }
//     }
//   }, []); // Empty dependency array to run only once on mount

//   useEffect(() => {
//     // Apply dark mode to the document
//     if (isDarkMode !== null) {
//       if (isDarkMode) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.removeItem('theme');
//       }
//     }
//   }, [isDarkMode]); // Runs when isDarkMode changes

//   // If isDarkMode is still null (loading), return a loading indicator to prevent hydration mismatch
//   if (isDarkMode === null) {
//     return <div>Loading...</div>; // or any other loading component
//   }

//   return (
//     <>
//       <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//       <Header isDarkMode={isDarkMode} />
//       <About isDarkMode={isDarkMode} />
//       <Services isDarkMode={isDarkMode} />
//       <Work isDarkMode={isDarkMode} />
//       <Contact isDarkMode={isDarkMode} />
//       <Footer isDarkMode={isDarkMode} />
//     </>
//   );
// }


'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(null); // Initially null to avoid mismatch

  useEffect(() => {
    // Check if it's the client-side
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set dark mode based on localStorage or system preference
      if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to the document
    if (isDarkMode !== null) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
      }
    }
  }, [isDarkMode]);

  // If isDarkMode is still null (loading), return a loading indicator to prevent hydration mismatch
  if (isDarkMode === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      {/* <Work isDarkMode={isDarkMode} /> */}
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

