import { Navigate, Route, Routes } from 'react-router-dom'
import Overview from '../Pages/Overview/Overview'
import Creatives from '../Pages/Creatives/Creatives'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/overview'}/>}/>
        <Route path='/overview' element={<Overview />} />
        <Route path='/talents' element={<Creatives />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
