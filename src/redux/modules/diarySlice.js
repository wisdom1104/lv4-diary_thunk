import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//조회
export const __getDiarys = createAsyncThunk(
  "getDiarys",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/diarys`
      );
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 추가
export const __addDiary = createAsyncThunk("addDiarys", async (newDiary) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/diarys`, newDiary);
});
//삭제
export const __deleteDiary = createAsyncThunk("deleteDiary", async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/diarys/${id}`);
});
//수정
export const __editDiary = createAsyncThunk("editDiary", async (payload) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/diarys/${payload.id}`,
    {
      author: payload.author,
      title: payload.title,
      content: payload.content,
    }
  );
});

const initialState = {
  diarys: [],
  isLoading: false,
  error: null,
};

export const diarySlice = createSlice({
  name: "diarys",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDiarys.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDiarys.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.diarys = action.payload;
    },
    [__getDiarys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = diarySlice.actions;
export default diarySlice.reducer;

// const initialState = [
//   {
//     id: 1,
//     author: "Olaf",
//     title: "오늘은 맑음",
//     content: "오늘 날씨가 좋았다 :)",
//   },
//   {
//     id: 2,
//     author: "Ori",
//     title: "마이쮸 최고오",
//     content: "마이쮸가 너무 맛있다ㅜㅜ",
//   },
// ];

// const diarySlice = createSlice({
//   name: "diarys",
//   initialState,
//   reducers: {
//     AddDiary: (state, action) => {
//       const addDiary = {
//         id: Date.now(),
//         author: action.payload.author,
//         title: action.payload.title,
//         content: action.payload.content,
//       };
//       return [...state, addDiary];
//     },
//     RemoveDiary: (state, action) => {
//       const removeDiary = state.filter((item) => {
//         return item.id !== action.payload.id;
//       });
//       return removeDiary;
//     },
//     EditDiary: (state, action) => {
//       return state.map((item) =>
//         item.id === action.id
//           ? {
//               ...item,
//               author: action.auhor,
//               title: action.editTitle,
//               content: action.editContent,
//             }
//           : item
//       );
//     },
//   },
// });
// export const { AddDiary, RemoveDiary, EditDiary } = diarySlice.actions;
// export default diarySlice.reducer;
