import './App.css'
import Navigation from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experiences.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";
import React, {useRef} from "react";
import HomeAscii from "./components/HomeAscii.tsx";

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

    function handleScrollTo(ref: React.RefObject<HTMLDivElement | null>){
      ref.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
        <div className="flex flex-col min-h-screen max-w-screen">
            <Navigation onNavigate={handleScrollTo} refs={{aboutRef, experienceRef, projectsRef}} />
          <main className="mt-28 h-full w-full flex-grow max-w-screen">
              <HomeAscii/>
              <About ref={aboutRef}/>
              <Experience ref={experienceRef}/>
              <Projects ref={projectsRef}/>

          </main>
            <Footer/>
        </div>
    </>
  )
}

export default App
