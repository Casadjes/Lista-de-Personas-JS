const personas = [new Persona("Franko", "TheBoss")];

function mostrarPersonas() {
	texto = "";
	for (let persona of personas) {
		console.log(persona);
		texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
	}
	document.getElementById("personas").innerHTML = texto;
}

function agregarPersonas() {
	let formulario = document.forms["form"];
	let nombre = formulario["nombre"];
	let apellido = formulario["apellido"];

	if (nombre.value != "" && apellido.value != "") {
		const persona = new Persona(nombre.value, apellido.value);
		function limpiarImput() {
			personas.push(persona);
			mostrarPersonas();
			formulario.reset();
		}
		limpiarImput();
	} else if (nombre.value == "" && apellido.value == "") {
		setTimeout(() => {
			let error = (document.getElementById("error").innerHTML =
				"No hay valores");
			console.log(error);
		}, 500);
	} else if (
		(nombre.value == "" && apellido.value != "") ||
		(nombre.value != "" && apellido.value == "")
	) {
		setTimeout(() => {
			let error = (document.getElementById("error").innerHTML =
				"Falta un valor");
			console.log(error);
		}, 500);
	}
	nombre.addEventListener("focus", () => {
		setTimeout(() => {
			error.innerHTML = "";
		}, 500);
	});
	apellido.addEventListener("focus", () => {
		setTimeout(() => {
			error.innerHTML = "";
		}, 500);
	});
}
