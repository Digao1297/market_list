import React from "react";
import { Controller } from "react-hook-form";

import {Container, Error, Input} from "./styles";



export function InputForm({ control, name, error, ...rest }){
    return (
        <Container>
            <Controller 
                control={control}
                render={({field: {onChange, value}}) => (
                    <Input 
                    {...rest} 
                    onChangeText={onChange}
                    value={value}
                    />
                    )}
                    name={name}
            />
            {error && <Error>{error}</Error>}
        </Container>
    );
}
