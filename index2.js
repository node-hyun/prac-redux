const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user")
const { addPost } = require("./actions/post")

const initialState = {
    user: { isLogginIn: true, data: null },
    posts: []
}

const firstMiddleware = (store) => (dispatch) => (action) => {
    console.log("액션 : ", action);
    dispatch(action);
    console.log("액션 end ");
}
const thunkMiddleware = (store) => (dispatch) => (action) => {

}

const enhancer = applyMiddleware(firstMiddleware);

const store = createStore(reducer, initialState, enhancer);

console.log("1th", store.getState());

store.dispatch(logIn({
    id: 1,
    name: "zerocho",
    admin: true
}))

console.log("2th", store.getState());


store.dispatch(addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요 리덕스 1'
}));

console.log("3th", store.getState());


store.dispatch(addPost({
    userId: 1,
    id: 2,
    content: '안녕하세요 리덕스 2'
}));

console.log("4th", store.getState());

store.dispatch(logOut());

console.log("5th", store.getState());
