import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Articles, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Articles />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className=" flex items-center justify-center">
          <div className="text-gray-400 text-center pb-10">
            Web design by{" "}
            <a
              href="https://madewithlux.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              MadeWithLux
            </a>
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
