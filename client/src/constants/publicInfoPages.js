/** Routes anyone can visit (footer & public info) — not redirected by owner/admin guards */
export const publicInfoPages = [
    '/about',
    '/careers',
    '/press',
    '/blog',
    '/partners',
    '/help',
    '/safety',
    '/cancel-policy',
    '/support',
    '/access',
]

export const isPublicInfoPage = (pathname) => publicInfoPages.includes(pathname)
