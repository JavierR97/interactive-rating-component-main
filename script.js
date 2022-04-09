let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');


one.addEventListener('click', () => {
    one.classList.add('active');

    two.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
    five.classList.remove('active');
});

two.addEventListener('click', () => {
    two.classList.add('active');

    one.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
    five.classList.remove('active');
});

three.addEventListener('click', () => {
    three.classList.add('active');

    two.classList.remove('active');
    one.classList.remove('active');
    four.classList.remove('active');
    five.classList.remove('active');
});

four.addEventListener('click', () => {
    four.classList.add('active');

    two.classList.remove('active');
    one.classList.remove('active');
    three.classList.remove('active');
    five.classList.remove('active');
});

five.addEventListener('click', () => {
    five.classList.add('active');

    two.classList.remove('active');
    one.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
});


let btn = document.querySelector('.btn');
btn.addEventListener('click', thankMessage );


function thankMessage() {
    let text = document.querySelector('.text');
    let ratings = document.querySelector('.ratings');
    let img = document.querySelector('img')

    img.remove()
    btn.remove();
    text.remove();
    ratings.remove();

    let content = document.querySelector('.content')
    html2 = document.querySelector('.html2')
    html2.classList.add('thanks');
    content.appendChild(html2)

}
    




