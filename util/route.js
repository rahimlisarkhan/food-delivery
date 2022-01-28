import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LogoutIcon from '@mui/icons-material/Logout';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export const router = {
    menu: {
        home: {
            id: "001",
            title: "home",
            href: "/",
        },
        restaurants: {
            id: "002",
            title: "restaurants",
            href: "/restaurants",
        },
        about: {
            id: "003",
            title: "about us",
            href: "/about",
        },
        how: {
            id: "004",
            title: "how it works",
            href: "/how-it-works",
        },
        faqs: {
            id: "005",
            title: "faqs",
            href: "/faqs",
        },
        login: {
            id: "006",
            title: "login",
            href: "/login",
        }

    },
    user: {
        profile: {
            id: "007",
            title: "profile",
            href: "/user?page=profile",
            icon:<PeopleIcon/>
        },
        basket: {
            id: "008",
            title: "basket",
            href: "/user?page=basket",
            icon:<ShoppingBasketIcon/>
        },
        orders: {
            id: "009",
            title: "orders",
            href: "/user?page=orders",
            icon:<FilterFramesIcon/>
        },
        checkout: {
            id: "010",
            title: "checkout",
            href: "/user?page=checkout",
            icon:<PointOfSaleIcon/>
        },
        logout: {
            id: "011",
            title: "login",
            href: "/login",
            icon:<LogoutIcon/>
        }
    }
}