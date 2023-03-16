import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Buttons";
import DiaryList from "../components/DiaryList";

function Home({ diarys }) {
  const navigate = useNavigate();
  return (
    <HomePage>
      <Stlayout>
        <StHeader>
          <h1 style={{ color: "white" }}>일기를 써보아요!</h1>
          <Button
            text={"일기 쓸래요!"}
            borderColor={"white"}
            backgroundColor={"#586a95"}
            onClick={() => {
              navigate(`/create`);
            }}
          />
        </StHeader>
        <StMain>
          <DiaryList diarys={diarys} />
        </StMain>
      </Stlayout>
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div`
  height: 100vh;
  background-color: #586a95;
`;

export const Stlayout = styled.div`
  padding: 20px;
  background-color: #586a95;
  /* height: 100vh; */
  box-sizing: border-box;
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const StMain = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 50px;
`;
