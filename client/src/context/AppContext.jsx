import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currency = "ETB ";
    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(() => localStorage.getItem('token'))
    const [isOwner, setIsOwner] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [ownerStatus, setOwnerStatus] = useState('none')
    const [authLoading, setAuthLoading] = useState(true)
    const [searchedCities, setSearchedCities] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [hospitalities, setHospitalities] = useState([]);

    const applyAuth = (authToken, userData) => {
        localStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setToken(authToken);
        setUser(userData);
        setIsOwner(!!userData.isOwner);
        setIsAdmin(!!userData.isAdmin);
        setOwnerStatus(userData.ownerStatus || 'none');
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }

    const clearAuth = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        setIsOwner(false);
        setIsAdmin(false);
        setOwnerStatus('none');
        delete axios.defaults.headers.common['Authorization'];
    }

    const syncUserState = (data) => {
        setIsOwner(!!data.isOwner);
        setIsAdmin(!!data.isAdmin);
        setOwnerStatus(data.ownerStatus || 'none');
        setSearchedCities(data.recentSearchedCities || []);
        setUser(prev => ({
            ...prev,
            role: data.role,
            username: data.username,
            email: data.email,
            image: data.image,
            phone: data.phone,
            bio: data.bio,
            isOwner: data.isOwner,
            isAdmin: data.isAdmin,
            ownerStatus: data.ownerStatus,
            rejectionReason: data.rejectionReason,
        }));
    }

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/');
            if (data.success) {
                syncUserState(data);
            }
        } catch {
            clearAuth();
        } finally {
            setAuthLoading(false);
        }
    }

    const login = async (email, password) => {
        const { data } = await axios.post('/api/auth/login', { email, password });
        if (!data.success) throw new Error(data.message);
        applyAuth(data.token, data.user);
        return data.user;
    }

    const signup = async (payload) => {
        const { data } = await axios.post('/api/auth/signup', payload);
        if (!data.success) throw new Error(data.message);
        if (data.token) applyAuth(data.token, data.user);
        return { user: data.user, message: data.message };
    }

    const logout = () => {
        clearAuth();
        navigate('/');
    }

    const getToken = async () => token;

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms')
            if (data.success) {
                setRooms(data.rooms)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const fetchHospitalities = async () => {
        try {
            const { data } = await axios.get('/api/hospitalities')
            if (data.success) {
                setHospitalities(data.hospitalities)
            }
        } catch (error) {
            console.error('Failed to load hospitalities', error.message)
        }
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const stored = localStorage.getItem('user');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setUser(parsed);
                    setIsOwner(!!parsed.isOwner);
                    setIsAdmin(!!parsed.isAdmin);
                    setOwnerStatus(parsed.ownerStatus || 'none');
                } catch { /* ignore */ }
            }
            fetchUser();
        } else {
            setAuthLoading(false);
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    useEffect(() => {
        fetchRooms();
        fetchHospitalities();
    }, [])

    const value = {
        currency,
        navigate,
        user,
        token,
        authLoading,
        isOwner,
        isAdmin,
        ownerStatus,
        login,
        signup,
        logout,
        fetchUser,
        getToken,
        axios,
        searchedCities,
        setSearchedCities,
        rooms,
        setRooms,
        hospitalities,
        setHospitalities,
        fetchHospitalities,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
