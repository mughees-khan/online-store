// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    collection,
    onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf0zyNaozrBZwjpc5G0r9wrzfJ_nG9hMY",
    authDomain: "online-store-56055.firebaseapp.com",
    projectId: "online-store-56055",
    storageBucket: "online-store-56055.appspot.com",
    messagingSenderId: "98832613599",
    appId: "1:98832613599:web:0a2a74214deffc12aee96a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function signUpFirebase(userInfo) {
    const { email, password } = userInfo;

    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    await addUserToDb(userInfo, userCredential.user.uid);
}

function signInFirebase(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function addUserToDb(userInfo, uid) {
    const { email, fullName, contact } = userInfo;

    return setDoc(doc(db, "users", uid), { email, fullName, contact });
}
function postItemToDb(
    itemName,
    category,
    description,
    imageUrl,
    unitName,
    unitprice
) {
    const userId = auth.currentUser.uid;
    return addDoc(collection(db, "items"), {
        itemName,
        category,
        description,
        imageUrl,
        unitName,
        unitprice,
        userId
    });
}

async function uploadImage(image) {
    const storageRef = ref(storage, `image/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    return url;
}
function getRealTimeItems(callback) {
    onSnapshot(collection(db, "items"), (querySnapshot) => {
        const ads = [];

        querySnapshot.forEach((doc) => {
            ads.push({ id: doc.id, ...doc.data() });
        });
        callback(ads);
    });
}
export {
    signUpFirebase,
    signInFirebase,
    uploadImage,
    postItemToDb,
    getRealTimeItems
};