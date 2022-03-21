document.querySelectorAll('.item').forEach((item)=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach((item)=>{
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);

})
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
    }
}