import firebase from 'firebase'
import 'Firebase/firestore'
import config from './config'

var FirebasePlugin = {
  db: () => firebase.database(),
  firestore: () => firebase.firestore(),
  auth: () => firebase.auth(),
  storage: () => firebase.storage(),
  providers: {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider()
  }
}

export default function (Vue) {
  if (!firebase.apps.length) firebase.initializeApp(config)
  Vue.prototype.$firebase = FirebasePlugin
}
