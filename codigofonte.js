document.write("<p>O meu primeiro exercício em JavaScript.</p>");

var intro = 'Caro aluno ';
var unidade = 'Bem-vindo à unidade curricular de LSSW ';
var versao = 1.0;

var concatenar = intro + unidade + versao;

document.write("<p>" + concatenar + "</p>");



function changeBackgroundColor(mudafundo) {
    document.body.style.backgroundColor = mudafundo;
}

changeBackgroundColor("blue");
