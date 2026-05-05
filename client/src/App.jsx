import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
   <>
      <Toaster />
      <Routes>
        <Route path="/login" element={ <LoginLanding /> }/>
        
      </Routes>
   </>
  )
}

export default App
