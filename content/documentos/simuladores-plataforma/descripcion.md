---
title: Plataforma de Simulación de Rendimiento de Aplicaciones para Desastres de Origen Natural
description: Una herramienta computacional para predecir el rendimiento de aplicaciones de una plataforma desplegada a nivel nacional
---

<!-- **Índice**   

1. [Contexto y Antecedentes Preliminares](#id1)
2. [Despliegue de Escenario Experimental](#id2)
3. [División de aplicaciones por patrón de diseño](#id3)
4. [Selección de características](#id4)
5. [Modelo de predicción por Fase de Comunicación](#id5)
6. [PLataforma de Simulación](#id6)
7. [Resultado preliminares - Validación](#id7)
8. [Bibliografía](#id8) -->



### Material Adicional
<a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>

## 1. Contexto y Antecedentes Preliminares

Los desastres naturales son situaciones extraordinarias que afectan a todo mundo [1,2], esto es apreciable desde diversas perspectivas, por ejemplo: vidas humanas perdidas y/o afectadas, pérdidas económicas, gasto público y privado en términos de recuperación y reconstrucción, etc.. Es por estos motivos que cualquier innovación que ayude en cualquiera de las etapas de un desastres natural (prevención, respuesta, recuperación y restauración), se cree será apreciada, y más aún, si es fácil de adoptar y adaptar respecto de la situación en curso.

Es bien sabido que Chile es uno de los países con tendencia a sufrir desastres naturales [3], que a lo largo de la historia cuenta con un gran número de este tipo de situaciones, y que de hecho fue afectado por el terremoto registrado más grande de la historia mundial [4]. Uno de los principales sucesos que afectan a la población en los desastres naturales es la destrucción o inhabilitación de infraestructura, que entorpece o anula las comunicaciones por desplome, caída o saturación de los servicios de telecomunicaciones [5, 6]. Esto fue notorio en el terremoto que afectó a Chile en Febrero del 2010, donde los niveles de insatisfacción de los usuarios respecto de los servicios de telecomunicaciones alcanzó un 57% [7]. Innovaciones como el desarrollo de sistemas computacionales que sean de utilidad en este tipo de situaciones, podrían ser de vital importancia en tareas tales como: la coordinación de equipos de trabajo, en la  administración y gestión de los recursos disponibles, en la coordinación de voluntarios en los periodos de respuesta, restauración y recuperación, etc. La dificultad que surge entonces radica en la complejidad en términos de la implementación y despliegue de una plataforma computacional que pueda albergar este tipo de sistemas, los cuales deben ser diseñados para tolerar los niveles de usos por parte de los usuarios, que en situaciones de estrés (ejemplo: un desastre de origen natural) aumenta drásticamente [5, 6].

Es por estos motivos que el principal objetivo de este documento es “obtener una Metodología que permita generar Modelos de Predicción de Rendimiento para aplicaciones desplegadas sobre una infraestructura distribuida y cuya principal misión es ser de utilidad en Situaciones de Desastre de Origen Natural”. La finalidad es apoyar a los equipos de desarrollo de sistemas computacionales, ya sea en las etapas preliminares cuando están realizando en análisis y diseño de una solución, o en etapas posteriores del desarrollo de sistemas, en la mejora de cierto componente, ya que haciendo uso de esta metodología podrían saber a priori (antes de implementar y desplegar) cual sería el rendimiento de la solución que están diseñando, basado en los niveles de usos que se esperan del sistema.

## 2. Despliegue de Escenario Experimental

Una de las primeras aristas abordadas en este proceso ha sido el despliegue del escenario experimental, ya que éste nos brinda el marco de trabajo y validación de los modelos de predicción generados, ver la Figura 2.1, donde muestra el escenarios experimental utilizado.

![figura2_1](./img/herramientas/simuladores-plataforma/figura2_1.png)

Figura 2.1, Escenario Experimental utilizado en el desarrollo de esta investigación.

**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>


## 3. División de aplicaciones por patrón de diseño

La subdivisión de las aplicaciones por patrón de diseño es una de las instancias más relevantes de la construcción de la metodología de predicción de rendimiento, ya que es en esta sección donde se establecen las características que deben cumplir las aplicaciones a estudiar y cómo deben ser desplegadas en la plataforma computacional.

**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>

### 4. Selección de características

Basado en la revisión de la literatura, ya sean artículos científicos o documentos técnicos de las tecnologías utilizadas, se han seleccionado un grupo de variables mediantes las cuales se medirá el rendimiento de las aplicaciones en la plataforma y que además cómo medio para validar el simulador, estas son:

- Por Sistema, Servicios de Sistemas y por los componentes de la arquitectura de despliegue (Docker, Pod, WorkerNode, MasterNode, VM, Server)
- Tasa de arribo
- Throughput
- Tamaño de colas
- Utilización (Core, Memoria, HDD) tiempo de utilización por ventanas
- Tiempo medio de servicio (esto sirve para identificar los componentes cuellos de botella)
- SLA, como el porcentaje de las peticiones respondidas bajo una cota de tiempo
- Cantidad de servidores (nodos) ocupados, ya que la maximizar la utilización de los nodos se traduce en eficiencia energética
- Latencia de comunicación
- Tiempo medio de recuperación (tolerancia a fallas)

Todas estas variables serán rescatadas durante el proceso de simulación en ventanas de tiempo x distantes, con dicha información se obtiene el real uso de los recursos obtenidos por el simulador y se estima el rendimiento del sistema.


**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>



### 5. Modelo de predicción por Fase de Comunicación

El punto de partida para determinar los modelos de predicción de rendimiento por fase de comunicación es la separación de las aplicaciones en capas, estableciendo claramente los actores de cada una de estas fases, como ya se ha mencionado estas fases son: Usuario-Frontend, Frontend-Backend, Backend-Repositorio de Datos. Como segunda medida, se identificaron cada uno de los flujos de las aplicaciones estudiadas, para determinar elementos comunes, que han ayudado a estandarizar y/o generalizar los modelos, ver Figura 5.1, que muestra el flujo del caso de uso “/Ayuda” de la aplicación Ayni, donde cualquier usuario del sistema puede revisar las distintas opciones disponibles. Cada aplicación tiene un promedio de 20 flujos, donde cada flujo por lo menos tiene 7 tareas, con lo cual, sumado a las variables que ayudan a determinar la predicción del rendimiento del sistema y los componentes de la arquitectura para el despliegue de los sistemas, conforma un escenario de grandes dimensione.s y posibilidades.


![figura5_1](./img/herramientas/simuladores-plataforma/figura5_1.jpg)
Figura 5.1, Sistema Ayni - Flujo del caso de uso “/Ayuda”

Los elemento comunes que se han identificado tienen directa relación con el componente que el sistema está utilizan para realizar sus tareas, y estos pueden ser de dos categorías: componentes internos, que se refiere a los recursos físicos o lógicos que son parte de la infraestructura donde están desplegados los sistemas (CPU, HDD, MEMORY, CORE, NETWORK), y componentes externos, que se refiere a aplicaciones externas o API que son utilizados para realizar alguna funcionalidad (Ejemplo: API de Telegram). Esto puede ser apreciado claramente en la Figura 5.1, que destaca los componentes utilizados por cada uno de los procesos o tareas de los flujos, además de realizar la separación por fase de comunicación.

La captura de datos para representar fielmente el comportamiento de los usuarios y el uso de los recursos computacionales utilizados por los sistemas ha sido obtenido mediante tres aristas, estas son:

- Pilotaje de aplicaciones, instancia en la que usuarios con experiencia en situaciones de desastre de origen natural han usado los sistemas, redefiniendo funcionalidades y validando el funcionamiento.

- Simulacro de desastres de origen natural, instancia que ha servido para capturar datos de trazas de movilidad y usos de los sistemas. Además, da la idea de cómo se comportaría la masa de usuarios en una situación de desastre de origen natural.

- Benchmark, se han realizado pruebas sintéticas de las aplicaciones, que han permitido analizar el comportamiento del sistema dependiendo de una alta demanda, de esta forma definir cuales son los parámetros de escalabilidad, replicación y tolerancia a fallas necesarios para que los sistemas creados sean de alta disponibilidad. Gracias a lo cual se han determinado elementos externos claves para construir sistemas que cumplan con las características antes mencionadas, estos son: Servidores DNS, Servidores Proxy, Servidores de Balance de Carga y Servidores de Cache.

De forma genérica los modelos de predicción de rendimiento de cada una de las fases de comunicación estará representado por un DAG (Grafo Acíclico Dirigido), cuyo nodos serán los elementos de procesamiento o uso de recursos (internos o externos) de cada aplicación y las aristas representarán el medio por el cual se están conectado dichos nodos, que puede ser un Bus de Conexión interna cuando se trata de aplicaciones desplegadas en un mismo servidor, o la Red, cuando se trata de comunicación entre aplicaciones desplegadas en distintos servidores, ver la representación en la Figura 5.2, donde muestran la abstracción de modelo de predicción de rendimiento o DAG del flujo “/Ayuda” de la aplicación Ayni, donde las actividades y su conjunto de trabajos representan los vértices, y las flechas azules representan las aristas o instancia de comunicación.

![figura5_2](./img/herramientas/.simuladores-plataforma/figura5_2.jpg)
Figura 5.2, GADs por Fase de comunicación de  “/Ayuda” - sistema Ayni


**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>


### 6. PLataforma de Simulación

La plataforma de simulación desarrollada tiene como objetivo simular el despliegues de una plataforma de aplicaciones para desastres de origen natural y permitir predecir el rendimiento que estas aplicaciones tendrán, ya sea en momentos de paz (donde no hay una situación extrema) y en los momentos de crisis, donde se sabe que el incremento de uso de aplicaciones crece exponencialmente. Dicha plataforma de aplicaciones está desplegada en un ambiente heterogéneo de clusters de servidores distribuidos a nivel nacional. En el diagrama, de la Figura 6.1, se plasman los componente generales de la plataforma.

![figu.ra6_1](./img/herramientas/simuladores-plataforma/figura6_1.png)

Figura 6.1, componentes generales de la plataforma de simulación

En la Figura 6.2 se realiza una especificación detalladas del modelo presentado en la Figura 6.1, donde se destaca la presencia de los parámetros de entrada al simulador, el simulador y una serie de sistemas que van moldeando los datos resultantes de la simulación hasta poder llegar a gráficos estadísticos y mapas de calor que permiten apreciar el comportamiento y rendimiento de los distintos componentes simulados, como por ejemplo: el uso de CPU, los mensajes recibidos, los mensajes enviados, el flujo de datos por la red, etc. Estas aplicaciones y parámetros se describen a continuación. Cabe destacar que la base de datos utilizada para almacenar los datos es mongodb, una base de datos noSql, orientada a documentos  y colecciones de documentos, con lo cual permite una gran versatilidad y adaptabilidad en el uso y manejo de los datos resultantes de la plataforma de sim.ulación.

![figura6_2](./img/herramientas/simuladores-plataforma/figura6_2.png)

Figura 6.2, Plataforma de simulación

**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>


### 7. Resultado preliminares - Validación

En este apartado se describen los resultados preliminares obtenidos y  la forma de validación de los componentes testeados. Se han realizado miles de pruebas sobre cada sistema real, el objetivo era determinar los puntos de saturación de cada componente y  determinar la información de configuración para el simulador. Las pruebas consisten en la ejecución de cada uno de los principales flujos de cada uno de los sistemas, en la Tabla 1 y 2, se muestra el resumen de los resultados de estas pruebas sobre Ayni y Rimay, respectivamente, donde el tiempo promedio de las pruebas era entre 2 a 4 minutos y considerando que API-Externa puede ser Telegram o Facebook.

Tabla 1, resumen de resultados sobre sistemas reales sobre Ayni

| Nombre del Flujo        | Cant. Actividades | Cant. Pruebas | bot | backend | db | cache | API Externa |
|-------------------------|-------------------|---------------|-----|---------|----|-------|-------------|
| Crear emergencia        | 1                 |     300000    |     |    s    |  s |       |             |
| Crear tarea             | 1                 |     300000    |     |    s    |  s |       |             |
| Crear voluntario        | 1                 |     300000    |     |    s    |  s |       |             |
| Ayuda                   | 1                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Cancelar                | 1                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Inscripción             | 2                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Desinscripción          | 2                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Emergencias activas     | 4                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Mis emergencias activas | 4                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Mis tareas activas      | 2                 |     20000     |  s  |    s    |  s |   s   |      s      |
| Voluntario acepta tarea | 1                 |     300000    |     |    s    |  s |       |             |
| Actualiza estado tarea  | 1                 |     300000    |     |    s    |  s |       |             |


**Para ver el detalle de esta sección <a href="./docs/herramientas/informe-fondef-simulador-2021.pdf">Descarga Informe completo</a>**

<top-link></top-link>


### 8. Bibliografía

[1] Aon-plc. 2016 annual global climate and catastrophe report. http://thoughtleadership.aonbenfield.com/Documents/20170117-ab-if-annual-climate-catastrophe-report.pdf,2016. Disponible 2021-03-26.

[2] CEPCHILE. Estudio nacional de opinión pública n°33 tercera serie junio-julio 2010, Ministerio de Transportes y Telecomunicaciones, Subsecretaría de Telecomunicaciones, Chile. https://www.cepchile.cl/cep/site/artic/20160304/asocfile/20160304095248/DOC\_encCEP\_juni-jul2010.pdf, 2010. Disponible 2021-03-26.

[3] D. Guha-Sapir, P. Hoyois, P. Wallemacq, and R. Below. Annual disaster statistical review 2016: The numbers and trends, brussels, 2016. Disponible 2021-03-26.

[4] ITU.Technical report on telecommunications and disaster mitigation, international telecommunication union.https://www.itu.int/en/ITU-T/focusgroups/drnrr/Documents/Technical_report-2013-06.pdf, 2016. Disponible 2021-03-26.

[5] MIC. Maintaining communications capabilities during major natural disasters and other emergency situations, ministry of internal affairs and communications, japan.http://www.soumu.go.jp/main_content/000146938.pdf, 2011. Disponible 2021-03-26.

[6] USGS. 20 largest earthquakes in the world, usgs, science for changing world, usa.https://earthquake.usgs.gov/earthquakes/browse/largest-world.php, 2012. Disponible 2021-03-26.

[7] WorldRiskReport. Analysis and prospects 2017, 2017. . Disponible 2021-03-26.

[8] Marzolla, M. (2004, June). libcppsim: a Simula-like, portable process-oriented simulation library in C++. In Proc. of ESM (Vol. 4, pp. 222-227).

<top-link></top-link>
