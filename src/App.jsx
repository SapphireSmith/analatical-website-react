import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <h1>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter/>
      <Cards/>
      <Footer/>
    </h1>
  )
}