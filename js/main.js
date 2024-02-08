$(document).ready(function() {
    let currentInput = '';
    let resultDisplayed = false;

    $('.number').on('click', function() {
        if (resultDisplayed) {
            currentInput = '';
            resultDisplayed = false;
        }
        currentInput += $(this).text();
        $('#result').text(currentInput);
    });

    $('#plus, #minus, #multiply, #divide, #dot').on('click', function() {
        if (currentInput !== '') {
            currentInput += $(this).text();
        }
        $('#result').text(currentInput);
    });

    $('#equals').on('click', function() {
        try {
            currentInput = eval(currentInput).toString();
            $('#result').text(currentInput);
            resultDisplayed = true;
        } catch (error) {
            currentInput = 'Error';
            $('#result').text(currentInput);
            resultDisplayed = true;
        }
    });

    $('#clear').on('click', function() {
        currentInput = '';
        $('#result').text('0');
    });

    $('#delete').on('click', function() {
        currentInput = currentInput.slice(0, -1);
        $('#result').text(currentInput);
    });

    $('#open-bracket').on('click', function() {
        currentInput += '(';
        $('#result').text(currentInput);
    });

    $('#close-bracket').on('click', function() {
        currentInput += ')';
        $('#result').text(currentInput);
    });
});
