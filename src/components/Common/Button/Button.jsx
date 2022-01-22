import React from "react"
import { Button as ButtonStyled } from "./Button.styled"

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
