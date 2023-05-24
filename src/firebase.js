//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'
import { ref, onUnmounted } from 'vue'

const config = 
  { apiKey: "AIzaSyBiPaqtvrPfyRnkhDFJ0IsncwCfqjC4U5w",
    authDomain: "project-d05b9.firebaseapp.com",
    projectId: "project-d05b9",
    storageBucket: "project-d05b9.appspot.com",
    messagingSenderId: "663122441821",
    appId: "1:663122441821:web:0f0435267978fdab117fb4",
    measurementId: "G-6YRZWXXEN7"
  }


const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')


export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}




