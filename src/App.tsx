import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Challenges } from "./components/Challenges"
import { Scenario } from "./components/Scenario"
import { Benefits } from "./components/Benefits"

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Challenges />
      <Scenario />
      <Benefits />
    </div>
  )
}

export default App