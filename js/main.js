var gra = function (min, max) {
    return Math.random() * (max - min) + min;
}

var gri = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var shufflePosts = function () {
    let posts = document.querySelectorAll('.post')
    for (let i = 0; i < posts.length; i++) {
        let width = gri(2, 4);
        let title = posts[i].querySelector('.post-header')
        let author = posts[i].querySelector('.post-meta-author')
        let cat = posts[i].querySelector('.post-meta-categories')
        let thumb = posts[i].querySelector('.post-thumbnail')
        //posts[i].style.gridRowEnd = 'span ' + gri(2, 3);
        //posts[i].style.gridColumnStart = gri(0, 3);
        //posts[i].style.gridColumnEnd = 'span ' + width;
        let x = gra(0, 0)
        let y = gra(0, 1)
        let z = gra(0, 0)
        let a = gri(-10, 10)
//        author.style.transform = 'rotate3d(' + x + ',' + y + ',' + z + ',' + a + 'deg)';
  //      cat.style.transform = 'rotate3d(' + x + ',' + y + ',' + z + ',' + -a + 'deg)';
        title.style.transform = 'rotate3d(' + x + ',' + y + ',' + z + ',' + a + 'deg)';
        //posts[i].style.transform = 'rotate3d(' + x + ',' + y + ',' + z + ',' + a + 'deg)';
        //title.style.fontSize = .8 + .5 * width + 'rem';
    }
}

shufflePosts();

var options = {
    strings: ["Words from Camebrwell", "Words from Camberwell Graphic Design"],
    typeSpeed: 40,
    backSpeed: 58,
    backDelay: 90,
}

var typed = new Typed("#js-site-title", options);
