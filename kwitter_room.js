var un = localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome "+ un + " 😁";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBeM9BXuhXpBpsPoSXhdM-rwFc47unxV5s",
      authDomain: "kwitter-56395.firebaseapp.com",
      databaseURL: "https://kwitter-56395-default-rtdb.firebaseio.com",
      projectId: "kwitter-56395",
      storageBucket: "kwitter-56395.appspot.com",
      messagingSenderId: "566250484491",
      appId: "1:566250484491:web:5b45242cf4eed3d4ae680e"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
