import { ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE, VOCABULARY_MYWORDS_ROUTE } from "./utils/consts"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import Setup from "./pages/Setup"
import Vocabulary from "./pages/Vocabulary"
import MyWords from "./pages/MyWords"


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
    },
    {
        path: SETTINGS_ROUTE,
        Component: <Setup/>
    },
    {
        path: VOCABULARY_MYWORDS_ROUTE,
        Component: 
            <>
                <Vocabulary/>
                <MyWords/>
            </>
    },


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