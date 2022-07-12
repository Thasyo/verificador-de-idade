function clicar(){
    let ano = window.document.getElementById('ano') //acessando o elemento que compoe o ano digitado pelo usuario.
    let data = new Date() 
    let anoatual = data.getFullYear() //Acessando ano atual
    let result = window.document.getElementById('resultado')
    if (ano.value.length == 0 || ano.value > anoatual ){
        alert('[ERRO] Verifique os dados novamente!')
    }else{
        let sexo = window.document.getElementsByName('radsex')
        let idade = anoatual - ano.value
        let genero = ''
        let img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = "Homem"
            if(idade < 10){
                //criança
                img.setAttribute('src', './imagens/homem-crianca.jpg')
            }else{
                if(idade < 20){
                    //jovem
                    img.setAttribute('src', './imagens/homem-jovem.jpg')
                }else{
                    if(idade < 50){
                        //adulto
                        img.setAttribute('src', './imagens/homem-adulto.jpg')
                    }else{
                        //idoso]
                        img.setAttribute('src', './imagens/homem-idoso.jpg')
                    }
                }
            }
        }else{
            genero = "Mulher"
            if(idade < 10){
                //criança
                img.setAttribute('src', './imagens/mulher-crianca.jpg')
            }else{
                if(idade < 20){
                    //jovem
                    img.setAttribute('src', './imagens/mulher-jovem.jpg')
                }else{
                    if(idade < 50){
                        //adulto
                        img.setAttribute('src', './imagens/mulher-adulta.jpg')
                    }else{
                        //idoso]
                        img.setAttribute('src', './imagens/mulher-idosa.jpg')
                    }
                }
            }
        }
        result.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
        result.appendChild(img) // Necessário para a imagem carregar no site.
    }

}