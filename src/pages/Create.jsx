import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import styled from "styled-components";
import CreateForm from "../components/CreateForm";

function Create() {
  const navigate = useNavigate();

  return (
    <CreatePage>
      <CreateHeader>
        <h1 style={{ color: "white" }}>오늘의 일기를 적어주세요~</h1>
        <Button
          text={"안 쓸래요ㅠㅠ"}
          borderColor={"white"}
          backgroundColor={"#586a95"}
          onClick={() => {
            navigate(`/`);
          }}
        />
      </CreateHeader>
      <CreateMain>
        <CreateForm />
      </CreateMain>
    </CreatePage>
  );
}

export default Create;

const CreatePage = styled.div`
  padding: 10px;
  background-color: #586a95;
  height: 100vh;
  box-sizing: border-box;
`;
const CreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  height: 50px;
  margin-bottom: 10px;
`;
const CreateMain = styled.div`
  padding: 10px;
`;
