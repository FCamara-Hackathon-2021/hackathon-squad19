$(document).ready(function() {
    $('.multi_select').selectpicker();

    $.getJSON('database/listas_materiais/Material_Avulso.json', function(data) {
        var jsonData = JSON.stringify(data);
        $.each(JSON.parse(jsonData), function(key, value) {
            $("#Produtos").append('<option value="' + value + '">' + value + '</option>').selectpicker('refresh');
        });
    });
})