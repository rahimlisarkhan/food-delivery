import { Fragment, useState } from "react"
import { LoginImageContent, LoginFormContent } from "./LoginContainer.styled"
import Image from "../../../components/Image"
import FormTabPanel from "../components/FormTabPanel"

export const LoginContainer = () => {

    let [change, setChange] = useState(false)

    return (
        <Fragment>
            <LoginImageContent>
                <Image src={`/image/login/${!change ? "login" : "signup"}.svg`} alt="login" />
            </LoginImageContent>
            <LoginFormContent>
                <FormTabPanel setChange={setChange} />
            </LoginFormContent>
        </Fragment>
    )
} 
