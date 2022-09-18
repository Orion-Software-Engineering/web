import React from " react";
import { BoxContainer,FormContainer,Input,MutedLink,SubmitButton } from "./common";
import {Marginer} from  "../marginer"; 

export function LoginForm(props) {

    const  {switchToSignup} = useContext(AccountContext);
    return( 
        <BoxContainer>
        <FormContainer>
            <Input type="username" placeholder="Username" />
            <Input type="password" placeholder="Password" />
    
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction="vertical" margin="1.em"/>
            <MutedLink href="#">Don't have an account?<BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink>
            </MutedLink>
    </BoxContainer>
    );
}