let display = document.getElementsByTagName('h2')
let digitalClock = () => {
    const dateobj = new Date()
    display[2].innerText = dateobj.toLocaleTimeString()
    display[0].innerText = dateobj.toLocaleDateString()
    let a = dateobj.getDay()
    switch(a){
        case 0: a = "SUNDAY"
        break;
        case 1: a = "MONDAY"
        break;
        case 2: a = "TUESDAY"
        break;
        case 3: a = "WEDNESDAY"
        break;
        case 4: a = "THURSDAY"
        break;
        case 5: a = "FRIDAY"
        break;
        case 6: a = "SATURDAY"
        break;
    }
    
    display[1].innerText = a
}


