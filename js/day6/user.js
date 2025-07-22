function fetchUserDetails() {
  var userData = getCookie("user");
  if (!userData) {
    alert("No user data found");
    return;
  }

  var user = JSON.parse(decodeURIComponent(userData));
  showUserDetails(user);
}

function showUserDetails(user) {
  var container = document.getElementById("userDetails");
  container.innerHTML = "";

  var avatar = document.createElement("img");
  avatar.src = "https://i.pravatar.cc/100?u=" + user.id;
  container.appendChild(avatar);

  container.appendChild(makeInfo("ID", user.id));
  container.appendChild(makeInfo("Name", user.name));
  container.appendChild(makeInfo("Email", user.email));
  container.appendChild(makeInfo("Username", user.username));
  container.appendChild(makeInfo("Phone", user.phone));
  container.appendChild(makeInfo("Website", user.website));

  var address = user.address.street + ", " + user.address.city;
  container.appendChild(makeInfo("Address", address));
}

function makeInfo(label, value) {
  var p = document.createElement("p");
  p.innerHTML = "<strong>" + label + ":</strong> " + value;
  return p;
}

function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split("=");
    if (parts[0] === name) {
      return parts[1];
    }
  }
  return null;
}
