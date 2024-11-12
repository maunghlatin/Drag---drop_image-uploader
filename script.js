var dragArea = document.querySelector(".box");
var dragText = document.querySelector("h1");
var button = document.querySelector("button");
var input = document.querySelector("input");
let myFile;



button.onclick = ()=>{
    input.click()
}

input.addEventListener("change", function(){
    myFile = this.files[0];
    dragArea.classList.add("active")
    ShowMe()
})


dragArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
    dragArea.classList.add("active");

    dragText.textContent = "Please Release the upload file"
})

dragArea.addEventListener("dragleave", ()=>{
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop"
})

dragArea.addEventListener("drop", (event)=>{
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    ShowMe()
})

function ShowMe(){
    let fileType = myFile.type;
    let validEx = ["image/jpeg","image/jpg","image/png"];

    if(validEx.includes(fileType)){
        let fileRead = new FileReader();

        fileRead.onload = ()=>{
            let imgUrl = fileRead.result;
            let img = `<img src="${imgUrl}" alt="">`
            dragArea.innerHTML = img;
        }
        fileRead.readAsDataURL(myFile);
    }
    else{
        alert("this file is not valid");
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop"
    }
}