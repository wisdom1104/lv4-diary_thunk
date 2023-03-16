import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editDiary } from "../api/diary";
import Button from "../components/Buttons";
import DiaryEdit from "../components/DiaryEdit";

function Diarys({ data }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);
  const diary = data.find((item) => {
    return item.id === Number(id);
  });
  return (
    <DiaryPage>
      <Stlayout>
        <DiaryHeader>
          <HeaderTitle>
            <h1 style={{ color: "#ffd550" }}>{diary.author}</h1>
            <h1 style={{ color: "white" }}>의 일기</h1>
          </HeaderTitle>
          <Button
            text={"다 봤어요~"}
            borderColor={"white"}
            backgroundColor={"#586a95"}
            onClick={() => {
              navigate(`/`);
            }}
          />
        </DiaryHeader>
        <DiaryMain>
          <DiaryEdit data={data} diary={diary} id={id} />
        </DiaryMain>
      </Stlayout>
    </DiaryPage>
  );
}

export default Diarys;

const DiaryPage = styled.div`
  background-color: #586a95;
  height: 100vh;
  box-sizing: border-box;
`;

const Stlayout = styled.div`
  background-color: #586a95;
  box-sizing: border-box;
  padding: 10px;
`;

const DiaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  height: 50px;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const DiaryMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
