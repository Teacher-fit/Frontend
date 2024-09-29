import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import MyFit from './pages/MyFitPage'
import Home from '../src/pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'TeacherFit'
  }, [])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myfit" element={<MyFit />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
