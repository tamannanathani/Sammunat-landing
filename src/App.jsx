import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Features from "../src/components/Features"
import ProblemSolution from "../src/components/ProblemSolution"
import HowItWorks from "../src/components/HowItWorks"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"
import "./App.css"

export default function App() {
  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Features />
      <ProblemSolution />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  )
}