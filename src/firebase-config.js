const Rebase = require('re-base')
const Firebase = require('firebase')

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDctIo2HOv5f4XcW3EKH6FrGWuD7UEGe6s",
  authDomain: "company-luiz.firebaseapp.com",
  databaseURL: "https://company-luiz.firebaseio.com",
  projectId: "company-luiz",
  storageBucket: "company-luiz.appspot.com",
  messagingSenderId: "628400684867"
  }

  const app = Firebase.initializeApp(firebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config
  