---
title: DEMPS
description: Simulador de evacuaciones masivas en zonas costeras
origin: /herramientas/simulador-evacuaciones
originName: Simulador de evacuaciones
---

Descripción
-----------

El simulador desarrollado es un simulador basado en agentes, denominado Disaster Evacuation and Mobility Patterns Simulator (DEMPS), que modela el comportamiento de personas en situaciones de evacuación masiva en áreas costeras. Los habitantes de la zona de estudio se modelan con dos tipos de agentes: Residentes y Visitantes. Cuando la evacuación se produce, los agentes Residentes seleccionan la ruta más rápida a las zonas seguras, utilizando el algoritmo de Dijkstra \[1\] implementado en la libraría Open Source Routing Machine (OSRM) \[2\]. Los agentes Visitantes se clasifican inicialmente como Visitantes Tipo II, que caminan en forma aleatoria, sin rumbo definido. Estos agentes pueden, eventualmente, seguir a grupos de Residentes, tranformándose en Visitantes Tipo I. Ambos tipos de agentes se mueven en un espacio continuo que es construido en base a datos geográficos previos. Cada agente puede pertenecer a uno de los cuatro grupo etareos que están definidos. La distribución de agentes en estos grupos se basa en datos sensales. Los movimientos e interacciones de los agentes incluyen los detalles especificados en el Social Force Model (SFM) \[3\] y el Required Safe Egress Time Evacuation Model (RSET) \[4\]. Además, cada agente toma en cuenta la densidad de personas en torno a él para determninar su velocidad. Si hay personas que están adelante, dentro de su área de covertura, el agente disminuye su velocidad. Finalmente, el simulador entrega reportes sobre variables de interés definidas como la distancia hacia las zonas seguras separados por rangos etáreos. Esto puede ser útil para quienes toman las decisiones, ya que pueden brindar ayuda especial en estos puntos críticos a las personas que no pueden llegar a zonas seguras.

1.  W Dijkstra, E. (1959). A note on two problems in connection with graphs. Numerische Mathematik, 1, 269–271.
2.  Luxen, D., & Vetter, C. (2011). Real-time routing with OpenStreetMap data. GIS: Proceedings of the ACM International Symposium on Advances in Geographic Information Systems. https://doi.org/10.1145/2093973.2094062
3.  Chen, X., Treiber, M., Kanagaraj, V., & Li, H. (2018). Social force models for pedestrian traffic–state of the art. Transport Reviews. https://doi.org/10.1080/01441647.2017.1396265
4.  Babrauskas, V., Fleming, J. M., & Don Russell, B. (2010). RSET/ASET, a flawed concept for fire safety assessment. Fire and Materials. https://doi.org/10.1002/fam.1025



Modelo del simulador
--------------------

El simulador basado en agentes implementado utiliza el paradigma de avance de tiempo a través de intervalos de tiempo discretos. El ciclo de vida de los agentes se basa en el modelo RSET, el que consiste en dos fases: a) fase de respuesta, donde el agente espera un tiempo aleatorio El tiempo aleatorio se modela a través de una distribución Rayleigh de parámetro σ, emulando el proceso psicológico que significa preparse para el proceso de evacuación; y b) fase de movimiento, donde el agente se traslada hacia el lugar que decidió en la fase anterior. El ambiente se modela como un espacio 2D continuo. Para reducir los costos de computación para encontrar los vecinos de un agente determinado, el ambiente de discretiza en celdas de tamañoño 10 m X 10 m. Cada celda tiene una lista actualizada con los agentes que se encuentran de ella. Cuando un agente solicita la lista de vecinos, el ambiente envía la lista de agentes que están dentro de la celda del agente y de las celdas que se encuentran en una vecindad de Moore. Además, el ambiente ajusta la posición inicial de los agentes para que en t = 0 todos los agentes se ubiquen en en las calles. Contiene la ubicación de áreas, calles y rutas seguras de la ciudad. En cada paso de la simulación, calcula la zona segura más cercana a cada agente residente y actualiza los estados de evacuación de los agentes. Es decir, el entorno alerta a los agentes si se encuentran dentro de una zona segura o no y actualiza su tiempo de evacuación.

![Figura 1](./img/herramientas/simulador-evacuaciones/sim-model.png)

_Figura 1. Modelo Simulador de evacuaciones_



Implementación del simulador
----------------------------

El simulador propuesto se implementó en C++14 utilizando un modelo de programación basada en agentes del tipo ad-hoc con el apoyo de la librería OpenMP (https://www.openmp.org) para paralelizar. Las principales clases se muestran en la Figura 2b. La clase Simulator es la que ejecuta la simulación. La librería OSRM (Open Source Routing Machine, http://project-osrm.org) permite calcular los desplazamientos de los agentes dentro del mapa, el que es obtenido desde la plataforma OpenStreetMap (http://www.openstreetmap.org). La librería GeographicLib (https://geographiclib.sourceforge.io) permite realizar conversiones entre coordenadas geográficas WGS84 (World Geodetic System 1984), utilizadas por los mapas, a coordenadas cartesianas ENU (East, North, UP), que es el sistema utilizado por el simulador. Finalmente, la librería CGAL (Computational Geometry Algorithms Library, https://www.cgal.org) se utiliza para determinar posición de agentes dentro de las zonas que son representadas a través de polígonos y generar coordenadas dentro de las zonas iniciales y de encuentro. Las otras clases tales como Environment, Zone y Route implementan los componentes del modelo mostrado en la Figura 1.

La simulación se ejecuta en seis etapas (Figura 2a): (1) Al principio se carga el archivo de inicialización para configurar los parámetros de la simulación. (2) Luego, se crean e inicializan el ambiente, las áreas o zonas y rutas en base a datos de archivos que especifican las áreas geográficas a simular, las áreas iniciales donde se crean los agentes y las áreas seguras donde deben llegar las personas. (3) Después se crean los agentes, los que son colocados en forma aleatoria en las zonas iniciales, en base a los atributos especificados en el archivo de configuración respectivo. (4) Se ajusta la posición de los agentes y se mueven hacia las calles del mapa. (5) Se realiza la simulacion, donde que ejecuta el ciclo de vida de cada agente en forma repetitiva hasta un tiempo de simulación determinado, utilizando un enfoque de avance de tiempo por intervalos de tiempos discretos. (6) Una vez terminada la simulación, las trazas de movimiento de las personas, tiempos de evacuación, ocupación de las zonas seguras, etc, se almacenan en archivos de texto que pueden ser utilizados por aplicaciones de visualización externos.

![Figura 2](./img/herramientas/simulador-evacuaciones/global-scheme.png)

_Figura 2. Simulador de evacuaciones  - Diagrama general_

<section class="full-width dark-background mt-4">

Ejemplo de uso
--------------

Para mostrar algunos resultados que se pueden obtener con el simulador, se presentan tres casos de estudio: [Valparaíso](/documentos/simulador-evacuaciones/valparaiso), [Viña del mar](/documentos/simulador-evacuaciones/vdm) e [Iquique](/documentos/simulador-evacuaciones/iquique). 

</section>


<section class="full-width light-background final-section">

Documentos
----------

* [Informe final](./docs/herramientas/reporte-demps-final.pdf) 
* [Manual de Instalación](./docs/herramientas/Manual-Instalacion-DEMPS.pdf) 
* [Manual de Uso](./docs/herramientas/Manual-Usuario-DEMPS.pdf)

</section>

