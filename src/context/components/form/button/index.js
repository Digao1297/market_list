import React from "react";

import { TouchableOpacityProps } from "react-native";

import { 
    Container, 
    Title 
} from "./styles";


export function ButtonForm({title, ...rest}){
    return (
        <Container {...rest}>
            <Title>{ title }</Title>
        </Container>
    );
}
