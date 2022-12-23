let datos = [];
for ( let i = 0 ; i < 1; i++) {
    let nombre = prompt("digite su nombre: ");
    let identificacion1 = parseInt(prompt("digite su identificacion: "));
    let contraseña1 = parseInt(prompt("digite su contraseña:"));
    let tipoUsuario1 = prompt("digite su tipo de usuario:");
    datos.push({nombre: nombre, identificacion: identificacion1, contraseña: contraseña1, tipoUsuario: tipoUsuario1})
}
console.log(datos);
let sumaTotal = 0;
let baseTotalDinero = [100000, 100000, 100000, 100000, 100000, 100000, 100000, 50000, 50000, 50000, 50000, 20000, 20000, 20000, 20000, 20000, 10000, 10000, 10000, 10000, 5000, 5000, 5000, 5000];
let contador = 0, contador2 = 0, contador3 = 0, contador4 = 0, contador5 = 0;
let sumatoria = 0, sumatoria1 = 0, sumatoria2 = 0, sumatoria3 = 0, sumatoria4 = 0;

if (datos[0].tipoUsuario === "administrador") {
    let autorizacion = parseInt(prompt("digite [1] si necesita a cargar el cajero, digite [0] si lo quiere revisar"));
    while (autorizacion != 2){
        let validacionIdentifiacion = parseInt(prompt("digite de nuevo su identifiacion: "));
        let validacionContraseña = parseInt(prompt("digite de nuevo su contraseña apreciado administrador: "));
        if (datos[0].identificacion === validacionIdentifiacion && datos[0].contraseña === validacionContraseña){
            let ingresarValores = 1;
            let index = 0;
            alert("tenga encuenta que al recargar el cajero debe que ingresar las siguientes denominaciones de billetes: 5000, 10000, 20000, 50000, 100000  ");
            while (ingresarValores != 0) {
                let billeteDenominacion = parseInt(prompt("ingrese el dinero: "));
                baseTotalDinero.push(billeteDenominacion);
                ingresarValores = parseInt(prompt("digite [1] para seguir recargando el banco, de lo contrario digite [0]"));
                index += billeteDenominacion;
                console.log(index);
            }
            console.log(baseTotalDinero);
            for(let i = 0; i < baseTotalDinero.length; i++){
                sumaTotal += baseTotalDinero[i];
                if(baseTotalDinero[i] == 5000){
                    sumatoria += baseTotalDinero[i];  
                    contador += 1;      
                }
                if(baseTotalDinero[i] == 10000){
                    sumatoria1 += baseTotalDinero[i];
                    contador2 += 1;
                }
                if(baseTotalDinero[i] == 20000){
                    sumatoria2 += baseTotalDinero[i];
                    contador3 += 1;
                }
                if(baseTotalDinero[i] == 50000){
                    sumatoria3 += baseTotalDinero[i];
                    contador4 += 1;
                }
                if(baseTotalDinero[i] == 100000){
                    sumatoria4 += baseTotalDinero[i];
                    contador5 += 1;
                }
            }
            console.log("las cantidades de dinero de acuerdo a su denominacion es la siguiente:" + "\ncantidad billetes $5000: " + contador + " valor de billetes de $5000: " + sumatoria + "\ncantidad de billtes de $10000: " + contador2 + " valor de billetes de $10000: " + sumatoria1 + "\ncantidad de billetes de $20000: " + contador3 + " valor de billetes de $20000: " + sumatoria2 + "\ncantidad de billetes de $50000: " + contador4 + " valor de billetes de $50000: " + sumatoria3  + "\ncantidad de billetes de $100000: "+ contador5 + " valor de billetes de $100000: " + sumatoria4 + "\ny la cantidad de dinero que hay en total es de: " + sumaTotal);
        }
        alert("Vuelva de nuevo al inicio");
        autorizacion = parseInt(prompt("si quiere volver a cargar el cajero marque [1], de lo contrario marque[2]"));
    } 
    if(autorizacion === 0){
        for(let i = 0; i < baseTotalDinero.length; i++){
            sumaTotal += baseTotalDinero[i];
            if(baseTotalDinero[i] == 5000){
                sumatoria += baseTotalDinero[i];  
                contador += 1;      
            }
            if(baseTotalDinero[i] == 10000){
                sumatoria1 += baseTotalDinero[i];
                contador2 += 1;
            }
            if(baseTotalDinero[i] == 20000){
                sumatoria2 += baseTotalDinero[i];
                contador3 += 1;
            }
            if(baseTotalDinero[i] == 50000){
                sumatoria3 += baseTotalDinero[i];
                contador4 += 1;
            }
            if(baseTotalDinero[i] == 100000){
                sumatoria4 += baseTotalDinero[i];
                contador5 += 1;
            }         
        }
        console.log("las cantidades de dinero de acuerdo a su denominacion es la siguiente:" + "\ncantidad billetes $5000 " + contador+ " valor de billetes de $5000: " + sumatoria + "\ncantidad de billtes de $10000: " + contador2 +" valor de billetes de $10000: " + sumatoria1 + "\ncantidad de billetes de $20000: " + contador3 + " valor de billetes de $20000: " + sumatoria2 + "\ncantidad de billetes de $50000: " + contador4 + " valor de billetes de $50000: " + sumatoria3  + "\ncantidad de billetes de $100000: "+ contador5 +" valor de billetes de $100000:" + sumatoria4 + "\ny la cantidad de dinero que hay en total es de: " + sumaTotal);
    }
}else if(datos[0].tipoUsuario === "cliente"){
    let confirmar = "si";
    while (confirmar != "no") {
        for(let i = 0; i < baseTotalDinero.length; i++){
            sumaTotal += baseTotalDinero[i];
        }
        console.log(baseTotalDinero);
        let confirmarContraseña = parseInt(prompt("querido cliente digite la contraseña de nuevo: "))
        if(datos[0].contraseña === confirmarContraseña){
            let hacerRetiro = parseInt(prompt("digite cuanto va ha retirar: "));
            if (hacerRetiro < sumaTotal){
                alert("Retiro exitoso");
                console.log("saldo total del cajero: " + (sumaTotal - hacerRetiro));
            }else if(hacerRetiro > sumaTotal){
                confirm("el saldo del cagero es insuficiente, vuelva pronto");
                break;
            }
        }
        confirmar = prompt("deseas volver a retirar? escriba [si] de lo cotrario [no] ");
    }
    

}


