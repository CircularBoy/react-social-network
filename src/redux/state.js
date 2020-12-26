import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";


let store = {
  _subscriber: () => {},
  _state: {
    ProfilePage: {
      Posts: [
        {id: 1, title: "Hello its post number one"},
        {id: 2, title: "Its second post"},
        {id: 3, title: "I am third"}
      ],
      inputField: ''
    },
    DialogsPage: {
      Dialogs: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Asana"},
        {id: 4, name: "Saha"}
      ],
      Messages: [
        {id: 1, msg: "Hello my friend"},
        {id: 2, msg: "Hello how are u"},
        {id: 3, msg: "Aw, im fine how are u?"},
      ],
      messageInput: ''
    }
  },
  subscribe(observer) {
    this._subscriber = observer
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action);

    this._subscriber(this._state)
  }
}

export default store;

window.store = store