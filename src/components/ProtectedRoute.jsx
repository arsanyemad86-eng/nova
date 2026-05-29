import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('nova_auth')
  return isAuth ? children : <Navigate to="/login" />
}

export default ProtectedRoute