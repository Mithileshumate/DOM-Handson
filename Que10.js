
// const year = document.getElementById('Year');
// var year1= year.options[year.selectedIndex].text;
// var print = document.getElementById('print');
// print.innerText = year1;
     

function getoption(){
     selectElement = document.getElementById('Year');
     output = selectElement.value;
     document.getElementById('print').textContent=output;

}
getoption();