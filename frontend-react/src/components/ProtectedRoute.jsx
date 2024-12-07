// Create a new component ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    return children;
};

export default ProtectedRoute;
