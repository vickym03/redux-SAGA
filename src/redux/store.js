import { applyMiddleware, compose, createStore } from "redux"
//import rootReducer from "./reducers/index.js"
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers/index.js"
import rootSaga from "./saga/indexSaga.js"
// const store  = createStore(rootReducer)

const SagaMiddleware = createSagaMiddleware()
// const store =compose(
//     applyMiddleware(SagaMiddleware),
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer)

const store = configureStore({
   reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
   
  })

console.log("store",store)
//console.log("sagaMidd",SagaMiddleware)

SagaMiddleware.run(rootSaga)
export default store
