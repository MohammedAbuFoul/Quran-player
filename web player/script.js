function changepage(a) {
    const RightPage = document.getElementById("RightPage");
    const LeftPage = document.getElementById("LeftPage");

    console.log('aaa')
    if (a == '+') {
        RightPage.src = "img/5.png";
        LeftPage.src = "img/6.png";
    }
    if (a == '-') {
        RightPage.src = "img/1.png";
        LeftPage.src = "img/2.png";


    }

}