import { db } from "./firebase.js";
import { logAction } from "./logger.js";
import {
  collection, getDocs, query, where
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// View Bills
document.getElementById("viewBills").onclick = async () => {
  const email = document.getElementById("memberEmail").value;

  const q = query(collection(db, "bills"), where("memberEmail", "==", email));
  const snapshot = await getDocs(q);

  document.getElementById("bills").innerHTML = "";
  snapshot.forEach(doc => {
    document.getElementById("bills").innerHTML += `<p>${doc.data().billId} - ₹${doc.data().amount}</p>`;
  });

  logAction("VIEW_BILLS", "MEMBER");
};
