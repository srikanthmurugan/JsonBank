

function signUp() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username == username);
  
  if (!user) {
    var user_id=Date.now();
    alert(user_id);
    users.push({
      username: username,
      password: password,
      user_id: user_id,
      balance: 0
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    alert("Register successful");
    
  } else {
    alert("Username already taken");
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let users = JSON.parse(localStorage.getItem("users")) || [];
let user = users.find(u => u.username == username && u.password == password);

if (user) {
  alert("Log in successful");
  window.location.replace('./functions.html');

} else {
  alert("Invalid username or password");
  return ;

}
});




function deposit() {
  let userid = document.getElementById("userid").value;
  let amount = parseFloat(document.getElementById("amount").value);
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.user_id == userid);
  
  if (user) {
    user.balance += amount;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Deposit successful. New balance: " + user.balance);
  } else {
    alert("Invalid username");
  }
}

function send() {
  let userid = document.getElementById("userid").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let sender=document.getElementById("sender").value;
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let reciever = users.find(u => u.user_id == userid);
  let senderid = users.find(u => u.user_id == sender);
  
  if (reciever && senderid) {
    if (senderid.balance >= amount) {
      senderid.balance -=amount;
      reciever.balance += amount;
      
      localStorage.setItem("users", JSON.stringify(users));
      alert("Send successful. New balance of Sender: " + senderid.balance);
    } else {
      alert("Insufficient funds");
    }
  } else {
    alert("Invalid username");
  }
}

function viewDetails() {
  let username = document.getElementById("username").value; 
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username == username);
  
  if (user) {
    alert("Username: " + user.username + "\nBalance: " + user.balance);
  } else {
    alert("Invalid username");
  }
}
