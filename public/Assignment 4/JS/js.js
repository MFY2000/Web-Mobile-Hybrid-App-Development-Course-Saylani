log()

function log(){
  if(localStorage.getItem("login") == null){
    localStorage.setItem("login","")}}




    if (localStorage.getItem("login") != "") {
    document.getElementById("if").innerHTML = localStorage.getItem("login") 
 if(document.getElementById("if").innerHTML != "login"){
  document.getElementById("center").innerHTML="<span><img src='image/male-silhouette-profile-picture-question-260nw-151266383.jpg' width='100%' style='border-radius:100% ' ></span>  <a href='index.html'>Home</a>  <a href=''>Account</a>  <a href='slidebar.html'>Setting</a>  <a href='help.html'>Helps</a> "}


}
  else if(document.getElementById("if").innerHTML = "login"){
 document.getElementById("center").innerHTML="  <a href=''><img class ='center' src='image/download (1).png' alt='error' /><br>Signup/login</a> <br> <a href='index.html'>Home</a>  <a href=''>Account</a>  <a href='slidebar.html'>Setting</a>  <a href='help.html'>Helps</a> "
 }

  // for slidebar
  function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("table").style.marginLeft= "15%";
    document.getElementById("logo").style.width= "25%";
    document.getElementById("table").style.opacity = "0.5%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("table").style.marginLeft = "0";
    document.getElementById("logo").style.width= "30%";
    document.getElementById("table").style.opacity = "1%"
  }

  // for favourite
  if(localStorage.getItem("favourite")==null)
  {
   var e = []
    e = JSON.stringify(e)
   localStorage.setItem("favourite", e)
  
  }
  showfavourite()
function showfavourite(){
  var array = localStorage.getItem("favourite");
  if(array!=null){
  array = JSON.parse(array);
  arr = array.length;
  arr = "FAVOURITES<sup id='sup'>"+arr+"</sup>"
    document.getElementById("sup").innerHTML= "";
    document.getElementById("sup").innerHTML= arr;
for(var i = 0;i <array.length;i++){
  var g = document.getElementById(array[i]).style.color = "red";
}}
}


 function fahad(id) {
    var g = document.getElementById(id).style.color = "red";
   if (localStorage.getItem("favourite") == "") {
      var array = [id]
      arr = array.length;
      arr = "FAVOURITES<sup id='sup'>"+arr+"</sup>"
      document.getElementById("sup").innerHTML= arr;
      array = JSON.stringify(array);
      localStorage.setItem("favourite", array)}
    // for more add
    
    else if (localStorage.getItem("favourite") != "") { 
    var array = JSON.parse(localStorage.getItem("favourite"));
     if(array.indexOf(id) == -1){   
    var newarray = [...array, id]
    console.log(newarray)
    arr = newarray.length;
  arr = "FAVOURITES<sup id='sup'>"+arr+"</sup>"
  document.getElementById("sup").innerHTML= "" 
  document.getElementById("sup").innerHTML= arr;
    newarray = JSON.stringify(newarray)
    localStorage.setItem("favourite", newarray)}}}


  function fahad2(id) {
    var array = JSON.parse(localStorage.getItem("favourite"));
    if(array.indexOf(id) != -1){
      var g = document.getElementById(id).style.color = "white"
      var index = array.indexOf(id); 
      array.splice(index,1)
      arr = array.length;
      arr = "FAVOURITES<sup id='sup'>"+arr+"</sup>"
      document.getElementById("sup").innerHTML= "" 
      document.getElementById("sup").innerHTML= arr
    var array = JSON.stringify(array);
localStorage.setItem("favourite",array)
   }
  }  

  //for any image

  function any(id) {
    localStorage.setItem('any',id);
    shower()
    // window.location.href = "product.html"
  }






