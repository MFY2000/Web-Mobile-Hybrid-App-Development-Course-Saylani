// Get the modal
var modal = document.getElementById('myModal');
//for close
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  console.log()
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// for any product     

var obj =[
{name:"Bages For Women",src : "image/Bag/1.jpg",price:"18",s:"$15.5dollar"},
{name:"Bages For Women",src : "image/Bag/2.jpg",price:"12",s:"$15dollar"},
{name:"Bages For Women",src : "image/Bag/3.jpg",price:"18.5",s:"$27dollar"},
{name:"Bages For Women",src : "image/Bag/4.jpg",price:"19",s:"$20dollar"},

//shoes

{name:"shoes for men",src :"image/Shoes/37691230_10156566163562495_2646889208089673728_n.jpg",price:"15.5",s:"$18dollar"},

{name:"Shoes For Men",src : "image/Shoes/37649837_10156566163622495_2578048033455341568_n.jpg",price:"15.5",s:"$18dollar"},

{name:"Shoes for Men",src:"image/Shoes/37677747_10156566163817495_522248910589132800_n.jpg",price:"15",s:"$18dollar"}
,
{name:"Shoes for Men",src:"image/Shoes/37684797_10156566163672495_5111151042339274752_n.jpg",price:"15.5",s:"$18dollar"}
//for men
,
{name:"Men",src:"image/Men/20057861.jpg",price:"10",s:"$15dollar"}
,
{name:"Men",src:"image/Men/20083458.jpg",price:"11.5",s:"$19dollar"}
,
{name:"Men",src:"image/Men/20092163.jpg",price:"10",s:"$15dollar"}
,
{name:"Men",src:"image/Men/images.jpg",price:"15",s:"$18dollar"},
//for women
{name:"women",src:"image/Women/download (5).jpeg",price:"12",s:"$ 15 dollar"}
,
{name:"women",src:"image/Women/images (2).jpeg",price:"15",s:"$ 18 dollar"}
,
{name:"women",src:"image/Women/images (4).jpeg",price:"15",s:"$ 18 dollar"}
,
{name:"women",src:"image/Women/IMG_20180723_220552.jpg",price:"19.5",s:"$ 28 dollar"}
,
{name:"women",src:"image/Women/IMG_20180723_221331.jpg",price:"18",s:"$ 19 dollar"}
,
{name:"women",src:"image/Women/IMG_20180727_112633.jpg",price:"19.5",s:"$ 28 dollar"}
,
{name:"women",src:"image/Women/IMG_20180727_113239.jpg",price:"10",s:"$ 15 dollar"},

//shoes
{name:"Shoes",src:"image/Shoes/37685222_10156566164007495_8106573861497077760_n.jpg",price:"15",s:"$16.5dollar"},
{name:"Shoes",src:"image/Shoes/37747584_10156566163757495_5424812585570533376_n.jpg",price:"12.5",s:"$16dollar"},
{name:"Shoes",src:"image/Shoes/37757620_10156566163707495_8436021209132433408_n.jpg",price:"15.5",s:"$18dollar"},
{name:"Shoes",src:"image/Shoes/37785695_10156566163902495_18959025026629632_n.jpg",price:"25.2",s:"$30dollar"},//for Glasses
{name:"Glass",src:"image/Glasses/10031166.jpg",price:"25.2",s:"$30dollar"},
{name:"Glass",src:"image/Glasses/10347438.jpg",price:"25.2",s:"$30dollar"},
{name:"Glass",src:"image/Glasses/10782480.jpg",price:"25.2",s:"$30dollar"},
// //WATCH
{name:"watch",src:"image/watches/1.jpg",price:"30",s:"$ 32 dollar"},
{name:"watch",src:"image/watches/2.jpg",price:"30",s:"$ 32 dollar"},
{name:"watch",src:"image/watches/3.jpg",price:"33",s:"$ 36 dollar"},
{name:"watch",src:"image/watches/4.jpg",price:"28",s:"$ 30 dollar"},
//caps
{name:"Caps",src:"image/caps/10760100.jpg",price:"12",s:"$ 15 dollar"}
,
{name:"Caps",src:"image/caps/20022757.jpg",price:"15",s:"$ 18 dollar"}
,
{name:"Caps",src:"image/caps/20032691.jpg",price:"15",s:"$ 18 dollar"}
,
{name:"Caps",src:"image/caps/20052429.jpg",price:"19.5",s:"$ 28 dollar"}
,
{name:"Caps",src:"image/caps/20076239.jpg",price:"18",s:"$ 19 dollar"}
,
{name:"Jewelry",src:"image/Jewelry/IMG_20180723_220811.jpg",price:"82",s:"$  85 dallor"},
{name:"Jewelry",src:"image/Jewelry/IMG_20180723_220834.jpg",price:"55",s:"$ 58 dallor"},
{name:"Jewelry",src:"image/Jewelry/IMG_20180723_220857.jpg",price:"45",s:"$ 48 dallor"},
{name:"Jewelry",src:"image/Jewelry/IMG_20180723_221001.jpg",price:"39.5",s:"$ 48 dallor"},
{name:"Jewelry",src:"image/Jewelry/IMG_20180723_221033.jpg",price:"59.5",s:"$ 68 dallor"},
]


function add(){
    var f = localStorage.getItem("any")
    f = Number(f)
 f += 1
 localStorage.setItem('any',f)
 // modal.style.display = "none";
  shower();
 }

 function substract(){
    var f = localStorage.getItem("any")
    f = Number(f)
 f -= 1
 localStorage.setItem('any',f)
 // modal.style.display = "none";
  shower();
 }
  



var h = localStorage.getItem("any")

// document.getElementById("button").innerHTML= "<button onclick='fahad("+ h +")'><i class='fas fa-heart -fahaf' id="+ h +"></i></button><button onclick='fahad2("+h +")'><i class='fas fa-thumbs-up fa-flip-vertical-fahaf'></i></button>";
var array = localStorage.getItem("favourite");

function shower(){
var h = localStorage.getItem("any");

var v = document.getElementById("h1").innerHTML = obj[h].name,
s =document.getElementById("image").setAttribute("src", obj[h].src );
c=document.getElementById("p2").innerHTML ="$ " + obj[h].price + " dollar";
c=document.getElementById("prize").innerHTML ="$ " + obj[h].price + " dollar";
t=document.getElementById("s1").innerText = obj[h].s
 show()
}

function show() {
    modal.style.display = "inline";
    showfavourite()
}
    
//for more or less

function calculateTotal(){
  var price = obj[h].price
var number = document.getElementById("number").value;
var total = (number*price)

document.getElementById("prize").innerHTML="$ "+total + " dollar";
}




function check(){
    if(document.getElementById("if").innerHTML == "login"){
        alert("Login")
        location.href="login.html"
    }
    else(alert("A demo website"))
}