import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Diarys from "../pages/Diarys";
import Create from "../pages/Create";
import { useDispatch, useSelector } from "react-redux";
import { __getDiarys } from "../redux/modules/diarySlice";

const Router = () => {
  const dispatch = useDispatch();
  const { isLoading, error, diarys } = useSelector((state) => state.diarys);

  useEffect(() => {
    dispatch(__getDiarys());
  }, [dispatch]);

  // console.log(todos);
  if (isLoading) {
    return <div> 로딩 중... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home diarys={diarys} />} />
        <Route path="diarys/:id" element={<Diarys diarys={diarys} />} />
        <Route path="create/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
