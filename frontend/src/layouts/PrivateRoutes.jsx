import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token ? true : false;
    };


    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoutes