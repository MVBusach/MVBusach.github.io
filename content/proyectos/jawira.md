---
title: Jawira
description: Plataforma de procesamiento en tiempo real
tag: monitoreo
img: ./img/proyectos/project-placeholder.png
---
<div class="columns container">
<div class="column">

![Captura de Pantalla sistema Jawira](./img/proyectos/jawira/hero-jawira.png)
</div>
<div class="column">

<!-- ## Descripción -->
Jawira es una plataforma de procesamiento en tiempo real para apoyar la toma de decisiones y Conciencia Situacional (Situation Awareness) en situaciones de emergencias y de voluntarios en terreno.
<div class="flex-center mt-4">
<a class="button is-primary" href="/formulario?p=jawira">
        Registrarse para una prueba
</a>
</div>
</div>
</div>
<section class="light-background full-width">

## En qué consiste el sistema
<div class="columns is-size-7">
<feature-box svg-icon="ico-graph-report">
Servicio para la recepción de reportes
</feature-box>
<feature-box svg-icon="ico-real-time">

Sistema de procesamiento de _streams_ en tiempo real.

</feature-box>
<feature-box svg-icon="ico-database">
Base de datos que almacena métricas predefinidas para ser consumidas por un Dashboard de visualización
</feature-box>
</div>

</section>
<section>

## Sobre el software
<div class="columns">
<div class="column">

![Diagrama General de Jawira](./img/proyectos/jawira/jawira-diagrama-general.png)
</div>
<div class="column">

## Descripción general

El servicio REST de recepción de reportes puede recibir datos consolidados de otras plataformas como Ayni, en el que los reportes tenderán a ser más completos y periódicos. Por otra parte, el sistema también puede recibir reportes de otras instituciones o aplicaciones, con información parcial o incompleta, y con cualquier frecuencia. Internamente, los reportes son enviados a un sistema de procesamiento de Streams en tiempo real que agrupa, indexa y extrae métricas predefinidas en ventanas de tiempo. Estas métricas se almacenan en una base de datos de vistas, que guarda las métricas como series de tiempo. Finalmente, hay otro servicio REST de consulta de vistas, que permite disponibilizar los datos.
</div>
</div>

<div class="columns">
<div class="column">

## Arquitectura interna

El servicio de recepción de reportes primero realiza una verificación de seguridad para asegurar que vengan de una institución registrada y sean consistentes, los reportes que fallan la verificación de seguridad son omitidos. De otro modo, el reporte es enviado al sistema de procesamiento de streams, implementado usando la plataforma Kafka. Cada reporte se ingresa a un Tópico de Reportes (una cola de todos los reportes válidos, ordenados por tiempo de llegada). Esta cola es procesada regularmente en ventanas de tiempo, en la que los reportes son extraídos, y se extraen datos numéricos indexados para generar métricas (cuántos voluntarios hay por institución, cuántos hay por misión, reportes por lugar, etc.). Esos datos son enviados a un grupo de Tópicos de Métricas, en los que se almacenan los valores como pares (Llave, Valor) en colas distintas para las métricas diferentes. Posteriormente, estas métricas son agrupadas, combinadas en ciertos casos, y almacenadas en las bases de datos de vistas como series de tiempo. Finalmente, las vistas pueden ser consultadas con un sistema de búsqueda, filtrado y agrupación por granularidad de tiempo (por ejemplo, sólo un valor por serie de tiempo por minuto, o por hora, para limitar el número de valores de las vistas).


</div>
<div class="column">

![Diagrama General de Jawira](./img/proyectos/jawira/jawira-arquitectura-interna.png)
</div>
</div>
</section>