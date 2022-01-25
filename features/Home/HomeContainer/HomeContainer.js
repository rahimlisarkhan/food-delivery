import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import Info from "../components/Info"
import Offer from "../components/Offer"

export const HomeContainer = () => {

    let { t } = useTranslation()

    const infoCards = [{
        title: "Discount Boucher",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/1.png"
    }, {
        title: "Fresh healthy Food",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/2.jfif"
    }, {
        title: "Fast Home Delivery",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/3.png"
    }
    ]

    const offerCards = [{
        title: "Dubble Chees",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/menu.png"
    }, {
        title: "French Fries",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/fries.png"

    }, {
        title: "Margarita",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/pizza.png"
    }
    ]

    const offers = [{
        title: "Menu That Always Make You Fall In Love",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        img: "/image/menu.png"
    }, {
        title: "Yummy Always Papa John’s Pizza.Agree?",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        img: "/image/sendvic.png"
    }, {
        title: "Do You Like French Fries? Mmm...",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        img: "/image/fries.png"
    }
    ]

    const renderOffer = () => {
      return  offers.map((offer, index) => {
            if (index % 2 !== 0) {
                return <Offer key={`offer-id-${index}`} rotate={"true"}  {...offer} />
            }
            return <Offer key={`offer-id-${index}`} rotate={"false"}   {...offer} />
        })
    }

    return (
        <Fragment>
            <Info title={t("features")} desc={t("features desc")} cards={infoCards} />
            {renderOffer()}
            <Info title={t("out popular")} desc={t("features desc")} cards={offerCards} />
        </Fragment>
    )
}