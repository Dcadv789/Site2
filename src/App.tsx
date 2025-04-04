import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Challenges } from "./components/Challenges"
import { Scenario } from "./components/Scenario"
import { Benefits } from "./components/Benefits"
import { Services } from "./components/Services"
// import { Testimonials } from "./components/Testimonials"
import { Plans } from "./components/Plans"
import { FAQ } from "./components/FAQ"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Challenges />
      <Scenario />
      <Benefits />
      <Services />
      {/* <Testimonials /> */}
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App