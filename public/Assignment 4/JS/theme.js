function remove(){
  document.getElementById("not").style.visibility="hidden"
} 



var family = [,"Ruslan Display ","Roboto Mono ","Ubuntu ","Open Sans Condensed ","PT Sans ","Slabo 27px ","Kosugi Maru ","Oswald ","Mukta ","Gamja Flower ","lobster"]


var theme = ["black", "white", "red", "peru", "skyblue", "limegreen"]
var font = ["black", "white", "red", "peru", "skyblue", "limegreen"]



var color = localStorage.getItem("theme");

  //FOR reload
 

  function change(hcolor, bgcolor) {


    console.log(hcolor,bgcolor)
    if(color==null){
    var GG = hcolor+"."+bgcolor
    var savecolor = { backgroundColor: theme[hcolor], color:font[bgcolor],code:GG}
    savecolor = JSON.stringify(savecolor)
    localStorage.setItem("theme", savecolor)
  location.reload(false)
}
  
  
  else if(color!=null){
    var GG = hcolor+"."+bgcolor
    var savecolor = JSON.parse(localStorage.getItem("theme"))
savecolor.backgroundColor = theme[hcolor]
savecolor.color = font[bgcolor]
savecolor.code = GG;
savecolor = JSON.stringify(savecolor)
localStorage.setItem("theme",savecolor)
location.reload(false)
  }
  
  };



function check(id){
var enter = document.getElementById("")
if(id == 0){
var name = "Hex-code <br> <p>Write be carryfull <br> <b>Example</b><br> #123456 </p>"

var input = "Color<input type='text' maxlength='7' value='#' name=' id='color'>Background-color <input type='text' maxlength='7' value='#' name=' id='bgcolor'><button onclick='applied()'>Applied</button>"

name += input;
document.getElementById("enter").innerHTML=name

}
else if(id==1){
  var name = "RGB <br> <p>Write be carryfull <br> <b>Example</b> <br> rbg(111,111,111) </p>"
var input = "Color<input type='text' name='' id='color'>Background-color <input type='text' name='' id='bgcolor'><button onclick='applied()'>Applied</button>"

name += input;
document.getElementById("enter").innerHTML=name

 
}

else if(id==2){
  var name = "Name<br>"
  var input = "Color<input type='text' name='' id='color'>Background-color <input type='text' name='' id='bgcolor'><button onclick='applied()'>Applied</button>"

name += input;
document.getElementById("enter").innerHTML=name
}

}

function applied(){

  alert("")
  var theme = document.getElementById("bgcolor").value,
 fonts= document.getElementById("color").value ;
 var savecolor = { backgroundcolor:theme, color:fonts}
    savecolor = JSON.stringify(savecolor)
    localStorage.setItem("theme", savecolor)
  location.reload(false)
 }

// for writing



if (color != null) {
  var savecolor = JSON.parse(color)
document.getElementById("table").style.backgroundColor = savecolor.backgroundColor;
document.getElementById("table").style.color = savecolor.color;
document.getElementById("table").style.fontFamily = family[savecolor.write];




if(savecolor.code != null && document.getElementById("check") != null && document.getElementById("check").innerHTML == "color-style"){
document.getElementById(savecolor.code).setAttribute("checked","checked")
console.log()}

else if(savecolor.write != null &&document.getElementById("check") != null && document.getElementById("check").innerHTML == "Text-style"){
var f = document.getElementById(family[savecolor.write]).setAttribute("checked","checked");
alert("This font is directly working from Google Font So it will need some time")
}
}







