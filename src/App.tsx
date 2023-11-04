import About from "@/components/pages/About"
import Contacts from "@/components/pages/Contacts"
import { Home } from "@/components/pages/Home"
import NotFound from "@/components/pages/NotFound"
import Container from "@/components/ui/Container"
import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import { ProfileForm } from "@/components/ui/LoginForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

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
            <Route path="/login" element={<Login />} />
            <Route path="/loginForm" element={<ProfileForm />} />
            <Route path="/register" element={<Register />} />
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
