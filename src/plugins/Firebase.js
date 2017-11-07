import firebase from 'firebase'
import 'Firebase/firestore'
import config from './config'

var FirebasePlugin = {
  config,
  init: function () {
    firebase.initializeApp(this.config)
  },
  db: function () {
    if (firebase.apps.length === 0) this.init()
    return firebase.database()
  },
  firestore: function () {
    if (firebase.apps.length === 0) this.init()
    return firebase.firestore()
  },
  auth: function () {
    if (firebase.apps.length === 0) this.init()
    return firebase.auth()
  },
  storage: function () {
    if (firebase.apps.length === 0) this.init()
    return firebase.storage()
  },
  providers: {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider()
  }
}

export default function (Vue) {
  Vue.firebase = FirebasePlugin
  Object.defineProperties(Vue.prototype, {
    $firebase: {
      get: function () {
        return Vue.firebase
      }
    }
  })
}
