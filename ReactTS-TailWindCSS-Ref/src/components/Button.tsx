import {VariantProps } from "class-variance-authority"
import { buttonStyles } from "./buttonstyle"
import {ComponentProps}from 'react'
import { twMerge } from "tailwind-merge"



type ButtonProps= VariantProps<typeof buttonStyles>&ComponentProps<"button">

export const Button = ({variant,size,className,...props}:ButtonProps) => {
  return (
    <button {...props} 
    className={twMerge(buttonStyles({variant,size}),className)}
     ></button>
  )
}
export default Button;
