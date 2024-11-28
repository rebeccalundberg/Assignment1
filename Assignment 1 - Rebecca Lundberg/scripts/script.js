let foo = 0
let bar = 0 
console.log(foo/bar)

let button = document.getElementById("knapp");
button.addEventListener("click",function() 
{   
    console.log ("divide");
    if (isNaN(foo/bar)) {
        console.log("You cant divide us!");
        alert("You cant divide us!");
    }
});
