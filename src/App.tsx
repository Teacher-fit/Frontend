import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import MyFitResult from './pages/MyFitResult'
import MyFit from './pages/MyFit';
import Landing from './pages/Landing';

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
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/myfit" element={<MyFit/>}></Route>
          <Route path="/result" element={<MyFitResult />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
