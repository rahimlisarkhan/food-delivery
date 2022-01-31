import { Button } from "@mui/material"
import { Field, FormContent, FormGroupStyled } from "./UserForm.styled"



export const UserForm = () => {

    return (
        <FormContent>
                <FormGroupStyled>
                    <Field />
                </FormGroupStyled>
                <FormGroupStyled>
                    <Field />
                </FormGroupStyled>
                <FormGroupStyled>
                    <Field />
                </FormGroupStyled>
                <FormGroupStyled>
                    <Field />
                </FormGroupStyled>
                <FormGroupStyled>
                    <Field />
                </FormGroupStyled>
                <FormGroupStyled>
                    <Button variant="contained" size="large" color="success">Send</Button>
                </FormGroupStyled>
        </FormContent>
    )
}