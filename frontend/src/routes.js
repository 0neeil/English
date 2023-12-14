import { ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"


export const adminRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: <Auth/>
    },
]

export const authRoute = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    }

]

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: <Auth></Auth>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth></Auth>
    }
]