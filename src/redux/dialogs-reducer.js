const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogs: [
    {id: 1, name: "Nikita"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Asana"},
    {id: 4, name: "Saha"}
  ],
  messages: [
    {id: 1, msg: "Hello my friend"},
    {id: 2, msg: "Hello how are u"},
    {id: 3, msg: "Aw, im fine how are u?"},
  ]
}

function dialogReducer(state=initialState, action) {
  switch(action.type) {

    case ADD_MESSAGE:
      let message = {
        id: 5, msg: action.message
      }
      return {...state, messages: [...state.messages, message]}

    default:
      return state
  }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogReducer