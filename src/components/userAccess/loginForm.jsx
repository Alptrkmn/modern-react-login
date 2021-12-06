import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { UserContext } from "./context";

export function LoginForm(props) {
  const { switchToSignup } = useContext(UserContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Şifre" />
      </FormContainer>
      <MutedLink href="#">Şifreni mi Unuttun?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Giriş Yap</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Hesabın Yok mu?
        <BoldLink href="#" onClick={switchToSignup}>
          kayıt ol
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
