$(document).ready(function () {
    $('#id_grupo').on('change', function () {
        if (this.value !== '') {
            $.ajax({
                url: "/get/subgrupos/" + $(this).val(),
                type: "GET",
                success: function (dados) {
                    let subgrupos = dados['subgrupos'];
                    if (subgrupos != null) {
                        let opcoes = '<option>------------</option>';
                        for (let subgrupo in subgrupos) {
                            valor = subgrupos[subgrupo];
                            opcoes += '<option value="' + valor['id'] + '">' + valor['nome'] +'</option>';
                        }
                        $('#id_subgrupo').html(opcoes);
                    }
                },
                error: function (request, status, error) {
                    console.log('erro', error);
                }
            });
        }
    });    

    $('#id_subgrupo').on('change', function () {
        if (this.value !== '') {
            $.ajax({
                url: "/get/tarefas/" + this.value,
                type: "GET",
                success: function (dados) {
                    console.log(dados);
                    let tarefas = dados['tarefas'];
                    if (tarefas != null) {
                        let opcoes = '<option>------------</option>';
                        for (let tarefa in tarefas) {
                            valor = tarefas[tarefa];
                            opcoes += '<option value="' + valor['id'] + '">' + valor['title'] +'</option>';
                        }
                        $('#id_tarefa').html(opcoes);
                    }
                },
                error: function (request, status, error) {
                    console.log('erro', error);
                }
            });
        }
    });    
});
