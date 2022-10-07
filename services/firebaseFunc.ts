import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

const signupFunc = async (email: string, password: string): Promise<string> => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user.uid;
};

const loginFunc = async (email: string, password: string): Promise<string> => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user.uid;
};

const initiateUserData = async (
  userUID: string,
  email: string,
  firstname: string,
  lastname: string
): Promise<void> => {
  const userDocRef = doc(db, "users", userUID);
  await setDoc(userDocRef, {
    id: userUID,
    email,
    firstname,
    lastname,
    cart: [],
    wishlist: [],
    address: {},
  });
};

const getCollectionData = async (collectionName: string): Promise<any> => {
  const collectionRef = collection(db, collectionName);
  const res = await getDocs(collectionRef);
  const data = res.docs.map((x) => x.data());
  return data;
};

const getSingleDoc = async (collectionName: string, docID: string) => {
  const docRef = doc(db, collectionName, docID);
  const res = await getDoc(docRef);
  const data = res.data();
  return data;
};

const signoutFunc = async (): Promise<void> => {
  await signOut(auth);
};

export {
  signupFunc,
  loginFunc,
  initiateUserData,
  getCollectionData,
  getSingleDoc,
  signoutFunc,
};
