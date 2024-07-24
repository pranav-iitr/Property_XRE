
import { Navigate } from 'react-router-dom'
import { useAtom } from 'jotai';
import { authAtom } from '../store/auth';
const PrivateRoutes = ({ children }) => {
    const [auth] = useAtom(authAtom);
    console.log(auth)
    const isAuthenticated = () => {
        const token = auth?.access_token;
        return token ? true : false;
    };


    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoutes