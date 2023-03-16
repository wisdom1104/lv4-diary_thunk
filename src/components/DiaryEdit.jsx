import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDiary } from "../api/diary";
import { __editDiary, __getDiarys } from "../redux/modules/diarySlice";
import Button from "./Buttons";

function DiaryEdit({ id, data, diary }) {
  const [editAuthor, setEditAuthor] = useState(diary.author);
  const [editTitle, setEditTitle] = useState(diary.title);
  const [editContent, setEditContent] = useState(diary.content);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const onEidthandler = async () => {
    const payload = {
      id: diary.id,
      author: editAuthor,
      title: editTitle,
      content: editContent,
    };
    await dispatch(__editDiary(payload));
    await dispatch(__getDiarys());
    setEdit(!edit);
  };

  return (
    <DiaryBox>
      {!edit ? (
        <div>
          <IdAuthor>
            <Author>
              <TextTitle>작성자: &nbsp;</TextTitle>
              <UserText>{diary.author}</UserText>
            </Author>
            <Id>
              <TextTitle>일기 번호: &nbsp;</TextTitle>
              <UserText>{id}</UserText>
            </Id>
          </IdAuthor>
          <Title>
            <TextTitle style={{ marginBottom: "0px" }}>🌱 일기 제목</TextTitle>
            <UserText>{diary.author}</UserText>
          </Title>
          <Content>
            <TextTitle style={{ marginBottom: "0px" }}>🌱 일기 내용</TextTitle>
            <UserText>{diary.content}</UserText>
          </Content>
          <StBtn>
            <Button
              borderColor={"#5385e7"}
              text={"수정하기"}
              onClick={() => {
                setEdit(!edit);
              }}
            />
          </StBtn>
        </div>
      ) : (
        <div>
          <IdAuthor>
            <Author>
              <TextTitle style={{ color: "#ffc200" }}>작성자: &nbsp;</TextTitle>
              <AuthorInput
                maxLength={10}
                type="text"
                value={editAuthor}
                onChange={(e) => {
                  setEditAuthor(e.target.value);
                }}
              />
            </Author>
            <Id>
              <TextTitle>일기 번호: &nbsp;</TextTitle>
              <UserText>{id}</UserText>
            </Id>
          </IdAuthor>
          <Title>
            <TextTitle style={{ marginBottom: "10px" }}>🌱 일기 제목</TextTitle>
            <TitleInput
              maxLength={20}
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          </Title>
          <Content>
            <TextTitle style={{ marginBottom: "10px" }}>🌱 일기 내용</TextTitle>
            <ContentInput
              maxLength={100}
              style={{ marginBottom: "50px" }}
              type="text"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
          </Content>
          <StBtn>
            <Button
              style={{}}
              text={"수정완료"}
              borderColor={"#5385e7"}
              onClick={onEidthandler}
            />
          </StBtn>
        </div>
      )}
    </DiaryBox>
  );
}
export default DiaryEdit;

const DiaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: 600px;
  gap: 20px;
  background-color: white;
  padding: 50px;
  border-radius: 50px;
  position: relative;
`;

const StBtn = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
// `
const TextTitle = styled.h2`
  color: #ffc200;
`;
const UserText = styled.h2`
  color: #586a95;
`;
const IdAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Id = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Author = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorInput = styled.input`
  display: flex;
  width: 400px;
  height: 30px;
  padding: 5px 20px;
  background-color: #edd0dd;
  border: 3px dotted #eba4c4;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #eba4c4;
    outline: none;
  }
`;
const TitleInput = styled.input`
  display: flex;
  width: 650px;
  height: 50px;
  padding: 5px 20px;
  background-color: #d6edd0;
  border: 3px dotted #79d761;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #79d761;
    outline: none;
  }
`;
const ContentInput = styled.textarea`
  resize: none;
  display: flex;
  width: 650px;
  height: 200px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ede9d0;
  border: 3px dotted #ffd550;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #ffd550;
    outline: none;
  }
`;
