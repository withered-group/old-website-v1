firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
		
      document.getElementById("email_para").innerHTML = "<b>Email</b>:  " + user.email;
      document.getElementById("cs_para").innerHTML = "These account details are coming soon...";

    } else {
        firebase.auth().signOut();
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle errors
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
  });

}

function signup(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
  }).catch((error) => {
    // Handle errors
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
  });
  

}

function logout(){
    firebase.auth().signOut();
}

function delacc(){
	const user = firebase.auth().currentUser;
	user.delete().catch((error) => {
  		const credential = promptCreds();
		promptCreds();
		
		user.delete().catch((error) => {
			// Handle errors
    		var errorCode = error.code;
    		var errorMessage = error.message;
			
    		window.alert("Error: " + errorMessage);
		});
	});
}

function promptCreds() {
	user.reauthenticateWithCredential(credential).catch((error) => {
  		// Handle errors
    	var errorCode = error.code;
    	var errorMessage = error.message;

    	window.alert("Error: " + errorMessage);
	});
}
