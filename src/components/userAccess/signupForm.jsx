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

export function SignupForm(props) {
  const { switchToSignin } = useContext(UserContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="İsim" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Şifre" />
        <Input type="password" placeholder="Şifre Onay" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Kayıt Ol</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Zaten Hesabın Var mı?
        <BoldLink href="#" onClick={switchToSignin}>
          giriş yap
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
