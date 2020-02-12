var myArray = [
    {firstName: 'Hoang', lastName: 'Ha', email: 'nguyenha@gmail.com'},
    {firstName: 'Le', lastName: 'Hang', email: 'nguyenhang@gmail.com'},
    {firstName: 'Binh', lastName: 'Hoang', email: 'nguyenhoang@gmail.com'},
    {firstName: 'Tran', lastName: 'Hong', email: 'nguyenhong@gmail.com'},
    {firstName: 'Nguyen', lastName: 'Hai', email: 'nguyenhai@gmail.com'},
    {firstName: 'Dinh', lastName: 'Nam', email: 'nguyennam@gmail.com'},
    {firstName: 'Nguyen', lastName: 'Hue', email: 'nguyenhue@gmail.com'},
    {firstName: 'Nguyen', lastName: 'Quy', email: 'nguyenquy@gmail.com'},
    {firstName: 'Quang', lastName: 'Hung', email: 'nguyenhung@gmail.com'},
    {firstName: 'Duong', lastName: 'Tuan', email: 'nguyentuan@gmail.com'}
]

function buildTable(myArray){
    let table = document.getElementById('myTable');
    table.innerHTML = "";
    let row = myArray.map((e,i) => `<tr><td>${myArray[i].firstName}</td><td>${myArray[i].lastName}</td><td>${myArray[i].email}</td></tr>`).join('');
    table.innerHTML+=row;
     
}
buildTable(myArray);


let inputFilter = document.getElementById('search-input');
inputFilter.onkeyup = function(){
    var value = inputFilter.value;
    var myArray = searchTable(value, data);
     buildTable(myArray);
}

function searchTable(value, data) {
    var filterData = [];
    for (let i = 0; i < data.length; i++){
        value = value.toLowerCase();
        var name = data[i].firstName.toLowerCase();
        if(name.includes(value)){
            filterData.push(data[i])
        }

    }
    return filterData;

}

let buttonSort = document.querySelectorAll('th');
buttonSort.forEach((e) => e.onclick = sortTable);

function sortTable(){
    let column = this.dataset.column;
    let text = this.innerHTML;
    console.log(text.length);
    text = text.substring(0, text.length - 1);

    if(this.dataset.order == 'desc'){
        this.dataset.order = 'asc';
        myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text+= '&#9660';
    } else{
        this.dataset.order = 'desc';
        myArray = myArray.sort((a,b)  => a[column] < b[column] ? 1 : -1)
         text+= '&#9650';
    }
    this.innerHTML = text;
    buildTable(myArray)
}
