$(document).ready(function(){
    load_json_data('Cidades');

    function load_json_data(id, local_id)
    {
        var html_code = "";
        $.getJSON('database/escolas/escolas.json', function(data) {
        html_code += '<option value="">'+ id +'</option>';
        console.log(data);
        
        $.each(data, function(key, value) {
            if(id == 'Cidades' && local_id == null) {
            html_code += '<option value="' + value.cidade + '">'+ value.cidade +'</option>';
            }
            else if (value.cidade == local_id) {
                html_code += '<option value="' + value.bairro + '">' + value.bairro + '</option>';
            }
            else if (value.bairro == local_id) {
                html_code += '<option value="' + value.escola + '">' + value.escola + '</option>';
            }
        });

        $('#' + id).html(html_code);
        });
    }

    $(document).on('change', '#Cidades', function() {
        var cidade_id = $(this).val();

        if(cidade_id != null) {
        $('#Escolas').html('<option value="">Escolas</option>');
        load_json_data('Bairros', cidade_id);
        }
        else {
        $('#Bairros').html('<option value="">Bairros</option>');
        $('#Escolas').html('<option value="">Escolas</option>');
        }
    });

    $(document).on('change', '#Bairros', function() {
        var bairro_id = $(this).val();

        if(bairro_id != null) {
        load_json_data('Escolas', bairro_id);
        }
        else {
        $('#Escolas').html('<option value="">Escolas</option>');
        }
    });
});
