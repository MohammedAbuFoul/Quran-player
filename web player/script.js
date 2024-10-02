function changepage(a) {
    const RightPage = document.getElementById("RightPage");
    const LeftPage = document.getElementById("LeftPage");

    console.log(`"img/`+(parseInt(RightPage.dataset.page)+1)+`.png"`)
    let pagenum = parseInt(RightPage.dataset.page)
    if (a == '+' && pagenum != 603) {
    console.log(`img/`+(parseInt(RightPage.dataset.page)+1)+`.png`)
        RightPage.src = `img/`+(pagenum+2)+`.png`;
        RightPage.dataset.page = pagenum+2;
        LeftPage.src = `img/`+(pagenum+3)+`.png`;

    }
    if (a == '-' && pagenum != 1) {
        RightPage.src = `img/`+(pagenum-2)+`.png`;
        RightPage.dataset.page = pagenum-2;
        LeftPage.src = `img/`+(pagenum-1)+`.png`;
    }

}