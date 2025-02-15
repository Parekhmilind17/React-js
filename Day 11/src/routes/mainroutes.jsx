import {Routes,Route} from 'react-router'
import Home from "../pages/home"
import Login from '../pages/login'
import Signup from '../pages/signup'
import Men from '../pages/men'
import SingleProduct from '../pages/SingleProduct'
import PageNotfound from '../pages/PageNotfound'


function MainRoutes(){
 return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/product' element={<SingleProduct/>}></Route>
        <Route path='*' element={<PageNotfound/>}></Route>
    </Routes>
 )
}

export default MainRoutes