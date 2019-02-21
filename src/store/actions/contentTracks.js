import axios from 'axios';


export function getTracks(tracks) {
  return {
    type: 'GET_TRACKS',
    payload: tracks
  };
}



export function getAllTracks() {
  return function (dispatch) {
    axios
      .get(`http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=0b4733d05fd6efab0d095a29ae69b269&format=json`,
      )
      .then((response) => {
        const tracks = response.data.tracks.track;
        dispatch(getTracks(tracks));
      })
      .catch((error) => {
        console.log(error);
      });

  };
}