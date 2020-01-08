
jQuery(document).ready(function ($) {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('#confirm').on('click', function () {
      
        console.log(typeof $('#firstName').val());
        var firstName = $('#firstName').val().length;
        var lastName = $('#lastName').val().length;
        var email = $('#EmailAddress').val();



        if (firstName < 3) {
            $('#firstnameError').show();
            $('#noerror').val('false');
      
        } else {
            $('#firstnameError').hide();
            $('#noerror').val('true');
        }

        if (lastName < 3) {
            $('#lasttnameError').show();
            $('#noerror').val('false');
        } else {
            $('#lasttnameError').hide();
            $('#noerror').val('true');
        }



        if (validateEmail(email) == false) {
            $('#emailError').show();
            $('#noerror').val('false');
        } else {
            $('#emailError').hide();
            $('#noerror').val('true');
        }


        var passwordValue = $('#password1').val();
        var passwordLength = $('#password1').val().length;



        var password2Value = $('#password2').val();
        var password2Length = $('#password2').val().length;

        console.log($('#gender option:selected').val());

        if (passwordValue !== password2Value || passwordLength < 8 || password2Length < 8) {
            $('#pwError').show();
            $('#noerror').val('false');
        } else {
            $('#pwError').hide();
            $('#noerror').val('true');
        }


        if ($('#gender option:selected').val() === '0') {
            $('#genderError').show();
            $('#noerror').val('false');
        } else {
            $('#genderError').hide();
            $('#noerror').val('true');
        }

        var stockholm = document.getElementById('stockholm');

        var vasteras = document.getElementById('vasteras');
        if (stockholm.checked || vasteras.checked) {
            $('#cityError').hide();
            $('#noerror').val('true');
        } else {
            $('#cityError').show();
            $('#noerror').val('false');
        }



        var alergicyes = document.getElementById('veg');

        var alergicno = document.getElementById('none');
        if (alergicyes.checked || alergicno.checked) {
            $('#alergicError').hide();
            $('#noerror').val('true');
        } else {
            $('#alergicError').show();
            $('#noerror').val('false');
        }



        if ($('#noerror').val() !== 'false') {
           window.location.replace("thankyou.html");
        }

    })

})