/* --------------------------- Meeting 9 | CLick and Change Mini Text ------------------------- */
function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll down";

    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";

    var iconUp = document.getElementsByClassName("icon-up")[0];

    iconUp.onclick = function () {
        var button = document.getElementsByClassName("icon-down");
        button.style.display = "block";
    };
}

var btnLike = document.querySelector('#green');
var btnDislike = document.querySelector('#red');

btnLike.onclick = likeColor;
btnDislike.onclick = dislikeColor;

function likeColor(){
  if(btnDislike.classList.contains('red')){
    btnDislike.classList.remove('red')
  }

  this.classList.toggle('green')
}

function dislikeColor(){
  if(btnLike.classList.contains('green')){
      btnLike.classList.remove('green');
  }

  this.classList.toggle('red');
}

function changeImage(element) {
  element.setAttribute("src","assets/img-header2.png")
}
function changeImageBack(element) {
  element.setAttribute("src","assets/img-header.png")
}

var myList = document.getElementsByTagName("li");
var i;
for(i=0; i<myList.length; i++){
    var span = document.createElement("span");
    span.innerHTML = "x";
    myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

function newElement(){
    //Create new list with the inputed value
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    //Check the inputed value
    if(inputValue === '' || inputValue === " "){
        alert("Data tidak boleh kosong");
    }

    else{
        document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item");
        li.innerHTML = inputValue;
    }

    //Clear Text on the search bar
    document.getElementById("myInput").value = "";

    //Create button close
    var span = document.createElement("SPAN");
    span.innerHTML = "x"
    li.appendChild(span).setAttribute("class", "close");

    //Delete List
    for(i=0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}