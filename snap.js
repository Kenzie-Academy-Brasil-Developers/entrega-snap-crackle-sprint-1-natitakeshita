//Definindo funções
function snapCrackle(maxValue){
    let lista = "";
    let i = 1;
        while (i <= maxValue){
            if (i % 2 === 1 && i % 5 !== 0){
                lista += "Snap, ";
            } else if (i % 5 === 0 && i % 2 === 0){
                lista += "Crackle, "
            } else if (i % 2 === 1 && i % 5 === 0){
                lista += "SnapCrackle, "
            } else {
                lista += (i + ", ") 
            }  
        i++;
        }
        return console.log(lista);
}

//Chamando funções
snapCrackle(15)