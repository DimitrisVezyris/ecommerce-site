const searchInput2 = document.getElementById("search2");
const rows2 = document.getElementsByTagName("tbody")[0].rows;
var tbody = document.getElementsByTagName("tbody")[0];
const table2 = document.getElementById("data2");
const button = document.getElementById("search_btn");
const communication = document.getElementById("communication");
const translate = document.getElementById("translate");
var DM = 0;

button.addEventListener("click", function(){

    if(DM == 0) {
        searchInput2.style.display = "block";
        communication.style.display = "none";
        translate.style.display = "none";
        DM = 1;
    }
    else {
        searchInput2.style.display = "none";
        communication.style.display = "block";
        translate.style.display = "block";
        DM = 0;
    }
    searchInput2.addEventListener("keyup", function (event){
        const req2 = event.target.value.toLowerCase();
      
        for (var i = 0; i < rows2.length; i++){
            let row2 = rows2[i];
      
            let nameElement = row2.cells[0];
            let nameValue = nameElement.innerHTML.toLocaleLowerCase();
      
            if(nameValue.includes(req2)){
                row2.style.display = "table-row";
                table2.style.display = "block";
            } else{
                row2.style.display = "none";
            };
      
            if(req2 === ""){
              table2.style.display = "none";
            };
        }
        
      });
})

