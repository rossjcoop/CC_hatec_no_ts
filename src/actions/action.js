import store from "../store";
import axios from "axios";

import * as actionTypes from "./actionTypes";

const url = "https://jsonplaceholder.typicode.com/"

export function getAll() {
    return axios.all([
        axios.get(url + "posts");
        axios.get(url + "users");
        axios.get(url + "comments");
      ])
      .then(axios.spread(function (posts, users, comments) {
        //... but this callback will be executed only when both requests are complete.
        console.log("Posts: ", posts.data);
        console.log("Users: ", users.data);
        console.log("Comments: ", comments.data)

        store.dispatch({
            type: actionTypes.GET_ALL,
            payload: {
                posts: posts.data,
                users: users.data,
                comments: coments.data,
            }
        })
      }));
}
