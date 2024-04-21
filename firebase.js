import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVqR8LXKeVul7KovowWhHPxPupoNbfWIk",
  authDomain: "cs-422-82904.firebaseapp.com",
  databaseURL: "https://cs-422-82904-default-rtdb.firebaseio.com",
  projectId: "cs-422-82904",
  storageBucket: "cs-422-82904.appspot.com",
  messagingSenderId: "120628398942",
  appId: "1:120628398942:web:e9a65c8155900009ee9dcf",
  measurementId: "G-6D9MFP5ZF5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function addToCart(itemName, itemPrice) {
  console.log("Adding item to cart...");
  addDoc(collection(db, "cart"), {
    name: itemName,
    price: itemPrice,
  })
    .then((docRef) => {
      console.log("Item added to cart with ID: ", docRef.id);
      // Redirect to cart page
      window.location.href = "cart.html";
    })
    .catch((error) => {
      console.error("Error adding item to cart: ", error);
    });
}
var button = document.getElementsByClassName("add-to-favorite");
button.addEventListener("click", function () {
  alert("Pressed");
});

