import {Routes, Route} from 'react-router-dom'

import App from '../pages/App.jsx'
import Sabores from '../pages/Sabores.jsx'
import Preços from '../pages/Preços.jsx'
import Encomende from '../pages/Encomende.jsx'


function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/pagina-inicial' element={<App/>}/>
            <Route path='/sabores' element={<Sabores/>}/>
            <Route path='/preços' element={<Preços/>}/>
            <Route path='/encomende' element={<Encomende/>}/>
        </Routes>
    )
}

export default MainRoutes