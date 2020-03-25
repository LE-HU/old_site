console.log("Welcome");

let bodyVar = document.querySelector('body');

// function isometrize(element) {

//     return null;
// }

console.log(document.querySelector('body'))

let breakerBtn = document.querySelector('.breaker');

breakerBtn.addEventListener('click', (e) => {
    document.querySelector('body').style
        .perspective = '10000px';

    document.querySelector('body').style
        .transform = 'rotateX(-17deg) rotateY(59deg)';

    // setTimeout(() => {
    //     document.querySelector('body').style
    //     .perspective = '0px';

    //     document.querySelector('body').style
    //     .transform = 'rotateX(0deg) rotateY(0deg)';

    // }, 3000)
})

let x = 0;
let y = 0;

bodyVar.addEventListener("mousemove", (e) => {

    x = event.clientX;
    y = event.clientY;

    breakerBtn.style.color =
        "rgb(" + x + ',' + "64" + ',' + y + ")";

})

