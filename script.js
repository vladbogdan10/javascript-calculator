var calculator = (function() {

    var btns = document.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = btnsValue;
    }

    function btnsValue(e) {
        // Get the input and button values
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.getAttribute('value');
       	
        if (btnVal == 'C') {
            input.innerHTML = '';

        } else if (btnVal == '=') {
            var equation = inputVal;

            equation = equation.replace(/×/g, '*').replace(/÷/g, '/');

            input.innerHTML = eval(equation);
            
        } else {
        	input.innerHTML += btnVal;
        }

        // prevent page jumps
        e.preventDefault();
    }

})();




