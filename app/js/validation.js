$.validator.addMethod('phone', function (value) {
    var numbers = value.split(/\d/).length - 1;
    return (10 <= numbers && numbers <= 20 && value.match(/^(\+){0,1}(\d|\s|\(|\)){10,20}$/));
}, 'Введите правильный номер ');

$('#callback-form').validate({

    rules: {
        name: {
            required: true
        },
        phone: {
            required: true,
            phone: true,
        }
    },
    messages: {
        name: "Как к вам обращаться?",
        phone: {
            required: "Как с вами связаться?",
            phone: "формат +375291111111"
        }
    },
    submitHandler: function (form) {

    }
});
