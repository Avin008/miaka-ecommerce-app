import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

const getCollectionData = async (
  collectionName: string
): Promise<DocumentData[]> => {
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

const addToWishlist = async (userDocumentId: string, item: any) => {
  const docRef = doc(db, "users", userDocumentId);
  await updateDoc(docRef, { wishlist: arrayUnion(item) });
};

const removeFromWishlist = async (userDocumentID: string, item: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { wishlist: arrayRemove(item) });
};

const addToCart = async (userDocumentID: string, item: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { cart: arrayUnion(item) });
};

const removeFromCart = async (userDocumentID: string, item: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { cart: arrayRemove(item) });
};

export {
  signupFunc,
  loginFunc,
  initiateUserData,
  getCollectionData,
  getSingleDoc,
  signoutFunc,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
};
