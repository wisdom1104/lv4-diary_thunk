import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __deleteDiary, __getDiarys } from "../redux/modules/diarySlice";
import Button from "./Buttons";

function DiaryItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //삭제
  const onDeleteHandler = async (id) => {
    await dispatch(__deleteDiary(id));
    await dispatch(__getDiarys());
  };

  return (
    <>
      <DiaryCade key={item.id}>
        <Diarytext>
          <Author>
            <UserText>🌿 {item.author}</UserText>
            <div>의 일기 🌿</div>
          </Author>
          <Title>
            <div>🌱 일기 제목</div>
            <UserText>{item.title} </UserText>
          </Title>
          <Content>
            <div>🌱 내용</div>
            <UserText>{item.content} </UserText>
          </Content>
        </Diarytext>
        <BtnBox>
          <Button
            text={"삭제하기"}
            borderColor={"#e75388"}
            onClick={(e) => {
              onDeleteHandler(item.id);
            }}
          />
          <Button
            text={"본문 보기"}
            borderColor={"#5aa45d"}
            onClick={() => {
              navigate(`/Diarys/${item.id}`);
            }}
          />
        </BtnBox>
      </DiaryCade>
    </>
  );
}

export default DiaryItem;

const DiaryCade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px dashed steelblue;
  border-radius: 20px;
  background-color: #d0deed;
  width: 250px;
  min-height: 300px;
  padding: 20px;
  box-sizing: border-box;
  word-break: break-all;
`;

const Diarytext = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-size: 17px;
`;

const UserText = styled.div`
  color: #586a95;
  margin: 5px;
`;

const Author = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
