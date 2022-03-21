
let areas = {
    a: null,
    b: null,
    c:null
}
document.querySelectorAll('.item').forEach((item)=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach((item)=>{
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);

});

document.querySelector('.neutralArea').addEventListener('dragover', neutraDragOver);
document.querySelector('.neutralArea').addEventListener('drop', neutraDrop);
document.querySelector('.neutralArea').addEventListener('dragleave', neutraDragLeave);




// funções do item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}



function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}


function dragOver(e) {

    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
    
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    if (e.currentTarget.querySelector('.item') === null) {
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}



///funcções da área

function neutraDragLeave(e){
    e.currentTarget.classList.remove('hover')

}




function neutraDragOver(e){
    e.preventDefault(); 
    e.currentTarget.classList.add('hover')
}

function neutraDrop(e){
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();

    
    
}

//logica das areas

function updateAreas(){
    document.querySelectorAll('.area').forEach((item)=>{
        let name = item.getAttribute('data-name');

        if(item.querySelector('.item') !== null){
            areas[name] = item.querySelector('.item').textContent;
            
        }else{
            areas[name] = null;
        }

        if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
            document.querySelector('.areas').classList.add('correct');
        }else{
            document.querySelector('.areas').classList.remove('correct');

        }
    })
}