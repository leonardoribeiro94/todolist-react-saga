import { takeEvery, put} from "redux-saga/effects";

function* asyncAddTodo(action){
    yield put({
        type: "ADD_TODO", text: action.text
    })
}

export default function* root(){
    yield [
       takeEvery("ASYNC_ADD_TODO", asyncAddTodo)
    ];
}