let nameInput = document.getElementById('name')
let ageInput = document.getElementById('age')
let heightInput = document.getElementById('height')
let weightInput = document.getElementById('weight');
let tableBody = document.getElementById('tablebody');

let bmidataset = localStorage.getItem('bmidata');

if(bmidataset){
    bmidataset = JSON.parse(bmidataset);
    bmidataset.map(function(person){
        renderData(person)
    });
}
function calc(){
    let name = nameInput.value;
    let age = ageInput.value;
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    let bmi = weight/(height*height);
    let data = localStorage.getItem('bmidata');
    if(data){
        data = JSON.parse(data)
    }
    else{
        data = []
    }
    let personData = {name,age,height,weight,bmi};
    data.push(personData)
    if(nameInput.value && ageInput.value && heightInput.value && weightInput.value){
        localStorage.setItem('bmidata',JSON.stringify(data));
        renderData(personData);
    }
    else{
        alert('please fill the inputs')
    }
    nameInput.value = "";
    ageInput.value = "";
    heightInput.value = "";
    weightInput.value = "";

}
function renderData(person){
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.height}</td>
    <td>${person.weight}</td>
    <td>${person.bmi}</td>
    `
    tableBody.appendChild(tr)
}
