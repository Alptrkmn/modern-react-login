import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginForm";
import { UserContext } from "./context";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 350px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  justify-content:space-evenly;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1.8em;
  padding-bottom: 5em;
  
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -280px;
  left: -100px;
  background: #8360c3; 
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); d
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); 
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 13px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function UserBox(props) {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "kayitol"
  );

  const playExpandingEffect = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("kayitol");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("girisyap");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    playExpandingEffect,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "girisyap" && (
            <>
            
              <HeaderContainer>
                <HeaderText>Tekrar</HeaderText>
                <HeaderText>Hoş Geldiniz</HeaderText>
              <SmallText>Lütfen Giriş Yapın!</SmallText>
              </HeaderContainer>
            </>
          )}
          {active === "kayitol" && (
            <>
              <HeaderContainer>
                <HeaderText>Hesap </HeaderText>
                <HeaderText>Oluşturun</HeaderText>
              <SmallText>Devam Etmek İçin Hesap Oluşturun</SmallText>
              </HeaderContainer>
            </>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "girisyap" && <LoginForm />}
          {active === "kayitol" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </UserContext.Provider>
  );
}