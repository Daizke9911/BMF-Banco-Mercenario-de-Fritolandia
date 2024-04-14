const container_contenido = document.getElementById('container_contenido');
const container_contenido2 = document.getElementById('container_contenido2');

//Crear variables para cada uno de los items del menu
const item_inicio = document.getElementById('item_inicio');
const item_facturas = document.getElementById('item_facturas');
const item_creditos = document.getElementById('item_creditos');
const item_perfil = document.getElementById('item_perfil');
const item_conversaciones = document.getElementById('item_conversaciones');
const item_iniciar_seccion = document.getElementById('item_iniciar_seccion');
const item_registrarse = document.getElementById('item_registrarse');
const item_tasa = document.getElementById('item_tasa');
const item_notificaciones = document.getElementById('item_notificaciones');
const item_ajustes = document.getElementById('item_ajustes');
const item_cerrar_seccion = document.getElementById('item_cerrar_seccion');


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_inicio.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('inicio.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


item_facturas.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('facturas.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_creditos.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('creditos.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_perfil.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('perfil.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_conversaciones.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('conversaciones.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_iniciar_seccion.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('iniciar_seccion.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_registrarse.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('registrarse.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_tasa.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('tasa.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_notificaciones.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('notificaciones.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_ajustes.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('ajustes.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_cerrar_seccion.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('cerrar_seccion.html')
    .then(response => response.text())
    .then(html => {
        container_contenido2.innerHTML = html;
    });
});

