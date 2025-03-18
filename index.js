let username;

username = window.prompt("Enter your name:");

if(username){
	document.getElementById("username").textContent = `Hello ${username}!`;
}