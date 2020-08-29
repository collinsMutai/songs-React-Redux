import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "new song", duration: "2.00" },
    { title: "old song", duration: "2.00" },
    { title: "current song", duration: "2.00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
