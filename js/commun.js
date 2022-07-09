let count = document.getElementById('counter'); 
let result = document.getElementById('result'); 
let resultCss = document.getElementById('resultCss');

let maxLengthHtml = 200;
let maxLengthCss = 200;
let textAreaHtml = document.getElementById("textareahtml");
let progressBarHtml = document.querySelector('.progressbarhtml')
let textAreaCss = document.getElementById("textareacss");
let progressBarCss = document.querySelector('.progressbarcss');

let counterHtml = document.getElementById('counterhtml');
let counterCss = document.getElementById('countercss');

let h1Button = document.querySelector('.balh1');
let h2Button = document.querySelector('.balh2');
let h3Button = document.querySelector('.balh3');
let divButton = document.querySelector('.baldiv');
let spanButton = document.querySelector('.balspan');
let buttonButton = document.querySelector('.balbutton');

let widthButton = document.querySelector('.balwidth');
let heightButton = document.querySelector('.balheight');
let borderButton = document.querySelector('.balborder');
let padButton = document.querySelector('.balpad');
let marginButton = document.querySelector('.balmargin');
let flexButton = document.querySelector('.balflex');
let boldButton = document.querySelector('.balBold');
let italicButton = document.querySelector('.balItalic');
let underlineButton = document.querySelector('.balUnderline');

let maxLengthHtmlList = document.querySelector("#maxLengthHtmlList");
let maxLengthCssList = document.querySelector("#maxLengthCssList");

let cssBal = document.querySelectorAll('.cssbal');
let fontBal = document.querySelectorAll('.fontBal')

let colorList = document.getElementById('colorList');
// let colors = document.querySelectorAll('.colors');


// ******************************* MAXLENGTH HTML CHANGE *******************************

maxLengthHtmlList.addEventListener('change', (e) => {

    maxLengthHtml = e.target.value;

    textAreaHtml.setAttribute('maxlength', maxLengthHtml);

    counterHtml.innerHTML = maxLengthHtml - textAreaHtml.value.length;

})


// ******************************* MAXLENGTH CSS CHANGE *******************************

maxLengthCssList.addEventListener('change', (e) => {

    maxLengthCss = e.target.value;

    textAreaCss.setAttribute('maxlength', maxLengthCss);

    counterCss.innerHTML = maxLengthCss - textAreaCss.value.length;

})


// ******************************* CSS COLOR SELECT *******************************

colorList.addEventListener('change', (e) => {

    let selectedColor = e.target.value;

    textAreaCss.value += `color : ${selectedColor};`
    colorList.value = "";
})


// ******************************* CSS BALISES BUTTONS *******************************

cssBal.forEach((item) => {
    item.addEventListener('click', () => {

        textAreaCss.value += item.value;
    })
})

fontBal.forEach((itemfont) => {
    itemfont.addEventListener('click', () => {

        textAreaCss.value += itemfont.value;
    })
})



// ******************************* HTML BALISES BUTTONS *******************************

h1Button.addEventListener('click', () => {

    textAreaHtml.value += "<h1></h1>";
    console.log(textAreaHtml);
})

h2Button.addEventListener('click', () => {

    textAreaHtml.value += "<h2></h2>";
    console.log(textAreaHtml);
})

h3Button.addEventListener('click', () => {

    textAreaHtml.value += "<h3></h3>";
    console.log(textAreaHtml);
})

divButton.addEventListener('click', () => {

    textAreaHtml.value += '<div id="" class=""></div>';
    console.log(textAreaHtml);
})

spanButton.addEventListener('click', () => {

    textAreaHtml.value += '<span id="" class=""></span>';
    console.log(textAreaHtml);
})

buttonButton.addEventListener('click', () => {

    textAreaHtml.value += "<button></button>";
    console.log(textAreaHtml);
})


// ******************************* PROGRESS BAR & COUNTER HTML *******************************

textAreaHtml.addEventListener("keyup", () => {

    let txtLengthHtml = textAreaHtml.value.length;
    let percent = (txtLengthHtml / maxLengthHtml) * 100;

    if (percent >= 100) {
        percent = 100;
    }
    
    progressBarHtml.style.width = percent + "%";

    if ((textAreaHtml.value.length) < (maxLengthHtml / 2)) {

        progressBarHtml.style.backgroundColor = "rgb(41, 214, 35)";

    } else if ((textAreaHtml.value.length) >= (maxLengthHtml * 0.8)){

        progressBarHtml.style.backgroundColor = "red";

    } else {

        progressBarHtml.style.backgroundColor = "orange";
    }

    counterHtml.innerHTML = maxLengthHtml - textAreaHtml.value.length;

    if (counterHtml.innerHTML <= 0) {
        counterHtml.innerHTML = 0;
    }

    result.innerHTML = textAreaHtml.value;
})


// ******************************* PROGRESS BAR & COUNTER CSS *******************************

textAreaCss.addEventListener("keyup", () => {

    let txtLengthCss = textAreaCss.value.length;
    let percent = (txtLengthCss / maxLengthCss) * 100;

    if (percent >= 100) {
        percent = 100;
    }

    progressBarCss.style.width = percent + "%";

    if ((textAreaCss.value.length) < (maxLengthCss / 2)) {

        progressBarCss.style.backgroundColor = "rgb(41, 214, 35)";

    } else if ((textAreaCss.value.length) >= (maxLengthCss * 0.8)){

        progressBarCss.style.backgroundColor = "red";

    } else {

        progressBarCss.style.backgroundColor = "orange";
    }

    counterCss.innerHTML = maxLengthCss - textAreaCss.value.length;

    if (counterCss.innerHTML <= 0) {
        counterCss.innerHTML = 0;
    }

    resultCss.innerHTML = textAreaCss.value;
})