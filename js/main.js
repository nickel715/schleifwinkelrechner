$(document).ready(function() {

    $('#angleSelect').change(function() {

        var angleInput = $('input[name=angle]');
        var thisVal = $(this).val();

        if (!isNaN(parseFloat(thisVal))) {
            angleInput.val(parseFloat(thisVal)).change();
        }

        if ($(this).val() == 'custom') {
            angleInput.show();
        } else {
            angleInput.hide();
        }

    });

    $('form input').change(calculate);

    calculate();

});

function calculate() {

    var angleInput = $('input[name=angle]');
    var sin = Math.sin(angleInput.val()/2*Math.PI/180);
    var knifeMiddle = sin*$('input[name=knife_width]').val();
    var knifeRadius = $('input[name=knife_strength]').val()/2;

    $('#distanceTop'   ).html(Math.round((knifeMiddle+knifeRadius)*10)/10 + ' mm');
    $('#distanceMiddle').html(Math.round((knifeMiddle            )*10)/10 + ' mm');
    $('#distanceBottom').html(Math.round((knifeMiddle-knifeRadius)*10)/10 + ' mm');

}
