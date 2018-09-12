const initialState = {
    data: {
        posts: [],
        users: [],
        comments: [],
    },
    viewpost: {
        post: {},
        comments: [],
    },
};

export default function (state = initialState, action) {
    switch(action.type) {
        case "GET_ALL":
            return {...state, data: action.payload}
        case "SELECT_POST":
            return {...state, viewpost: {post: state.data.posts.find(item => item.id == action.payload), comments: state.data.comments.filter(item => item.postId == action.payload)}}
        default:
            return state
    }
};