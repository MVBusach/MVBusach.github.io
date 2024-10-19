---
title: Rimay
description: Convocatoria y coordinación de equipos de trabajo
tag: voluntariado
img: ./img/proyectos/rimay/hero-rimay.png
---
<div class="columns container">
<div class="column">
<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/1asdr2DU9tA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- ![Imagen destacada Rimay](https://via.placeholder.com/450x200) -->

</div>
<div class="column">

<!-- ## Descripción -->
Del quechua, rimay significa "voz", una metáfora del diálogo que busca establecer una mejor coordinación para asistir a la población afectada. Es una aplicación de software que facilita la gestión de equipos de trabajo en terreno. Permite realizar la convocatoria de distintos actores según el tipo de emergencia y luego permite asignar tareas a los integrantes del equipo por parte de un coordinador. Los integrantes del equipo pueden enviar reportes y gestionar sus tareas. La aplicación tiene la forma de un bot para Telegram que permite su utilización dentro de un grupo de chat, donde al mismo tiempo que se intercambian conversaciones en el chat, se pueden asignar tareas, enviar reportes y realizar seguimiento al avance del equipo.

<div class="flex-center mt-4">
<a class="button is-primary" href="/formulario?p=rimay">
        Registrarse para una prueba
</a>
</div>

</div>
</div>
<section class="full-width light-background">

## Por qué usar Rimay
<div class="columns is-size-7 ">
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-administra@0.5x.png">
</div>

### Administración
Rimay levanta información de la situación de emergencia en vivo, por medio de reportes, en base a la información reportada por los participantes del equipo de emergencia desplegados en terreno.

</div>
</div>
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-analiza@0.5x.png">
</div>

### Visualiza
Rimay permite la visualización de los datos mediante el empleo de reportes, geolocalización y gestión de registro de participantes en el equipo de emergencia.

</div>
</div>
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-personaliza@0.5x.png">
</div>

### Ergonomía
Rimay entrega versatilidad mediante sus 5 versiones que adaptan su funcionamiento dependiendo de los requerimientos de las comunidades
</div>
</div>


</section>

<section class="full-width dark-background">
<div class="columns">
<div class="column">

## ¿Quiénes pueden usar Rimay?

</div>
<div class="column">

* Organizaciones de la sociedad civil
* Instituciones del Estado
* Grupos de investigación interesados en comprender el comportamiento del voluntariado en terreno tras una situación de emergencia
</div>
</div>
</section>
<section class="full-width light-background">

## El proceso
<div class="columns is-size-7">
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-personaliza@0.5x.png">
</div>

### 1. Administra
Perfiles de participantes y tareas
</div>
</div>
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-personaliza@0.5x.png">
</div>

### 2. Selecciona
Usuarios según sus perfiles y los comunica con los administradores
</div>
</div>
<div class="column">
<div class="box feature-box">
<div class="round-icon">
        <img class="small-icon" src="./img/proyectos/rimay/iconos/ico-personaliza@0.5x.png">
</div>

### 3. Desarrolla
Procesos de optimización de labores requeridos en situaciones de emergencia 
</div>
</div>
</div>

</section>
<section>

## Sobre el software

<div class="columns">
<div class="column">

### Arquitectura
Este proyecto está construido usando tecnologías de código abierto. Su arquitectura está compuesta por un un servicio REST con acceso a la base de datos y la plataforma web de administración. Por medio del mismo servicio se conecta el bot de TelegramⓇ interactuando a través de mensajes que permiten la creación y gestión de tareas asignadas desde los coordinadores a los voluntarios y envío de reportes.
</div>
<div class="column">

![Rimay - Arquitectura básica del software](./img/proyectos/rimay/arquitectura-rimay.png)
</div>
</div>
<div class="columns">
<div class="column">

![Rimay - Componentes del sistema](./img/proyectos/rimay/diagrama-componentes-rimay.png)

</div>
<div class="column">

### Componentes
Voluntarios y coordinadores se comunican por medio de sus dispositivos móviles utilizando el bot de Telegram. Los mensajes obtenidos se procesan para ser visualizados adecuadamente en el panel de administración, facilitando su lectura para la toma de decisiones.

</div>
</div>
</section>
<section>
<h2>Modelo Conceptual</h2>
<div class="columns">
<img src="./img/proyectos/rimay/mc-rimay.png" alt="Rimay - modelo conceptual"></img>
</div>
</section>



