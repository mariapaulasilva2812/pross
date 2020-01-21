/**
 * Clase que contiene los metodos que dan funcionalidad a la interfaz.
 * @author Cristobal Alvarez
 * @version 1.0
*/

var i_Index = (function($, window, document, undefined)
{
	'use strict';
	/**
	 * Constructor de la clase.
	 *
	 * @return void
    */
	function Index(data)
	{
    }

    /**
	 * Inicializa el despliegue de la interfaz.
	 *
	 * @author Cristobal Alvarez
	 * @since 05-10-2017
	 * @version 1.0
	 * @param:
	 *
	 * @return void
	*/
	Index.prototype.init2 = function()
	{
        this.enviarConsulta({});
        this.counterUpInitiation({});
    }

    /**
	 * Metodo que ingresa Celular
	 *
	 * @author Cristobal Alvarez
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.enviarConsulta = function()
	{
        $("#btnEnviarConsulta").on('click', function(){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Listo!',
                text: 'Tu consulta ha sido enviada.',
                showConfirmButton: false,
                timer: 1500
            })
        });
    }

    /**
	 * Metodo que ingresa Celular
	 *
	 * @author Cristobal Alvarez
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.counterUpInitiation = function()
	{
        $('.counter').counterUp();
    }
    return(Index);
})(jQuery, window, document);