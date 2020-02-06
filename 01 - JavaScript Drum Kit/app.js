// //V1
// document.addEventListener('keydown', function(event) {
//         let number = event.which;
//         let audio = document.querySelector(`audio[data-key="${number}"]`);
//         let box = document.querySelector(`div[data-key="${number}"]`);
//         if (box) {
//             audio.play();
//             box.classList.toggle(`playing`);
//             setTimeout(() => box.classList.toggle(`playing`), 300);
//         }
// });

//V2
document.addEventListener('keydown', function(event) {
    let number = event.which;
    let audio = document.querySelector(`audio[data-key="${number}"]`);
    let box = document.querySelector(`div[data-key="${number}"]`);
    if (box) {
        audio.play();
        box.classList.add(`playing`);
        box.addEventListener('transitionend',() => {
            box.classList.remove(`playing`);
        } )
    }
});