
fetch('people.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson.People[0].Likes);
  console.log(myJson.People[0].name);
  document.getElementById("People0").innerHTML = myJson.People[0].name;
  document.getElementById("People1").innerHTML = myJson.People[1].name;
  document.getElementById("People2").innerHTML = myJson.People[2].name;
  document.getElementById("People3").innerHTML = myJson.People[3].name;
  document.getElementById("People4").innerHTML = myJson.People[4].name;
  document.getElementById("description").innerHTML = myJson.People[0].Description;



    document.getElementById("People0").addEventListener("click", function P0(){
      document.getElementById("demo").innerHTML = myJson.People[0].Likes + myJson.People[0].Dislikes;      
   });

   document.getElementById("People1").addEventListener("click", function P1(){
    document.getElementById("demo").innerHTML = "People1";
 });

 document.getElementById("People2").addEventListener("click", function P2(){
  document.getElementById("demo").innerHTML = "People2";
});

document.getElementById("People3").addEventListener("click", function P3(){
  document.getElementById("demo").innerHTML = "People3";
});

document.getElementById("People4").addEventListener("click", function P4(){
  document.getElementById("demo").innerHTML = "People4";
});



}
             )

;

console.log("Que locura che");

            