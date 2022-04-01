import { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "../Header/Header"
import HomePage from "../../Pages/HomePage/HomePage.js"
import AboutPage from "../../Pages/AboutPage/AboutPage"
import HousingPage from "../../Pages/HousingPage/HousingPage"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage.js"
import Footer from "../Footer/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/housing/:id" element={<HousingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App
