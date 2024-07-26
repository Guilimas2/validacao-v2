// BLOCO PARA VALIDAÇAO DE EMAIL
// --------------------------------------------------------------------
function chegarEmail(){
    if(document.forms[0].email.value == "" || 
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1)
       {
        alert("Por favor infrome um email valido");
        return false;
    }else{
        alert("email informado com sucesso!");
        document.getElementById('email').innerHTML = document.forms[0].email.value 
    }
}
// --------------------------------------------------------------------

// CODIGO DE VERICAÇAO DE EMAIL DIGITADO
// --------------------------------------------------------------------

function verifica(){
    if(document.forms[0].email.value == 0){
        alert("Por favor, corno, informe um E-mail");
        document.frmEnvia.email.focus();
        return false;
    }
    return true;
}
// --------------------------------------------------------------------
 //validaçao para validaçao de acessar 
