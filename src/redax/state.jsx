

const ADD_POST = 'ADD-POST' ;
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS = 'UPDATE-NEWS';


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
                {id : 1 , message: "Hello"},
                {id : 2 , message: "How are you"},
                {id : 3 , message: "Heeeyy maaan what suuppp?"},
                {id : 4 , message: "Its ok"},
                {id : 5 , message: "I'm fine"},
            ],
             newMessageBody : ''
        },
        newsPage: {
            upNews:'',
            news : ''
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state)
            //return this._state;
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            // return this._state;
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push( {id : 6 , message: body} )
            this._callSubscriber(this._state);
        }else if (action.type === ADD_NEWS) {
            let text = this._state.newsPage.news;
            this._state.newsPage.news = '';
            this._state.newsPage.upNews = text ;
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEWS) {
            this._state.newsPage.news = action.textNews;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (result) => {
    return {type: UPDATE_NEW_POST_TEXT, newText : result}
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body : body
    }
}
export const SendMessageCreator = () => {
    return { type: SEND_MESSAGE }
}

export const addNewsCreator = () => {
    return { type: ADD_NEWS}
}
export const updateNewsCreator = (text) => {
    return { type: UPDATE_NEWS, textNews: text}
}






export default store;




