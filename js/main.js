function validateForm(){
	// validando nombre 
	var nameObligatorio = document.getElementById('name').value;
	if(  nameObligatorio == null ||  nameObligatorio.length == 0 || /^\s+$/.test(nameObligatorio)){
		alert('Campo obligatorio, por favor ingresa tu nombre');
		return false;
		//primera letra mayuscula
	}else if(nameObligatorio.charAt(0)!== nameObligatorio.charAt(0).toUpperCase()){
		alert('La primera letra de tu nombre debe de ser mayuscula');
		return false;
	}
	//valindando apellido
	var lastnameObligatorio = document.getElementById('lastname').value;
	if(lastnameObligatorio == null ||  lastnameObligatorio.length == 0 || /^\s+$/.test(lastnameObligatorio)){
		alert('Campo obligatorio, por favor ingresa tu  apellido');
		return false;
		//primera letra mayuscula
	}else if(lastnameObligatorio.charAt(0)!== lastnameObligatorio.charAt(0).toUpperCase()){
		alert('La primera letra de tu apellido debe de ser mayuscula');
		return false;
	}
	//validando correo
	var correo = document.getElementById("input-email").value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
		alert('Campo obligatorio, por favor ingresa tu correo');
		return false;
	}
	if( !expr.test(correo)){
		alert('Ingresa correo con formato valido');
		return false;
	}
	//validando contraseña
	var contraseña = document.getElementById('input-password').value;
	if(  contraseña == null ||  contraseña.length == 0 || /^\s+$/.test(contraseña)){
		alert('Campo obligatorio, por favor ingresa tu contraseña');
		return false;
	}else if(contraseña.length < 6){
		alert('Tu contraseña debe tener al menos 6 caracteres');
		return false;
	}else if(contraseña === "password"|| contraseña === "123456"|| contraseña === "098754"){
		alert('Tu contraseña no debe ser "password" o "123456" o  "098754"');
		return false;
	}

	//validando seleccion de bicicleta 
	var bici = document.querySelector('form-control').selectedIndex;
	if( bici == null || bici == 0 ) {
		alert('Por favor selecciona tu bicicleta');
  		return false;
	}
	//validando informacion adicional
	var masInfo= document.querySelector(".checkbox span");
	if( !elemento.checked ) {
		return false;
	}
}