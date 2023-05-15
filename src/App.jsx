import { Routes, Route } from 'react-router-dom';
import Weather from "./Weather/Weather";
import Ninja from "./Ninja Quiz/Ninja";

const App = () => {
  return (
    <div className="min-h-[100dvh] bg-gray-800 text-white">
      <Routes>
        <Route path='/weather' element={<Weather />}/>
        <Route path='/ninja' element={<Ninja />}/>
      </Routes>
    </div>
  )
}

export default App;