//var btn=document.getElementById("myButton");   //calling the 	<button id="myButton">Manipulate</button> from HTML file
//btn.addEventListener("click",()=>{
 //   btn.addEventListener("mouseover",()=>{    //format: btn(this is the variable name assigned in first line here): btn.addEventListener("whichever even"),functionName()  [here ()=> was used]

 //   alert("Button was clicked");
//});

function myFunc(a,b){
    return a*b;
}

var myFunc =function(a,b){
        return a*b;

}                           //line 8-10 and 12-15 are the same thing; 2nd one is to store the function in variable

var myFunc =(a,b)=> a*b;  //also same// this was used in line 3




var btn=document.getElementById("myButton");   //calling the 	<button id="myButton">Manipulate</button> from HTML file
btn.addEventListener("click",()=>{
    //var paragraphs = document.getElementsByTagName('p');
    //alert("Button was clicked");
  var text=document.getElementsByClassName("JS");
      alert("Button was clicked");
var par=document.getElementById("JS");        
par.innerHTML="Hello <a href='https://google.com>Google</a>";        //changes the text to hello
par.classList="red";
par.remove();    //removes text assigned to ID of JS(in HTML)
par.style.border="2px red";



var td=document.createElement("td");
td.innerText= "Data 2";    //what text will be in new table data
var trows=document.getElementsByTagName("tr")[0];      // is the index for table
trows.appendChild(td);                     //adds table data in same row          


});

