import Navbar from "@/components/Navbar/navbar"
import Hero from "@/components/Hero/hero"
import About from "@/components/About/about"
import Skill from "@/components/Skills/skill"
import Projects from "@/components/Projects/projects"
import Contact from "@/components/Contact/contact"
import Footer from "@/components/Footer/footer"
export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    <Footer/>
  
   </main>
  )
}
