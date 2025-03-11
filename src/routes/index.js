import Managment from '../Login';
import Pages from '../Pages';
import { Routes, Route } from 'react-router-dom';


function Routers(){
    return(
        <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/managment" element={<Managment />} />     
      </Routes>
    )
}

export default Routers;