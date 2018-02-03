//membuat tombol "X" untuk fungsi menghapus list
var myDoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myDoList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myDoList[i].appendChild(span);
}

//tombol "X" akan menghapus list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//ketika memilih salah satu item list akan mendapat ceklis
var list = document.querySelector('ul');
list.addEventListener('click', function(action) {
  if (action.target.tagName === 'LI') {
    action.target.classList.toggle('checked');
  }
}, false);

//menambahkan item baru ketika menekan tombol "ADD" dan memasukkan ke dalam list
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Dont be empty!!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}