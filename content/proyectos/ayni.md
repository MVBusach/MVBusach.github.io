---
title: Ayni
description: Gestión de voluntariado en situaciones de emergencia
tag: voluntariado
img: ./img/proyectos/ayni/hero-ayni.png
---
<div class="columns container">
<div class="column ">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/CbTnQvd8XGs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="column ">

<!-- ## Descripción -->
Del quechua, ayni significa "reciprocidad" y representa el espíritu que moviliza a las personas a realizar labores de ayuda frente a una emergencia. Es una aplicación de selección de voluntarios afiliados y espontáneos que ayuda a realizar una gestión más eficiente y eficaz de personas (coordinadores, líderes y voluntarios). La aplicación permite definir misiones y seleccionar a los voluntarios que tienen mayor afinidad para cada misión. Se desarrollaron algoritmos de ciencia de datos para crear funciones de distancia que permiten calcular las afinidades entre voluntarios, líderes y misiones. Además se desarrollaron test psicométricos para modelar los rasgos de personalidad de las personas para evaluar sus competencias para distintos tipos de misiones. 
<div class="flex-center mt-4">
<a class="button is-primary" href="/formulario?p=ayni">
        Registrarse para una prueba
</a>
</div>
</div>
</div>

<section class="light-background full-width">

## Por qué usar Ayni
<div class="columns is-size-7">
<feature-box icon="./img/proyectos/ayni/iconos/ico-seleccion.png">

### Adaptación
Ayni facilita la selección de voluntarios según los requisitos de cada situación de emergencia

</feature-box>
<feature-box icon="./img/proyectos/ayni/iconos/ico-eficiencia.png">

### Eficiencia
Ayni distribuye voluntarios de manera eficiente sin necesidad de contar con una administración central

</feature-box>
<feature-box icon="./img/proyectos/ayni/iconos/ico-configura.png">

### Versatilidad
Ayni permite realizar configuraciones personalizadas en su sistema, entregar información a todos los usuarios registrados y realizar actualizaciones en tiempo real del estado de una tarea

</feature-box>
</div>
</section>
<section class="dark-background full-width">
<div class="columns">
<div class="column">

##  El usuario puede configurar el tipo de palabras claves o comandos, tales como: 

</div>
<div class="column">

* Búsqueda y rescate de personas
* Recolección de alimentos no perecibles
* Búsqueda y rescate de animales
* Retiro de escombros 
</div>
</div>
</section>
<section>

## Sobre el software



<div class="columns">
<div class="column">

### Arquitectura
Este proyecto está construido usando tecnologías de código abierto. 
Su arquitectura está compuesta por un un servicio REST con acceso a la base de datos y dos aplicaciones web: una para administración y otra para voluntarios.
Alternativamente existe una versión con funcionalidad limitada que utiliza un bot de TelegramⓇ para entregar información de misiones a voluntarios.
</div>
<div class="column">

![Ayni - Arquitectura básica del software](./img/proyectos/ayni/arquitectura-ayni.png)
</div>
</div>

<div class="columns">
<div class="column">

![Ayni - Arquitectura de integración con otros sistemas](./img/proyectos/ayni/arquitectura-ayni-jawira.png)
</div>
<div class="column">

### Interacción con otros softwares del proyecto
Distintas instancias de Ayni pueden enviar reportes con resumenes de estado generando reportes a tiempo real para favorecer la toma de decisiones
</div>
</div>
<section>
<h2>Modelo Conceptual</h2>
<div class="columns">
<img src="./img/proyectos/ayni/mc-ayni.png" alt="ayni - modelo conceptual"></img>
</div>
</section>