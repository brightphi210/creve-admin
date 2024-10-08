import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({element} : any) => {
    const navigate = useNavigate()
    // const isAuthenticated = localStorage.getItem('token')
    const isAuthenticated = localStorage.getItem('token')

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login')
        }
    },[isAuthenticated, navigate])

    return isAuthenticated ? element : null
}

export default ProtectedRoute
