    let imagesData = [
        {
            photo: `./img/1.jpg`,
            title: 'Első, de nem utolsó.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },
        {
            photo: './img/2.jpg',
            title: 'Szépen csillog az ezüst is.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },
        {
            photo: './img/3.jpg',
            title: 'Bronz',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },

        {
            photo: './img/4.jpg',
            title: 'Elso, de nem utolso.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },
        {
            photo: './img/5.jpg',
            title: 'Nem első és nem utolsó.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },
        {
            photo: './img/6.jpg',
            title: 'A hatodik se rossz.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },

        {
            photo: './img/7.jpg',
            title: 'Utolsókból lesznek az elsők.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                },
 
    ]

let currentPhoto = 0;

let loadImage = (ind) => {
    $('#picture').attr('src', imagesData[ind].photo);
    $('#phototitle').text(imagesData[ind].title);
    $('#descript').text(imagesData[ind].description);
}

$('#forward').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
        loadImage(currentPhoto);
    }
    else {
        currentPhoto = 0;
        loadImage(currentPhoto);
    }
});

$('#back').click (()  => {
    if (currentPhoto >= 0) {
        currentPhoto--;
        loadImage(currentPhoto);
    }
    else {
        currentPhoto = 7;
        loadImage(currentPhoto);
    }
});

$('#thumbnails').on('click', '.smallpic', function () {
    // let smallsrc= $(this).attr('src');
    $('#picture').attr('src',$(this).attr('src').replace('smallpic','photo'));
    $(this).css('')
  });