function getButtonsValue() {
    var btns = document.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = value;
    }

    function value() {
    	this.getAttribute('value');
    }
}

getButtonsValue();


//document.querySelector('.display').innerHTML =  
