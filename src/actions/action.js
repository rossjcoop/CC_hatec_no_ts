import store from "../store";
import axios from "axios";

import * as actionTypes from "./actionTypes";

const url = "https://jsonplaceholder.typicode.com/"

export function getAll() {
    return axios.all([
        axios.get(url + "posts"),
        axios.get(url + "users"),
        axios.get(url + "comments")
      ])
      .then(axios.spread(function (posts, users, comments) {
        store.dispatch({
            type: actionTypes.GET_ALL,
            payload: {
                posts: posts.data,
                users: users.data,
                comments: comments.data,
            }
        })
      }))
};

export function selectPost(postId) {
    store.dispatch({
        type: actionTypes.SELECT_POST,
        payload: postId
    })
};
