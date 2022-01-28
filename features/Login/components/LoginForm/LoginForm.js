import { Form, useFormik } from "formik"
import { FormField, LoginFormContent, FormLabel, FormError, FormStyled, FormSubmit, FormGroupStyled, FormPasswordEye } from "./LoginForm.styled"
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useTranslation} from "next-i18next"
import { useState } from "react";

export const LoginForm = ({ initialValues, inputs,changeButton }) => {

    let [visible, setVisible] = useState(false)
    const { t } = useTranslation("form");

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm()
    }

    const onValidate = (values) => {
        const errors = {}

        if (!values.username) {
            errors.username = "Reuqired username"
        }

        if (!values.password) {
            errors.password = "Reuqired password"
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        validate: onValidate,
        onSubmit
    });

    const handleVisible = () => {
        setVisible(prev => !prev)
    }

    return (
        <LoginFormContent>
            <FormStyled onSubmit={formik.handleSubmit}>
                {inputs.map(field => {
                    switch (field.type) {
                        case "text":
                            return <FormGroupStyled key={`form-id-${field.id}`}>
                                <FormLabel htmlFor={`input-${field.id}`}>{t(field.label)}</FormLabel>
                                <FormField
                                    id={`input-${field.id}`}
                                    name={field.name}
                                    onChange={formik.handleChange}
                                    value={formik.values[field.name]}
                                />
                                {formik.errors[field.name] && <FormError>{formik.errors[field.name]}</FormError>}
                            </FormGroupStyled>
                        case "password":
                            return <FormGroupStyled key={`form-id-${field.id}`}>
                                <FormLabel htmlFor={`input-${field.id}`}>{t(field.label)}</FormLabel>
                                <FormField
                                    id={`input-${field.id}`}
                                    name={field.name}
                                    type={"password"}
                                    onChange={formik.handleChange}
                                    value={formik.values[field.name]}
                                />
                                {formik.errors[field.name] && <FormError>{formik.errors[field.name]}</FormError>}
                                <FormPasswordEye onClick={handleVisible}>
                                    {visible ? <VisibilityOff /> : <Visibility />}
                                </FormPasswordEye>
                            </FormGroupStyled>
                        case "email":
                            return <FormGroupStyled key={`form-id-${field.id}`}>
                                <FormLabel htmlFor={`input-${field.id}`}>{t(field.label)}</FormLabel>
                                <FormField
                                    id={`input-${field.id}`}
                                    name={field.name}
                                    type={"email"}
                                    onChange={formik.handleChange}
                                    value={formik.values[field.name]}
                                />
                                {formik.errors[field.name] && <FormError>{formik.errors[field.name]}</FormError>}
                            </FormGroupStyled>
                        default:
                            return false
                    }
                })}
    
                <FormSubmit>{!changeButton ? t("login") : t("register")}</FormSubmit>
            </FormStyled>

        </LoginFormContent>
    )
}

