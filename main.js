
const pas = window.location.href.split("=")[1];
console.log(pas);




firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Pengguna masuk
        // ...
        const user = firebase.auth().currentUser;

// Get the user's UID.
const uid = user.uid;
const mail = user.email;

        console.log(uid);
        console.log(mail);
 document.getElementById("info-akun").innerHTML= "<p>id : " + uid + "</p>"
 +"<br>" + "<p> email : " + mail + "</p>" +"<br>" + "<p> password : " + pas+ "</pas>";

        
        
        
      } else {
        // Pengguna tidak masuk
        // ...
        console.log("tidak");
      }
    });
    
    
function btn() {
    

// Call the signOut() method
firebase.auth().signOut();

// Redirect the user to the login page
window.location.href= "index.html";

}
