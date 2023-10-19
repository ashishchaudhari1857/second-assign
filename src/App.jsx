import './App.css'
import Header from './Component/NavBar/Header'
import AppBody from './Component/AppBody/AppBody'
import CompleteTask  from './Component/AppBody/Content//TaskSection/CompleteTask/CompleteTask'
import { Route ,Routes } from 'react-router-dom'
import Upcoming from './Component/AppBody/Content/TaskSection/UpcomingTask/Upcoming'

function App() {

  return (
    <>
        <Header></Header>
<Routes>\
<Route path='/' element={<CompleteTask></CompleteTask>}></Route>

  <Route path='/' element={<AppBody></AppBody>}>
        <Route path='/complete' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/upcoming' element={<Upcoming></Upcoming>}></Route>
  </Route>
</Routes>
        

    </>
  )
}

export default App
