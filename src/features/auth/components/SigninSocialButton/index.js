import React from "react";
import { 
    Button, 
    Text, 
} from "./styles";


export function SigninSocialButton({title, ...rest}){
    return(
        <Button {...rest}>
            <Text>{title}</Text>
        </Button>
    );
}