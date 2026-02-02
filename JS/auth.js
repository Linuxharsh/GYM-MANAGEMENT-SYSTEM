import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { logAction } from "./logger.js";

export function login(email, password, role) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("LOGIN_SUCCESS", role);
      window.location.href = role === "admin" ? "admin.html" : "member.html";
    })
    .catch(err => alert(err.message));
}
