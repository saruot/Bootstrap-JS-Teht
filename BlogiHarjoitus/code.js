let namee  = document.getElementById('name');
let notee = document.getElementById('note');
let notediv = document.getElementById('note-div');
let checkbox = document.getElementById('checkbox');
let addnote = document.getElementById('megabutton');

addnote.addEventListener('click', createNote);


function createNote(){
    let nimi = document.getElementById('name').value;
    let note = document.getElementById('note').value;
    const div = document.createElement('div');
    let date = new Date();
    let datetime = date.getDate() + "/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() + " " 
    + date.getHours() + ":"  
    + date.getMinutes() + ":" 
    + date.getSeconds();
    div.innerHTML = `<h2> ${datetime} ${nimi}  </h2> ` + ` <p> ${note} </p>`;
    if (checkbox.checked === true) {
        div.classList.add('redborders')
    };
    notediv.appendChild(div);
    namee.value = "";
    notee.value = "";
}