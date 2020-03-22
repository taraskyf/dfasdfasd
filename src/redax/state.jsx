let store = {
    _state: {
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
        messagesPage: {
            messagesData: [
                {message: "Hello"},
                {message: "How are you"},
                {message: "Heeeyy maaan what suuppp?"},
                {message: "Its ok"},
                {message: "I'm fine"},
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state)
            return this._state;
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            return this._state;
        }
    }
}

export default store;




