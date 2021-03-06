import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

// Use npm start to run the application.

// After you do that, you could use 
// 1. The subscribe method accepts a callback that will fire whenever an action is dispatched.
//   $ store.subscribe(() => console.log('Look ma, Redux!!'));
// 2. Use dispatch method to dispatch an action
//   $ store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1}))
// 3. check the latest state 
//   $ store.getState()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);