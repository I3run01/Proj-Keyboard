function text(value) {
    if(value == 'Eraser') text01 = text01.slice(0, length-1)
    else if (value == 'enter') text01 += ' <br> '
    else if (value == 'space') text01 += ' '
    else if (value == 'shift') Upper.fixTemporaryUpper = true
    else if (value == 'fixDiv') {
        if (Upper.fixUpper == true) Upper.fixUpper = false
        else Upper.fixUpper = true
    }
    
    else {
        if (Upper.fixUpper == true) text01 += value.toUpperCase()
        else if(Upper.fixTemporaryUpper == true) {
            text01 += value.toUpperCase()
            Upper.fixTemporaryUpper = false
        }
        else text01 += value
    }

    document.querySelector('#text02').innerHTML = text01
}

function send() {
    document.querySelector('#text').innerHTML += text01
    document.querySelector('#text02').innerHTML = ''
    text01 = ''
}



let Upper = {fixUpper: false, fixTemporaryUpper: false}
let text01 = ''