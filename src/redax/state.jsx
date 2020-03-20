
let renderTree = () => {
    console.log('state change')
}

let state = {
    profilePage: {
        postsData: [
            {message: "Hello maaaan , how do you do?", like: "15"},
            {message: "I want tell yuo what", like: "20"},
            {message: "what", like: "0"},
            {message: "yot", like: "2"},
            {message: "I want ", like: "1"}
        ],
        newPostText: 'taras yo nigga',
        profileData: [
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

export let addPost = () => {
    let newPost =  {
        id: 5,
        message: state.profilePage.newPostText,
        like:0
    };
    state.profilePage.postsData.push(newPost);
    renderTree(state)
    return state;
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
    return state;
}

export const subscribe = (observer) => {
    renderTree = observer ;
}


export default state;




