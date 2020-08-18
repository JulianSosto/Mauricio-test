
fetch('people.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson.People[0].name);
  document.getElementById("People0").innerHTML = myJson.People[0].name;
  document.getElementById("People1").innerHTML = myJson.People[1].name;
  document.getElementById("People2").innerHTML = myJson.People[2].name;
  document.getElementById("People3").innerHTML = myJson.People[3].name;
  document.getElementById("People4").innerHTML = myJson.People[4].name;
  document.getElementById("description").innerHTML = myJson.People[0].Description;
}
             );

             

             addEventListener("DOMContentLoaded", () => {
              fetch("people2.json")
                .then(response => response.json())
                .then(datos => {
                  let cad = '<tr><th>Name</th><th>Likes</th><th>Dislikes</th></tr>';
                  for (let usuario of datos) {
                    cad += `<tr><td>${usuario.name}</td>
                    <td>${usuario.Dislikes}</td>
                    <td>${usuario.Likes}</td></tr>`;
                  }
                  document.getElementById("tabla1").innerHTML = cad;
                });
            });