function descobrirBaseConversaoSetaBaseCalcular(baseNumerica){     
    document.getElementById('button_calcular').innerHTML = `<button id="calcular" onclick="calcular(${baseNumerica})">Calcular</button>`
}

function descobrirBaseAlterarMain(baseNumerica){
    var base = document.getElementById('base').innerHTML
    var conversao = document.getElementById('conversao').innerHTML
    

    if(baseNumerica == 10){
        base = "Decimal"
        document.getElementById('converterDecimal').style.display = 'none';
        document.getElementById('converterBinario').style.display = 'block';
        document.getElementById('converterOctal').style.display = 'block';
        document.getElementById('converterHexadecimal').style.display = 'block';
    } else if (baseNumerica == 2){
        base = "Binário"
        document.getElementById('converterDecimal').style.display = 'block';
        document.getElementById('converterBinario').style.display = 'none';
        document.getElementById('converterOctal').style.display = 'block';
        document.getElementById('converterHexadecimal').style.display = 'block';
    } else if (baseNumerica == 8){
        base = "Octal"
        document.getElementById('converterDecimal').style.display = 'block';
        document.getElementById('converterBinario').style.display = 'block';
        document.getElementById('converterOctal').style.display = 'none';
        document.getElementById('converterHexadecimal').style.display = 'block';
    } else if (baseNumerica == 16){
        base = "Hexadecimal"
        document.getElementById('converterDecimal').style.display = 'block';
        document.getElementById('converterBinario').style.display = 'block';
        document.getElementById('converterOctal').style.display = 'block';
        document.getElementById('converterHexadecimal').style.display = 'none';
    }
}

function calcular(baseNumerica){
    
}