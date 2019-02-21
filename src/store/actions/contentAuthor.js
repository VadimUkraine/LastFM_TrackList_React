import axios from 'axios';


export function getAuhtor(author, image, summary, tags, action) {
  return { type: 'GET_AUTHOR', author, image, summary, tags};
}



export function getInfoAuthor(name) {
  return function (dispatch) {
      axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=0b4733d05fd6efab0d095a29ae69b269&format=json`,
        )
        .then((response) => {
          const author = response.data.artist.name;
          const image = response.data.artist.image[3]["#text"];
          const tags = response.data.artist.tags.tag;
          const summary = response.data.artist.bio.content;
          dispatch(getAuhtor(author, image, summary, tags));
        })
        .catch((error) => {
          console.log(error);
       });

  };
}