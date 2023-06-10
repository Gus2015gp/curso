
$(document).ready(function(){
     
    $("#ocultar").click(function(){
        $("#elemento").hide();
    });

    $("#mostrar").click(function(){
        $("#elemento").show();
    });

});
$(document).ready(function() {
    // Validar formulario al enviar
    $('#formulario').submit(function(event) {
      event.preventDefault();
      $('.error').remove();
  
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      var edad = $('#edad').val();
      var correo = $('#correo').val();
      var usuario = $('#usuario').val();
      var contrasena = $('#contrasena').val();
      var repetirContrasena = $('#repetir-contrasena').val();
  
      
      
  
      // Validar campos obligatorios
      if (nombre === '' || apellido === '' || correo === '' || usuario === '' || contrasena === '') {
        $('<p class="error">Todos los campos obligatorios deben ser completados.</p>').insertBefore('#formulario');
      }
  
      // Validar formato de correo electrónico
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        $('<p class="error">Ingrese un correo electrónico válido.</p>').insertBefore('#formulario');
      }
  
      // Validar edad como número válido
      if (isNaN(edad) || edad <= 0 ) {
        
        $('<p class="error">Ingrese una edad válida.</p>').insertBefore('#formulario');
      }
  
      // Resto de la lógica de validación aquí
  
      // Si no hay errores, mostrar mensaje de éxito
      if ($('.error').length === 0) {
        $('<p class="success">Formulario enviado con éxito.</p>').insertBefore('#formulario');
      }
    });
  
    // Completar select de provincias con API
    $.getJSON('https://apis.datos.gob.ar/georef/api/provincias', function(data) {
      var provincias = data.provincias;
  
      $.each(provincias, function(index, provincia) {
        $('<option value="' + provincia.nombre + '">' + provincia.nombre + '</option>').appendTo('#provincia');
      });
    });
  
    // Completar select de países con API
    $.getJSON('https://restcountries.com/v3.1/all', function(data) {
      var paises = data;
  
      $.each(paises, function(index, pais) {
        $('<option value="' + pais.name.common + '">' + pais.name.common + '</option>').appendTo('#pais');
      });
    });
  });
  