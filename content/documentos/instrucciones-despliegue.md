---
title:  Despliegue Base del Cloud Inter-Universitarios para Emergencias 
description: Mediante el uso de Tecnologías de Container y Orquestación de Container sobre Ubuntu Server 18.04
origin: /herramientas/instrucciones-despliegue
originName: Instrucciones de Despliegue
---

<!-- 1. [Presentación](#id1)
2. [Despliegue del Cloud y Configuración del Cloud](#id2)
3. [Despliegue de Aplicaciones sobre el Cloud](#id3)
4. [Conclusiones](#id4) -->

### Material Adicional
<a href="files/informe-fondef-despliegue-cloud-2021.pdf">Descarga Informe completo</a>

## 1. Presentación

El presente documento contiene la secuencia de paso para desplegar y configurar una  versión base del cloud interuniversitario para emergencias, esto basado en tecnologías de container y orquestación de container sobre el sistema operativo Linux, distribución Ubuntu Server 18.04.

El despliegue se basa principalmente en dos aristas, que son: (1) los pasos para desplegar el cloud y dejarlo operativo, y (2) los pasos para desplegar aplicaciones de emergencias sobre ese cloud, ver Figura 1.1., que resume el contenido de este documento.


![figura1_1](./img/herramientas/instrucciones-despliegue/figura1_1.png)

Figura 1.1: pasos para dejar operativo versión base de cloud para emergencias

Este documento fue creado, pensando en que los lectores ya conocen del tema en cuestión, por ende no se profundiza cada tópico, pero si se establece claramente la secuencia de pasos a seguir para el despliegue del cloud base.

**<a href="#top">Volver al comienzo</a>**

## 2. Despliegue del Cloud y Configuración del Cloud</a>

La arquitectura definida para el despliegue de las aplicaciones sobre la plataforma computacional o cloud universitarios para situaciones de desastre de origen natural, se basa en la tecnología de containers y orquestación de containers. Containers que surgen con el objetivo de realizar el despliegue de aplicaciones independiente del sistema operativo, ya que encapsula las aplicaciones y sus dependencias en módulos portables que corren bajo el mismo núcleo de sistema operativo, evitando la necesidad de crear máquinas virtuales para aislar las aplicaciones. Además, la orquestación de containers permite coordinar de buena forma la escalabilidad horizontal, la replicación y la tolerancia a fallas de las aplicaciones desplegadas mediante containers, ver la Figura 2.1, en esta se puede apreciar el diagrama de arquitectura para el despliegue de las aplicaciones sobre la plataforma computacional.

![figura2_1](./img/herramientas/instrucciones-despliegue/figura2_1.png)

Figura 2.1: Arquitectura de despliegue de la plataforma computacional

Cabe destacar que los containers y el orquestador son tecnologías genéricas, de las cuales existen varias opciones para su implantación, en este caso puntual se ha seleccionado Docker Container para implantar la tecnología de container y Kubernetes para la orquestación de los containers, las principales razones por las cuales fueron escogidos son: que tienen un mayor respaldo de la comunidad de software libre, mejor documentación y de fácil integración.

Respecto del despliegue base que se plantea en este documento, este busca disponibilizar el cloud con todas las piezas claves que conllevan las características  deseadas para que una aplicación sea de utilidad en una situación de desastre de origen natural, que son: alta disponibilidad, tolerancia a fallas, escalable y portabilidad. La Figura 2.2 contiene los componentes de este despliegue base, a continuación de describen cada una de ellos:

- Master, es el componente principal disponibilizado por Kubernete para realizar las veces de orquestador de la plataforma, permite establecer el contacto con los cliente de los sistema y entre los servicios que componen el sistema.

- Image Repository o Repositorio de Imágenes (docker-registry, ya que usamos la tecnología de Docker), este componente es clave en la tolerancia a fallas y portabilidad de la plataforma, ya que contiene las Imágenes de los containers, es decir, la aplicación con todas sus dependencias sin ser desplegada. Al momento de querer desplegar la aplicación esta es encapsulada cómo un servicio,  el cual, puede interactuar con toda la plataforma.

- Data Repository o Repositorio de Datos, este componente hace referencia a las bases de datos que serán utilizadas por los sistemas, donde se espera que estas sean tolerantes a fallas, replicables y tengan alta disponibilidad, un ejemplo claro de este tipo de base de datos es mongodb, utilizada en algunos de los sistemas desarrollados por CITIAPS.

- Cache, este componente es clave para el manejo de estados internos en los sistemas (cuando es requerido), ejemplo: voluntario acepta tarea o voluntario finaliza tarea. La tecnología utilizada en esta plataforma es REDIS.

- Worker X, es el componente que encapsula las aplicaciones cuando estas son desplegadas en la plataforma , es decir, la aplicación se encuentra sin desplegar en el docker-registry, cuando esta quiere ser desplegada, se deben entregar todas las variables de entorno en un archivo YAML de configuración y se lanza el despliegue mediante instrucciones de Kubernete, finalmente la aplicación es encapsulada en un Worker, el cual mediante un servicio permite la interacción de la aplicación con el resto de la plataforma.

![figura2_2](./img/herramientas/instrucciones-despliegue/figura2_2.png)

Figura 2.2: Despliegue Base del Cloud


**Para ver el detalle de esta sección con los comandos a ejecutar <a href="files/informe-fondef-despliegue-cloud-2021.pdf">Descarga Informe completo</a>**

**<a href="#top">Volver al comienzo</a>**

## 3. Despliegue de Aplicaciones sobre el Cloud</a>

En esta sección se describe la instalación de Ayni, sistema para reclutamiento de voluntarios. Deben solicitar la versión Cloud de Ayni vía formulario (contempla 2 componentes lvc-ayni-fondef-bot-webhook y lvc-ayni-fondef-backend), que es una versión de pruebas, pero que servirá para que experimente con el despliegue en el cloud. Cabe destacar que el bot de Ayni es de Telegram, y para correr tus instancias debes crear un nuevo bot y especificar las credenciales del archivo YAML que se verá en el punto 3.2.

Ayni es una aplicación creada por CITIAPS, cuyo objetivo es encargarse de gestionar las acciones que deben realizar grupos de voluntarios, estos voluntarios son congregados mediante un “BOT”, implementado con el API disponibilizado por Telegram. Estos voluntarios se inscriben en la emergencia en curso e informan los requisitos con los que cumplen (físicos, habilidades, conocimiento, etc.), luego pasan por un proceso de selección automático. Finalmente, el voluntario puede participar en las tareas creadas producto de la emergencia. La arquitectura de este sistema está descrita en la Figura 3.1. y se distingue, un módulo de cache, dos Backend y un repositorio de datos.

![figura3_1](./img/herramientas/instrucciones-despliegue/figura3_1.jpg)

Figura 3.1: Arquitectura del sistema Ayni


**Para ver el detalle de esta sección con los comando a ejecutar <a href="files/informe-fondef-despliegue-cloud-2021.pdf">Descarga Informe completo</a>**

**<a href="#top">Volver al comienzo</a>**

## 4. Conclusiones</a>

En este documento se especificó la secuencia de pasos que permite desplegar la versión base del cloud interuniversitarios para emergencias.

**<a href="#top">Volver al comienzo</a>**
