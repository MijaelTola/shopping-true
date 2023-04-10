
export const ROUTES = {
    HOME: {
        BASE: () => {
            return '/'
        }
    },
    PRODUCT: {
        BASE: () => {
            return '/product'
        },
        BY_ID: (id: string) => {
            return `/product/${id}`
        }
    }
}
