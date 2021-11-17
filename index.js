var box = document.getElementById("box")
box.style.backgroundColor = "silver"

box.addEventListener('mouseover', function(){
    box.style.backgroundColor = "blue"
})
box.addEventListener('mousedown', function(){
    box.style.backgroundColor = "red"
})
box.addEventListener('mouseup', function(){
    box.style.backgroundColor = "yellow"
})
box.addEventListener('dblclick', function(){
    box.style.backgroundColor = "green"
})

box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = "orange"
    })

document.addEventListener("keydown", function(event){
    if (event.key == "r")
        box.style.backgroundColor = "red"
    else if (event.key == "y")
        box.style.backgroundColor = "yellow"
    else if (event.key == "g")
        box.style.backgroundColor = "green"
    else if (event.key == "o")
        box.style.backgroundColor = "orange"
    else if (event.key == "s")
        box.style.backgroundColor = "silver"
    })
