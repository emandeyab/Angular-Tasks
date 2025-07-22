var allUsers = [];
var fetchUsersBtn = document.getElementById("fetchUsersBtn");
var userIdInput = document.getElementById("searchInput");
var searchUserBtn = document.getElementById("searchUserBtn");
var tableBody = document.getElementById("userTableBody");

function fetchUsers(){
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
if(xhr.status===200){
allUsers=JSON.parse(xhr.responseText);
tableBody.innerHTML="";
for(var i=0;i<allUsers.length;i++){renderUserRow(allUsers[i]);}
}
else{console.error("Error fetching data",xhr.status);}
}
};
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();}

function appendData(content){
var td=document.createElement("td");td.textContent=content;
return td;}

function searchUser( ){
var id=userIdInput.value;
if(!id){return;}
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
tableBody.innerHTML="";
if(xhr.status===200){
var user=JSON.parse(xhr.responseText);
renderUserRow(user);}else{alert("User not found");}
}};
xhr.open("GET","https://jsonplaceholder.typicode.com/users/"+id);
xhr.send();}

function renderUserRow(userData){
var tr=document.createElement("tr");
var imageTd=document.createElement("td");
var userImg=document.createElement("img");
userImg.src="https://i.pravatar.cc/100?u="+userData.id;
imageTd.appendChild(userImg);

tr.appendChild(imageTd);
tr.appendChild(appendData(userData.id));
tr.appendChild(appendData(userData.email));
tr.appendChild(appendData(userData.username));
tr.appendChild(appendData(userData.phone));

var siteTd=document.createElement("td");
var siteLink=document.createElement("a");
siteLink.href="http://"+userData.website;
siteLink.textContent=userData.website;
siteLink.target="_blank";
siteTd.appendChild(siteLink);
tr.appendChild(siteTd);

var actionTd=document.createElement("td");
actionTd.className="action-cell";
var viewBtn=document.createElement("button");
viewBtn.textContent="View";
viewBtn.className="actions-btn view-btn";
var deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.className="actions-btn delete-btn";

viewBtn.addEventListener("click",function(){
document.cookie="user="+encodeURIComponent(JSON.stringify(userData))+";path=/";
location.href="userdetails.html";
});

deleteBtn.addEventListener("click",function(){
tableBody.removeChild(tr);
for(var i=0;i<allUsers.length;i++){
if(allUsers[i].id==userData.id){
allUsers.splice(i,1);
break;
}}});

actionTd.appendChild(viewBtn);
actionTd.appendChild(deleteBtn);
tr.appendChild(actionTd);
tableBody.appendChild(tr);}
