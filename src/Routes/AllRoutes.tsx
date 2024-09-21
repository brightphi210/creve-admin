import { Navigate, Route, Routes } from 'react-router-dom'
import Overview from '../Pages/Overview/Overview'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/overview'}/>}/>
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
