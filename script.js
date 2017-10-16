var calculator = (function() {
    var btns = document.getElementsByTagName('button');

    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = getValueAndCalculate;
    }

    function getValueAndCalculate() {
        var screen = document.querySelector('.calc-screen');
        var input = screen.innerHTML;
        var btnValue = this.getAttribute('value');

        if (input.length >= 17) {
            screen.style.fontSize = '22px';
        }

        if (btnValue === '=') {
            var calculate = input;
            calculate = calculate.replace(/×/g, '*').replace(/÷/g, '/');
            if (screen.innerHTML !== '') {
                screen.innerHTML = eval(calculate);

            }

        } else if (btnValue === 'C') {
            screen.style.fontSize = '30px';
            screen.innerHTML = '';


        } else if (btnValue === 'del') {
            var delInput;
            delInput = input.substr(0, input.length - 1);
            screen.innerHTML = delInput;

        } else {
            screen.innerHTML += btnValue;

        }

        var lastChar = input.charAt(input.length - 1);
        if (lastChar === '×' || lastChar === '÷' || lastChar === '+' || lastChar === '-' || lastChar === '.') {
            if (btnValue === '×' || btnValue === '÷' || btnValue === '+' || btnValue === '-' || btnValue === '.') {
                screen.innerHTML = input.substr(0, input.length - 1) + btnValue;
            }

        }

        var firstChar = screen.innerHTML.charAt(0);
        if (input === '' && firstChar === '×' || firstChar === '÷' || firstChar === '+') {
            screen.innerHTML = '';

        } 
    }

})();