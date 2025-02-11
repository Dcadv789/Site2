import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Challenges } from "./components/Challenges"
import { Scenario } from "./components/Scenario"
import { Benefits } from "./components/Benefits"
import { Services } from "./components/Services"

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Challenges />
      <Scenario />
      <Benefits />
      <Services />
    </div>
  )
}

export default App