import { useCallback, useEffect, useState } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMd1cXZ2q279pl7B7kmb7O8xXtTRjpmkk",
  authDomain: "quickreact-d0538.firebaseapp.com",
  databaseURL: "https://quickreact-d0538-default-rtdb.firebaseio.com",
  projectId: "quickreact-d0538",
  storageBucket: "quickreact-d0538.appspot.com",
  messagingSenderId: "299056798380",
  appId: "1:299056798380:web:74d4417381a9eccc0ddd09",
};

let firebase;

if (!getApps().length) {
  firebase = initializeApp(firebaseConfig);
} else {
  firebase = getApp();
}

const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

  return [user];
};
