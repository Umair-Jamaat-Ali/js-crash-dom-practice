// // // Dom
// let myPara = document.getElementById("my-para");
// console.log(myPara);

// myPara.innerText = "Hello";


let myPara = document.querySelector("#my-para"); // id k liay hum # ka istimal krty hain

myPara.innerHTML = "<b> Pakistan Zindabad</b>";
 myPara.style.backgroundColor = "#000";
 myPara.style.color = "#fff";

 setInterval(function () {
    if( myPara.style.display === "none"){
    myPara.style.display = "block";
    }
    else{
    myPara.style.display = "none";
    }

 }, 1000);
console.log(myPara);


let yourPara = document.querySelector("#your-para");// yh humra ak new para hy jis ko humny "id= yourpara"ki di hy

yourPara.innerHTML = "<b> Ramadan Mubarak </b>"; // is mein hum inner.html ki madad sy humey para k ander text ko change 2r rhy hy
yourPara.style.backgroundColor = "#000";///is ko hum "css" ki property "js" mein istimal kr k is ka backgroud color chaNGE kr rhy hain
yourPara.style.color = "#fff";/// is hum text ka color change ker rhy hy
yourPara.style.width = "100%" /// is mein humny apny para ki witdh "100%" rakh li hy


/// is mein hum apny text ki width ko her second k bad change krny k liay istimal kr rhy hain

setInterval(function () {   // setinterval mein hum kisi cheez ko time k sath change krny k liay istimal krty hain
   let width = yourPara.style.width ;
   if( width === "100%"){ // is "if" humy ak condition lga di hy k ager width 100% hy , tu isko 10% kr do
      yourPara.style.width = "10%"
   }
   else{ // replace sy humny % ko string  " mein badal dia or phr + sy humny string ko number mein badal dia
    width = +width.replace("%", ""); // ("30%" => "30" => 30) is condition ko humny is liay istimal kia hy ager width jb 
    ///tk 100% tk ni jati tb tk ap humri width mein 10% ka azafa krty rahy
      // console.log(width);
      yourPara.style.width = width + 10 + "%"; // 30 + 10 = 40 > "%" = "40%"
   }
   // yourPara.style.width = "50%";
   // console.log(yourPara.style.width);
}, 1000);


//// auto color changing istimal krny k liay

let para = document.getElementById("para");
para.innerHTML = "Sylani Web & Mobile developement app"
 console.log(para);
setInterval(function () {
   let color1 = Math.round(Math.random() * 100000);

   let color2 = Math.round(Math.random() * 565470);


   para.style.backgroundColor = "#" + color1;
   para.style.color = "#" + color2;

   console.log(color1, color2);
}, 500);


