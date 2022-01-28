import { ProfileContainerStyled, ProfileContent } from "./ProfileContainer.styled"
import TextTypograph from "../../../components/Typograph"
import { useTranslation } from "next-i18next"


export const ProfileContainer = () => {

    let { t } = useTranslation("menu")

    return (
        <ProfileContainerStyled>
            <ProfileContent>
                <TextTypograph font="30" bold="true" color="darkgray">
                    {t("profile")}
                </TextTypograph>
            </ProfileContent>
        </ProfileContainerStyled>
    )
}
