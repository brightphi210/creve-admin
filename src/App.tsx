import AuthProviders from './providers/AuthProviders'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import ProtectedRoute from './ProtectedRoute'
import AllRoutes from './Routes/AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import SideBar from './Components/SideBar/SideBar'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'

function App() {

  const [show, setShow] = useState<boolean>(false)
  const handleShow = () =>{
    setShow(!show)
  } 

  return (
    <>
      <AuthProviders>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<ProtectedRoute element={
                <div className='flex'>
                  <SideBar show={show}/>

                  <div className={`${show ? 'lg:w-[85%] w-full' : 'w-full'} ml-auto`}>
                    <Navbar  handleShow={handleShow} show={show}/>
                    <AllRoutes />
                  </div>
                </div>
              }/>} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </AuthProviders>
    </>
  )
}

export default App
