
function consultaCep()
{
    $(".barra_progresso").show();
    var cep = document.getElementById("cep").value;
    var  url = "https://viacep.com.br/ws/"+cep+"/json/";

    console.log(url);

    $.ajax({
    url: url,
    type: "GET",
    success: function(response){
        console.log(response);
        $("#logradouro").html(response.logradouro);
        $("#bairro").html(response.bairro);
        $("#localidade").html(response.localidade);
        $("#uf").html(response.uf);
        $("#titulo_cep").html("CEP "+response.cep);
        $(".cep").show();
        $(".barra_progresso").hide();

        //document.getElementById("logradouro").innerHTML = response.logradouro;
        //document.getElementById("bairro").innerHTML = response.bairro;
        //document.getElementById("localidade").innerHTML = response.localidade;
       // document.getElementById("uf").innerHTML = response.uf;
        //$("#uf").html(response.uf); //outra forma de pedir a informação

        //para mudar tipo de informação (response.bairro)...
    }
 })
}

$(function(){
    $(".cep").hide();//esconde o elemento <-this
    $(".barra_progresso").hide();
})

