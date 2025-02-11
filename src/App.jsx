import { BrowserRouter } from "react-router-dom"

import { About, Contact, Hero, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components/components"
import { ToastContainer } from "react-toastify"
function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div 
          // className="bg-hero-pattern bg-cover bg-no-repeat bg-center text-secondary"
          className="bg-black"
      
        >
          <ToastContainer theme="dark" />
          <Navbar  />
          <div className="relative z-0" >

          <Hero   />
          <StarsCanvas />
          </div>
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">

          <Contact />
          <StarsCanvas />
        </div>


      </div>
    </BrowserRouter>
  )
}

export default App
