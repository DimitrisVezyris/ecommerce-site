const searchInput = document.getElementById("search");
const rows = document.getElementsByTagName("tbody")[0].rows;
var tbody = document.getElementsByTagName("tbody")[0];
const table = document.getElementById("data");
const img = document.getElementById("img");

searchInput.addEventListener("keyup", function (event){
  const req = event.target.value.toLowerCase();

  for (var i = 0; i < rows.length; i++){
      let row = rows[i];

      let nameElement = row.cells[0];
      let nameValue = nameElement.innerHTML.toLocaleLowerCase();

      if(nameValue.includes(req)){
          row.style.display = "table-row";
          table.style.display = "block";
          img.style.display = "none";
      } else{
          row.style.display = "none";
      };

      if(req === ""){
        table.style.display = "none";
        img.style.display = "block";
      };
  }
});


