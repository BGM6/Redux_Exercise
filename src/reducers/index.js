import {combineReducers} from 'redux';
//Reducers
const songsReducer = () => {
	return [
		{title: 'Sometimes', duration: '3:05'},
		{title: 'Bye Bye Bye', duration: '4:00'},
		{title: 'Mayonnaise', duration: '5:46'},
		{title: 'Only In Dreams', duration: '7:55'},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});