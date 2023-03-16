import axios from "axios";

const getDiarys = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/diarys`
  );
  return response.data;
};
const addDiary = async (newDiary) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/diarys`, newDiary);
};

const removeDiary = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/diarys/${id}`);
};
const editDiary = async (payload) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/diarys/${payload.id}`,
    {
      author: payload.author,
      title: payload.title,
      content: payload.content,
    }
  );
};
export { getDiarys, addDiary, removeDiary, editDiary };
