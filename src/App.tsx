import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

import Footer from '../src/components/Footer'
import ScrollToTop from '../src/components/ScrollToTop' // ScrollToTop 파일 경로
import MyFitResult from './pages/MyFitResult'
import MyFit from './pages/MyFit'
import Landing from './pages/Landing'

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'TeacherFit'
  }, [])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/myfit" element={<MyFit />}></Route>
          <Route path="/result" element={<MyFitResult />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
