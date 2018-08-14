// config contains the logins you need to use the Firebase API
var config = {
	apiKey: "AIzaSyDEsWRHBFCz0dhVRg5cekLTHKI5ertDSAE",
	authDomain: "gwc-project-7d5ab.firebaseapp.com",
	databaseURL: "https://gwc-project-7d5ab.firebaseio.com",
	projectId: "gwc-project-7d5ab",
	storageBucket: "gwc-project-7d5ab.appspot.com",
	messagingSenderId: "250632410891"
};

// Initialize Firebase
firebase.initializeApp(config);


// handleLogOut gets called when the button is pressed
 function handleLogOut() {
	 firebase.auth().signOut().catch(function(error) {
		 // An error happened
		document.getElementById('message-box').innerHTML = error.message;
	});
}

// waits for authentication status changes
function authStatusListener() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// A user is signed in
		} else {
			document.getElementById('message-box').innerHTML = "You're logged out.";
			document.getElementById('log-out-form').innerHTML = '';
		}
	});
}

// the function that gets called when the page first loads
function init() {
	authStatusListener();
}

// tells the browser to call init when the page first loads
window.onload = init();
