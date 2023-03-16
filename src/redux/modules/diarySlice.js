import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getDiarys = createAsyncThunk(
  "getDiarys",
  async (payload, thunkAPi) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/diarys`
      );
      // console.log(response.data);
      return thunkAPi.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

const initialState = {
  diarys: [],
  isLoading: false,
  isError: false,
  error: null,
};

const diarySlice = createSlice({
  name: "diarys",
  initialState,
  reducers: {},
  extraReducers: {
    // #01-01 axios.GET // isLoading   ///////////////////////////////////////////////////////
    [__getDiarys.pending]: (state, actions) => {
      state.isLoading = true;
      state.isError = false;
    },
    // #01-02 axios.GET // fulfilled   ///////////////////////////////////////////////////////
    [__getDiarys.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = actions.payload;
    },
    // #01-03 axios.GET // isError   ///////////////////////////////////////////////////////
    [__getDiarys.rejected]: (state, actions) => {
      state.isLoading = false;
      state.isError = true;
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
