import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/common/Navbar'
import AboutUs from './components/common/aboutus';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Dashboard from './page/Dashboard';
import Map from './components/core/Dashbaord/MapVis/map';
import Chart from './components/core/Dashbaord/charts/chart';
import Tool from './components/core/Dashbaord/tools/Tool';
import AiChatBot from './components/core/Dashbaord/AiRecommendations/AiChatBot';
function App() {

  return (
    <div className='h-full w-full min-h-screen bg-richblack-900 flex flex-col font-inter'>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard/map" element={<Map/>}></Route>
      <Route path="/dashboard/charts" element={<Chart/>}></Route>
      <Route path="/dashboard/tools" element={<Tool/>}></Route>
      <Route path="/dashboard/ai-recommendations" element={<AiChatBot/>}></Route>

      </Route>
      </Routes>
    </div>
  )
}

export default App
