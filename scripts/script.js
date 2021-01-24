const calculadora = new Vue({
	el: "#contenedor",
	data:{
		digito: null,
		accion: null,
		cantidadSignos: 0,
		cantidadPuntos: 0,
		operaciones: "0",
		historial: " ",
		teclas: [
			{class: "numero", inner: "1"},
			{class: "numero", inner: "2"},
			{class: "numero", inner: "3"},
			{class: "operador", inner: "+"},
			{class: "numero", inner: "4"},
			{class: "numero", inner:"5"},
			{class: "numero", inner: "6"},
			{class: "operador", inner: "-"},
			{class: "numero", inner: "7"},
			{class: "numero", inner: "8"},
			{class: "numero", inner: "9"},
			{class: "operador", inner: "/"},
			{class: "numero", inner: "0"},
			{class: "operador", inner: "*"},
			{class: "decimal", inner: "."},
			{class: "igual", inner: "="},
			{class: "borrar", inner: "C"},
		]
	},
	methods:{
		inicio: function (indice){
			this.digito = this.teclas[indice].inner
			this.accion = this.teclas[indice].class
		 	calculadora.agregarDigito()
		},
		 agregarDigito: function (){
			if (this.accion === "numero") {
				if (this.operaciones == "0") this.operaciones = this.digito;
				else{
					this.cantidadSignos = 0;
					this.operaciones += this.digito;
				}
			}
			else if (this.accion === "operador") {
				this.cantidadSignos++
				if(this.cantidadSignos > 1);
				else{
					if ( this.cantidadPuntos <= 1) {
						this.operaciones += this.digito; 
						this.cantidadPuntos = 0
					}
				}
			}
			else if (this.accion === "decimal") {
				if (this.cantidadSignos == 0) {
					this.cantidadPuntos++
					if(this.cantidadPuntos > 1 || this.cantidadSignos > 1);
					else{
						this.operaciones += this.digito;
					}
				};
			}
			else if (this.accion == "igual") {
				if (this.cantidadSignos == 1);
				else calculadora.calcular()
			}
			else calculadora.borrar();
		},
		calcular: function (operacion,resultado){
			this.cantidadSignos = 0,
			this.cantidadPuntos =  0,

			operacion = this.operaciones;
			this.operaciones =  eval(this.operaciones)
			resultado = this.operaciones;
			calculadora.agregarAlHistorial(operacion,resultado)

		},
		borrar: function (){
			this.operaciones = "0";
			this.cantidadSignos = 0; 
		},
		agregarAlHistorial: function (operacion,resultado){
			if(this.historial == " ") this.historial = `<br> Operacion: ${operacion} <br> resultado: ${resultado}  `;
			else this.historial += `<br><br> Operacion: ${operacion} <br> resultado: ${resultado}  `;
			
		},
		limpiarHistorial: function (){this.historial = " "},
	}
})
