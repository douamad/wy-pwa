/**
 * Created by ext_camara13 on 16/06/2017.
 */
// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
export const STORAGE_KEY = 'example-vue-project'

let initialState = {}

// Local storage sync state
if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    wyApp: {
      name: 'Wergu Yaram',
      description: 'Application de suivie médical'
    },
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      firstName : null,
      lastName: null
    }
  }
}

// Other state (not synced in local storage)
initialState.appnav = {
  searchText: '',
  searchTimestamp: null
}

export const state = initialState
