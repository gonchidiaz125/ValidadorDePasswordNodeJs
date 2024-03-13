function ValidarLargoMinimo(password) {
    let largoMinimo = 5;
    if (password.length >= largoMinimo)
    {
        return true;
    }
    return false;
}

function ValidarLargoMaximo(password) {
    let largoMaximo = 20;
    if(password.length <= largoMaximo)
    {
        return true;
    }
    return false;
}

function ValidarDebeContenerAlgunNumero(password) {
    for(var i = 0; i < password.length; i++){
        if(/^\d$/.test(password[i])){
            return true;
        }    
    }
    return false;
}

function ValidarDebeContenerAlgunaMinuscula(password) {
    for(var i = 0; i < password.length; i++)
    {
        if(/^[a-z]$/.test(password[i])){
            return true;
        }
    }
    return false;
}

function ValidarDebeContenerAlgunaMayuscula(password) {
    for(var i = 0; i < password.length; i++)
    {
        if(/^[A-Z]$/.test(password[i]))
        {
            return true;
        }
    }
    return false;
}  
    
 // la expresión regular "  /^[^\w\d]$/  " verifica si un carácter no es alfanumérico
 function ValidarDebeContenerAlgunCaracterEspecial(password) {
    for(var i = 0; i < password.length; i++)
    {
        if(/^[^\w\d]$/.test(password[i]))
        {
            return true;
        }
    }
    return false;
}

function ValidarPassword(password) {    
    let resLargoMinimo = ValidarLargoMinimo(password);
    let resLargoMaximo = ValidarLargoMaximo(password);
    let resContieneNumero = ValidarDebeContenerAlgunNumero(password);
    let resContieneMinuscula = ValidarDebeContenerAlgunaMinuscula(password);
    let resContieneMayuscula = ValidarDebeContenerAlgunaMayuscula(password);        
    let resContieneCaracterEspecial = ValidarDebeContenerAlgunCaracterEspecial(password);

    let resultadoFinal;
    if (resLargoMinimo && resLargoMaximo && resContieneNumero && resContieneMinuscula && resContieneMayuscula && resContieneCaracterEspecial) {
        resultadoFinal = true;
    } else {
        resultadoFinal=false;
    }

    let resultadoDeValidacion = {}

    resultadoDeValidacion.Valida = resultadoFinal;
    resultadoDeValidacion.Reglas = [];

    let reglaLargoMinimo = crearResultadoDeRegla("El largo de la contraseña debe ser al menos de 5 caracteres", resLargoMinimo, 0);
    resultadoDeValidacion.Reglas.push(reglaLargoMinimo);

    let reglaLargoMaximo = crearResultadoDeRegla("El largo de la contraseña debe contener menos de 20 caracteres", resLargoMaximo, 1);
    resultadoDeValidacion.Reglas.push(reglaLargoMaximo);

    let reglaContieneNumero = crearResultadoDeRegla("La contraseña debe contener al menos un caracter numerico", resContieneNumero, 2);
    resultadoDeValidacion.Reglas.push(reglaContieneNumero);

    let reglaContieneMinuscula = crearResultadoDeRegla("La contraseña debe contener al menos un caracter letra en minuscula", resContieneMinuscula, 3);
    resultadoDeValidacion.Reglas.push(reglaContieneMinuscula);

    let reglaContieneMayuscula = crearResultadoDeRegla("La contraseña debe contener al menos un caracter letra en mayuscula", resContieneMayuscula, 4);
    resultadoDeValidacion.Reglas.push(reglaContieneMayuscula);

    let reglaContieneCaracterEspecial = crearResultadoDeRegla("La contraseña debe contener al menos un caracter especial", resContieneCaracterEspecial, 5);
    resultadoDeValidacion.Reglas.push(reglaContieneCaracterEspecial);

    return resultadoDeValidacion;
}

function crearResultadoDeRegla(regla, valida, numeroRegla) {
    return {
        Regla: regla,
        Valida: valida,
        NumeroRegla: numeroRegla
    };
}

module.exports = {
    ValidarPassword,
    ValidarLargoMinimo,
    ValidarLargoMaximo,
    ValidarDebeContenerAlgunNumero,
    ValidarDebeContenerAlgunaMinuscula,
    ValidarDebeContenerAlgunaMayuscula,
    ValidarDebeContenerAlgunCaracterEspecial
};