import { NavContainerStyled, NavContent, NavItem } from "./NavContainer.styled"
import { router } from "../../../util/route"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { useCallback } from "react"

export const NavContainer = () => {
    let { push, query: { page } } = useRouter()
    let { t } = useTranslation("menu")

    const isActive = useCallback((pathname) => {
        if (page === pathname.split("=")[1]) {
            return "true"
        }
        return ""
    }, [page])

    return (
        <NavContainerStyled>
            <NavContent>
                {Object.values(router.user)
                    .map(({ id, href, title, icon }) => {
                        return (
                            <NavItem key={`user-nav-${id}`} active={isActive(href)} onClick={() => push(href)}>
                                {icon}
                                {t(title)}
                            </NavItem>
                        )
                    })}
            </NavContent>
        </NavContainerStyled>
    )
}