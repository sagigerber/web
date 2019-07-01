const newInput = document.querySelector('input');
const completedCount = document.querySelector('.completed-count');
const btn = document.querySelector('.mainbtn');
const List = document.querySelector('.list');
let id = 0;

function hidebtn() {
    if (newInput.value.length===0)
        btn.classList.add("hide")
    else
        btn.classList.remove('hide')

}

function addmission(){
    let x=document.createElement("li");
    x.innerHTML="<input type=checkbox>"+newInput.value;
    x.classList.add('newmis');
    let y=document.querySelector('.todolist');
    y.appendChild(x);
    y.onclick = ()=>{
        x.classList.toggle('done');
        counting();
    }
    newInput.value="";
    hidebtn();
    id++;
}

function counting() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    completedCount.innerHTML = checkboxes.length ? checkboxes.length : 'no';
}