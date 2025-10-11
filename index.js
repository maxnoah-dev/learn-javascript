let btnCount = document.getElementById("btn-count");
let textAppear = document.getElementById("countNum");
let count = 0;
let countv2 = 0;

function CountNumber() {
    count += 1;
    textAppear.innerHTML = count
    console.log(count);
}

const CountNumberv2 = () => {
    countv2 += 1;
    textAppear.innerHTML = count
    console.log(count);
}

btnCount.addEventListener('click', CountNumberv2);
