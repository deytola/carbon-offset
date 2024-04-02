export const privateRoutes = [
    '/home',
]

export const authRoutes = [
    '/',
]


// When user is not logged in and tries to access protected routes redirect to login page
export const DEFAULT_REDIRECT_LOGIN_URL = '/'

// When user is logged in and tries to access login page redirect to home
export const DEFAULT_REDIRECT_HOME_URL = '/home'