const INIT_STATE = {
  author: '',
  image: '',
  summary: '',
  tags: []
};

export default function reducerAuthor(state = INIT_STATE, action) {
  switch (action.type) {  	
    case 'GET_AUTHOR':
    	return { 
    		author: action.author,
        image: action.image,
        summary: action.summary,
        tags: action.tags
    	};
    default:    
      return state;
  }
}

