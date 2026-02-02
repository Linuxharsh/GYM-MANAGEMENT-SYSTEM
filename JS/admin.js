import { db } from "./firebase.js";
import { logAction } from "./logger.js";
import { generateBillId, formatDate } from "./utils.js";
import {
  collection, addDoc, getDocs, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Add Member
document.getElementById("addMember").onclick = async () => {
  const name = document.getElementById("memberName").value;
  const email = document.getElementById("memberEmail").value;
  const packageType = document.getElementById("packageSelect").value;

  await addDoc(collection(db, "members"), {
    name,
    email,
    package: packageType,
    createdAt: formatDate()
  });

  logAction("ADD_MEMBER", "ADMIN");
  alert("Member Added");
};

// Create Bill
document.getElementById("createBill").onclick = async () => {
  await addDoc(collection(db, "bills"), {
    billId: generateBillId(),
    memberEmail: document.getElementById("billEmail").value,
    amount: document.getElementById("billAmount").value,
    date: formatDate()
  });

  logAction("CREATE_BILL", "ADMIN");
  alert("Bill Created");
};

// View Reports
async function loadReports() {
  const snapshot = await getDocs(collection(db, "bills"));
  snapshot.forEach(doc => {
    document.getElementById("report").innerHTML += `<p>${doc.data().billId} - ₹${doc.data().amount}</p>`;
  });
}
loadReports();
