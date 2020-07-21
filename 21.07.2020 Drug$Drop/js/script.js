let dragElms = document.querySelectorAll(".dragElm");
let dropArea = document.querySelector(".dropArea");
let Id;
// dragElm.ondragstart = function () {
//     Id = this.id;
// }

// for (const elm of dragElms) {
//     elm.ondragstart = function (ev) {

//         ev.dataTransfer.setData("id",this.id)
//         // Id = this.id;
//     }
// }

// dropArea.ondragover = function (ev) {
//     ev.preventDefault();
//     // console.log("drag element over on drop elm")
// }

// dropArea.ondrop = function (ev) {
//     console.log(ev)
//     let Id=ev.dataTransfer.getData("id")
//     let dragelm = document.getElementById(Id);
//     this.append(dragelm)
// }

// dragElm.ondragend = function () {
//     console.log("drag end")
// }

// dragElm.ondrag = function () {
//     console.log("drag davam edir")
// }

// dropArea.ondragenter=function(){
//     console.log("drag element enter")
// }

// dropArea.ondragleave=function(){
//     console.log("drag element leave")
// }


//Task

document.getElementById("dragImg").ondragstart = function (ev) {
    ev.dataTransfer.setData("id", this.id);
}

let dropAreas = document.querySelectorAll(".dropAreas");

dropAreas.forEach(dropArea => {
    dropArea.ondragover = ev => ev.preventDefault();

    dropArea.ondrop = function (ev) {
        let Id = ev.dataTransfer.getData("id");
        let elm = document.getElementById(Id);
        this.append(elm)
    }
})

