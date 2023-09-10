var em = document.getElementById('input-email');

var ps = document.getElementById('input-password');

var inf = document.querySelector('.inp');




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
 
        
        
        
      } else {
        // Pengguna tidak masuk
        // ...
        console.log("tidak");
      }
    });


function login() {
    firebase.auth().signInWithEmailAndPassword(em.value, ps.value).then((user) => {
  // The user is logged in
  window.location.href ="main.html?=" + ps.value;
}, (error) => {
  // The login failed
  alert(error);
});


};



function lin() {
    window.location.href= "index.html";
}