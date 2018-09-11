const initialState = {
    data: {
        posts: [],
        users: [],
        comments: [],
    },
    viewpost: {
        post: "",
        comments: []
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case "GET_ALL":
            return {...state, data: action.data, ...state.data}
        case "SELECT_POST":
            return {...state, viewpost: }
    }
}