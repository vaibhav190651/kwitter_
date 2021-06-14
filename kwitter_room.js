
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDkM8PiRBRiWm6rGMw22D85Evu4Y-duIbc",
      authDomain: "class-test-cf28b.firebaseapp.com",
      projectId: "class-test-cf28b",
      storageBucket: "class-test-cf28b.appspot.com",
      messagingSenderId: "515402066970",
      appId: "1:515402066970:web:511120c2b258435524b5a3"
      
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");


function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
