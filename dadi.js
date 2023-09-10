








var em = document.getElementById('input-email');

var ps = document.getElementById('input-password');

var cps = document.getElementById('input-cpassword');

var inf = document.querySelector('.inp');

function regis() {
    if(ps.value == cps.value) {
        
        const auth = firebase.auth();
const user = auth.createUserWithEmailAndPassword(em.value, ps.value).then((cred) => {
            alert(`Selamat Datang Akun: ${cred.user.email}`);
            window.location.href ="main.html?=" + ps.value; })
        .catch(error => {
        
    if (error.code === 'auth/email-already-in-use') {
      console.log('Alamat email tersebut sudah digunakan!');
      ers();
    } else {
    
    };
   
   
   if(error.code === 'auth/invalid-email') {
       eri();
   }else {
       
   };
   
    if(error.code === 'auth/weak-password') {
       erp();
   }else {
       
   };
  
   
   
   
   
  });
        
        
        
    }else {
      inf.innerHTML = (
          `
       <p>! confirm password salah !</p>
    `
      );
      inf.style.color= "red";
      inf.style.fontSize= "2vh";
        
    };
    
};


function ers() {
       inf.innerHTML = (
          `
       <p>! email sudah digunakan oleh orang lain !</p>
    `
      );
      inf.style.color= "red";
      inf.style.fontSize= "2vh";
      inf.style.textAlign= "center";
};

function eri() {
       inf.innerHTML = (
          `
       <p>! contoh : saya@gmail.com !</p>
    `
      );
      inf.style.color= "red";
      inf.style.fontSize= "2vh";
};


function erp() {
       inf.innerHTML = (
          `
       <p>! password minimal 6 karakter !</p>
    `
      );
      inf.style.color= "red";
      inf.style.fontSize= "2vh";
};



function lin() {
    window.location.href= "dadi1.html";
}