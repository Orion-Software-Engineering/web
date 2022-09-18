import { cleanTrailingZeroInNumericSectionValue } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 46%,
    rgba(252, 178, 69, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
font-size: 30px;
font weight : 600;
line-height: 1.24;
color: #ffff;
z-index: 10;
margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 10px;
`;

import React from "react";

const Index = () => {
  return (
    <BoxContainer>
      <TopContainer>
        {/* <Backdrop /> */}
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText> Please sign-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
    </BoxContainer>
  );
};

export default Index;
