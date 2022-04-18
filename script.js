function text(value) {
    if(value == 'Eraser') text01 = text01.slice(0, length-1)
    else if (value == 'enter') text01 += ' <br> '
    else if (value == 'space') text01 += ' '
    else  text01 += value

    document.querySelector('#text02').innerHTML = text01
}

let text01 = ''