// import Login from './pages/Login'

// import Ambientes from "./pages/Ambientes";
import { useState } from "react"
import Agendamento from "./pages/Agendamento"
import "./pages/stylePages.css"

function App() {
  const [switchModal, setSwitchModal] = useState(false)

  return (
    <>
    {/* <Ambientes/> */}
     {/* <Login/>  */}
     <Agendamento exSwitchModal={switchModal} setSwitchModal={setSwitchModal} />
    </>
  )
}

export default App
