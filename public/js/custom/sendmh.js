$(document).ready(function() {
    $('#send').click(function(e) {
        var data = $('#dataIn').val();
        e.preventDefault();
        $.post('/nhandulieu', {data : data}, function(ketqua) {
            $('#output').html(ketqua);
        });
        
    });
});