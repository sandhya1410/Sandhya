let fetchOs = function () {
    let os = window.prompt('Enter your OS name and it\'s version (leave a space inbetween)'); 
    let arr = os.split(' ');   
    return arr;
}