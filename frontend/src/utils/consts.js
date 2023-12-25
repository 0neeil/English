import {jwtDecode} from 'jwt-decode';

let {id} = jwtDecode(localStorage.token, { header: false })

export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const MAIN_ROUTE = '/'
export const PROFILE_ROUTE =`/profile/${id}`
