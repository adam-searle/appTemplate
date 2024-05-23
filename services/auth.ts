import { auth } from "../constants/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOut() {
  return firebaseSignOut(auth);
}
