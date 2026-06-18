import { Navigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { isPublicInfoPage } from '../constants/publicInfoPages'

const AuthGuard = ({ children }) => {
    const { user, isOwner, isAdmin, ownerStatus, authLoading } = useAppContext()
    const location = useLocation()

    if (authLoading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    const isAuthPage = ['/login', '/signup'].includes(location.pathname)
    const isAdminPath = location.pathname.startsWith('/admin')
    const isOwnerPath = location.pathname.startsWith('/owner')
    const isPendingPath = location.pathname === '/owner/pending'
    const isPendingOwner = user?.role === 'hotelOwner' && ownerStatus === 'pending'
    const isInfoPage = isPublicInfoPage(location.pathname)

    if (user && isAuthPage) {
        if (isAdmin) return <Navigate to="/admin" replace />
        if (isPendingOwner) return <Navigate to="/owner/pending" replace />
        if (isOwner) return <Navigate to="/owner" replace />
        const from = location.state?.from
        if (from && from !== '/login' && from !== '/signup') {
            return <Navigate to={from} replace />
        }
        return <Navigate to="/" replace />
    }

    if (user && isAdmin && !isAdminPath && !isAuthPage && !isInfoPage) {
        return <Navigate to="/admin" replace />
    }

    if (user && isOwner && isPendingPath) {
        return <Navigate to="/owner" replace />
    }

    if (user && isPendingOwner) {
        if (!isPendingPath && !isAuthPage && !isInfoPage) {
            return <Navigate to="/owner/pending" replace />
        }
    }

    if (user && isOwner && !isOwnerPath && !isAuthPage && !isAdminPath && !isInfoPage) {
        return <Navigate to="/owner" replace />
    }

    if (user && !isOwner && !isPendingOwner && !isAdmin && isOwnerPath) {
        return <Navigate to="/" replace />
    }

    if (!user && (isOwnerPath || isAdminPath)) {
        return <Navigate to="/login" replace />
    }

    if (user && !isAdmin && isAdminPath) {
        return <Navigate to="/" replace />
    }

    return children
}

export default AuthGuard
