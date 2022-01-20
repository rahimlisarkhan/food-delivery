import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import Info from "../Info"

export const HomeContainer = () => {

    let { t } = useTranslation()

    const infoCards = [{
        title: "Discount Boucher",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/1.png"
    },{
        title: "Fresh healthy Food",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/2.jfif"
    },{
        title: "Fast Home Delivery",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/info/3.png"
    }
    ]

    const offerCards = [{
        title: "Dubble Chees",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/sendvic.png"
    },{
        title: "French Fries",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/fries.png"

    },{
        title: "Margarita",
        desc: "Lorem ipsum is placeholder  commonly used in the graphic ",
        img: "/image/pizza.png"

    }
    ]

    return (
        <Fragment>
            <Info title={t("features")} desc={t("features desc")} cards={infoCards} />
            <Info title={t("out popular")} desc={t("features desc")} cards={offerCards} />
        </Fragment>
    )
}