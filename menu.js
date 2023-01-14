

function menu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none';
        document.querySelector('.comando').src = "assets/comandos/menu.svg";
    }else{
            itens.style.display = 'block';
            document.querySelector('.comando').src = "assets/comandos/close.svg";
        }
}