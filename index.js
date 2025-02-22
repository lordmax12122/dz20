const galleryList = document.querySelector(".gallery");
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        const firstImage = galleryList.firstElementChild;
        galleryList.append(firstImage);
        console.log(event.target)
    }
});
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown") {
        const lastImage = galleryList.lastElementChild;
        galleryList.prepend(lastImage);
        console.log(event.target)
    }
});


const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const renderAll = document.querySelector('[data-action="render"]');
const destroyAll = document.querySelector('[data-action="destroy"]');

let box = 30;

const createBox = function (amount) {
    for (let i = 0; i < amount; i += 1) {
        const max = 255;
        const min = 0;
        const colorOfBox = document.createElement("div");
        colorOfBox.style.height = `${box}px`;
        colorOfBox.style.width = `${box}px`;
        colorOfBox.style.backgroundColor = `rgb(
            ${Math.round(Math.random() * (max - min) + min)},
            ${Math.round(Math.random() * (max - min) + min)},
            ${Math.round(Math.random() * (max - min) + min)}
          )`;

        boxes.append(colorOfBox);
        box += 10;
    }
};

renderAll.addEventListener("click", () => {
    const amount = Number(input.value);
    createBox(amount);
});

destroyAll.addEventListener("click", () => {
    boxes.innerHTML = "";
    box = 30;
});