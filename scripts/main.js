console.log("Welcome");

// function isometrize(element) {

//     return null;
// }

let bodyVar = document.querySelector('body');
let breakerBtn = document.querySelector('.breaker');
let unbreakerBtn = document.querySelector('.unbreaker');

breakerBtn.addEventListener('click', (e) => {
    document.querySelector('body').style
    .transition = 'all 1s';

    document.querySelector('body').style
        .perspective = '10000px';

    document.querySelector('body').style
        .transform = 'rotateX(-17deg) rotateY(59deg)';

    unbreakerBtn.classList.remove('hidden');
    breakerBtn.classList.add('hidden');

    // setTimeout(() => {
    //     document.querySelector('body').style
    //     .perspective = '0px';

    //     document.querySelector('body').style
    //     .transform = 'rotateX(0deg) rotateY(0deg)';

    // }, 3000)
})

unbreakerBtn.addEventListener('click', (e) => {
    document.querySelector('body').style
        .perspective = '0px';

    document.querySelector('body').style
        .transform = 'rotateX(0deg) rotateY(0deg)';

    unbreakerBtn.classList.add('hidden');
    breakerBtn.classList.remove('hidden');

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
    unbreakerBtn.style.color =
        "rgb(" + x + ',' + "64" + ',' + y + ")";


})

