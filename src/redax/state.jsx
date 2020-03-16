import {renderTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {message: "Hello maaaan , how do you do?", like: "15"},
            {message: "I want tell yuo what", like: "20"},
            {message: "what", like: "0"},
            {message: "yot", like: "2"},
            {message: "I want ", like: "1"}
        ], profileData: [
            {name: "Taras", id: 1},
            {name: "Dima", id: 2},
            {name: "Andrey", id: 3},
            {name: "Ivan", id: 4},
            {name: "Misha", id: 5}
        ]
    },
    messagesPage:{
        messagesData: [
            {message: "Hello"},
            {message: "How are you"},
            {message: "Heeeyy maaan what suuppp?"},
            {message: "Its ok"},
            {message: "I'm fine"},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost =  {
        id: 5,
        message: postMessage,
        like:0
    };
    state.profilePage.postsData.push(newPost);
    renderTree(state)
    return state;
}




export default state;




