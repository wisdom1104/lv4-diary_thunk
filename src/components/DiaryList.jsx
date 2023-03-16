import React from "react";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";

function DiaryList({ diarys }) {
  return (
    <>
      <ListTitle>
        <h2 style={{ color: "#586a95" }}>- 일기 구경하는 곳 -</h2>
      </ListTitle>
      <StDiarylist>
        {diarys.map((item) => {
          return (
            <div key={item.id}>
              <DiaryItem item={item} />
            </div>
          );
        })}
      </StDiarylist>
    </>
  );
}

export default DiaryList;

const ListTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const StDiarylist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 30px;
  border-radius: 50px;
`;
