const button = document.querySelectorAll(".el");

console.log(button);

// for(let i = 0; i < button.length; i++){
//     console.log(button[i]);
// }

button.forEach(function(buttons){
    buttons.addEventListener('click', function (){
        button.forEach(function(buttons){
            buttons.classList.remove("open");
        });     
        buttons.classList.toggle("open");
    })
});