import React, { useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addDiary } from "../api/diary";
import Button from "../components/Buttons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const authorInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();
  // const [diary, setDiary] = useState({
  //   author: "",
  //   title: "",
  //   content: "",
  // });

  const queryClient = useQueryClient();

  //일기 추가
  const mutation = useMutation(addDiary, {
    onSuccess: () => {
      queryClient.invalidateQueries("diarys");
    },
  });
  //유효성 검증 (글자 수 제한))
  const submitHandler = (e) => {
    if (author.length <= 1 || author.length > 10) {
      alert("작성자 이름은 1글자 이상, 10글자 이하입니다!");
      authorInput.current.focus();
      return;
    }

    if (title.length <= 3 || title.length > 20) {
      alert("제목은 3글자 이상, 20글자 이하입니다!");
      titleInput.current.focus();
      return;
    }

    if (content.length <= 5 || content.length > 100) {
      alert("내용은 5글자 이상, 100글자 이하입니다!");
      contentInput.current.focus();
      return;
    }

    const newDiary = {
      author,
      title,
      content,
    };
    mutation.mutate(newDiary);
    alert("일기 잘 썼어요~");
    setAuthor("");
    setTitle("");
    setContent("");
    navigate(`/`);
  };

  return (
    <>
      <DiaryForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DiaryAuthor
          type="text"
          placeholder="작성자 이름을 적어주세요~"
          value={author}
          ref={authorInput}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <DiaryTitle
          type="text"
          placeholder="일기 제목을 적어주세요~"
          ref={titleInput}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <DiaryContent
          type="text"
          placeholder="일기 내용을 적어주세요~"
          value={content}
          ref={contentInput}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          text={"다 썼어요!"}
          borderColor={"#5385e7"}
          onClick={submitHandler}
        />
      </DiaryForm>
    </>
  );
}

export default CreateForm;

const DiaryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #d0deed;
  padding: 50px;
  border-radius: 50px;
`;
const DiaryAuthor = styled.input`
  display: flex;
  width: 500px;
  height: 50px;
  padding: 5px 10px;
  background-color: #edd0dd;
  border: 3px dotted #eba4c4;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #eba4c4;
    outline: none;
  }
`;
const DiaryTitle = styled.input`
  display: flex;
  width: 500px;
  height: 50px;
  padding: 5px 10px;
  background-color: #d6edd0;
  border: 3px dotted #79d761;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #79d761;
    outline: none;
  }
`;
// const DiaryContentInput = styled.input`
const DiaryContent = styled.textarea`
  resize: none;
  display: flex;
  width: 500px;
  height: 300px;
  margin-bottom: 30px;
  padding: 20px 10px;
  background-color: #ede9d0;
  border: 3px dotted #ffd550;
  border-radius: 20px;
  font-size: 17px;
  &:focus {
    border: 3px solid #ffd550;
    outline: none;
  }
`;
