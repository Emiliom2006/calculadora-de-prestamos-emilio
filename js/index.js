function total(){
    var monto = parseFloat(document.querySelector(".monto").value) ;
    var interes = parseFloat(document.querySelector(".interes").value) ;
    var tiempo = parseFloat(document.querySelector(".meses").value) ;
    interest = (interes/12) /100;

    var cuota =  (monto * (Math.pow(1 + interest,tiempo)* interest) /
    (Math.pow(1 + interest, tiempo)-1));

    var totali=0;
    totali = (cuota * tiempo) - monto;

    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:0
    })

    if(monto && interes == interes && tiempo){
        
        document.getElementById("alerta1").style.display="block";
        document.getElementById("alerta1").innerHTML = "Cuota mensual estimada: DOP " +  formatter.format(cuota) + "<br>" 
        + "Total del interés pagado: DOP " + formatter.format(totali);
        
    }
    else{
        swal({
            icon: "error",
            title: "Error",
            text:"Todos los campos deben ser rellenados",
            button:false,
            timer:3000,
            
          }); 
    }
}
