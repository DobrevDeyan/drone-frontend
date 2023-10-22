import About from "@/components/pages/About"
import Contacts from "@/components/pages/Contacts"
import { Home } from "@/components/pages/Home"
import NotFound from "@/components/pages/NotFound"
import Container from "@/components/ui/Container"
import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Container>
        <Header></Header>
      </Container>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
