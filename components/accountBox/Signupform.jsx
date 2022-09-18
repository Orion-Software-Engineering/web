import React from " react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) 
{
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="username" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder=" Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1.em" />
      <MutedLink href="#">
        Don't have an account? {" "}
        <BoldLink href="#" onClick={switchToSignin}>
          Signup
        </BoldLink>
      </MutedLink>
     </BoxContainer>
  );
 }