---
title: Simulador de evacuaciones costeras - Viña del Mar     
description: Ejemplo de simulación para Viña del Mar
upper: /documentos/simulador-evacuaciones/descripcion
upperName: Descripción
origin: /herramientas/simulador-evacuaciones
originName: Simulador de evacuaciones
---


<!-- [Principal](index.html#ejemplos)

*   [Descripción del escenario](#descripcion)
*   [Animación](#animacion)
*   [Resultados](#resultados) -->

Descripción del escenario
-------------------------

<!-- [![](./img/herramientas/simulador-evacuaciones/vdm/mapa-sim.png)](ejemplos/vdm/sim-example/animacion.html)   -->
![](./img/herramientas/simulador-evacuaciones/vdm/mapa-sim.png)
Figura 1: Sector "Población Vergara" de la ciudad de Viña de Mar. La zona gris representa la zona inicial donde los agentes son asignados. Las áreas verdes representan las zonas seguras.
  
El escenario de evacuación de este ejemplo es el sector norte de la ciudad de Viña del Mar, de 4 km2. La zona inicial (color gris) donde se ubican los agentes abarca aproximadamente 4 km 2. Las zonas seguras (Z1, Z2, Z3 y Z4) están representadas por áreas de color verde. Se simulan 33000 personas, de los cuales, 30000 son Residentes y 3000 son Visitantes. Éstos últimos, cuando son creados, no conocen la ubicación de las zonas seguras. Desde el punto de vista de la simulación, se denominan _Visitantes tipo II_. Sin embargo, estos agentes pueden determinar una zona segura siguiendo a grupos de agentes que avanzan en la misma dirección. Cuando sucede esto, un Visitante tipo II se transforma en un _Visitante tipo I_.

<table class="pure-table pure-table-horizontal">
			    <thead>
			        <tr>
			            <th>Parámetro</th>
			            <th>Valor</th>
			            <th>Unidades</th>
			            <th>Observación</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Residentes</td>
			            <td>30000</td>
			            <td>personas</td>
			            <td>&nbsp;</td>
			        </tr>
			        <tr>
			            <td>Visitantes</td>
			            <td>3000</td>
			            <td>personas</td>
			            <td>&nbsp;</td>
			        </tr>
			        <tr>
			            <td>&sigma;</td>
			            <td>383</td>
			            <td>segundos</td>
			            <td>Disperción del tiempo de salida de las personas (Variable aleatoria Rayleigh).</td>
			        </tr>
			        <tr>
			            <td>Tiempo de simulación</td>
			            <td>3600</td>
			            <td>segundos</td>
			            <td>&nbsp;</td>
			        </tr>
			        <tr>
			            <td>Cantidad de experimentos</td>
			            <td>30</td>
			            <td>&nbsp;</td>
			            <td>&nbsp;</td>
			        </tr>
			        <tr>
			            <td>Grupo etáreo G0</td>
			            <td>17%</td>
			            <td style="white-space:nowrap">Porcentaje de personas</td>
			            <td>Según datos del censo 2017</td>
			        </tr>
			        <tr>
			            <td>Grupo etáreo G1</td>
			            <td>26%</td>
			            <td style="white-space:nowrap">Porcentaje de personas</td>
			            <td>Según datos del censo 2017</td>
			        </tr>
			        <tr>
			            <td>Grupo etáreo G2</td>
			            <td>43%</td>
			            <td style="white-space:nowrap">Porcentaje de personas</td>
			            <td>Según datos del censo 2017</td>
			        </tr>
			        <tr>
			            <td>Grupo etáreo G3</td>
			            <td>14%</td>
			            <td style="white-space:nowrap">Porcentaje de personas</td>
			            <td>Según datos del censo 2017</td>
			        </tr>
			    </tbody>
			</table>

Tabla 1: Parámetros de la simulación de evacuación.

<!--[Top](#)-->

Animación de la simulación
--------------------------

La animación de uno de los experimentos realizados se puede visualizar haciendo click en la Figura 2. Los códigos de color para los agentes se resumen en la Tabla 2.

<table class="pure-table pure-table-horizontal">
    <thead>
        <tr>
            <th>Tipo de agente</th>
            <th>Color</th>
            <th>Observación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Residente</td>
            <td>Rojo</td>
            <td>Representa a personas que conocen cómo llegar a las zonas seguras</td>
        </tr>
        <tr>
            <td>Visitante tipo II</td>
            <td>Azul</td>
            <td>Representa a personas en tránsito que no han logrado determinar cómo llegar a las zonas seguras</td>
        </tr>
        <tr>
            <tr>
                <td>Visitante tipo I</td>
                <td>Amarillo</td>
                <td>Representa a personas en tránsito  que han logrado determinar cómo llegar a las zonas seguras</td>
            </tr>
        </tr>
    </tbody>
</table>

Tabla 2: Códigos de color utlizandos en la animación de la evacuación.

<!-- [![](./img/herramientas/simulador-evacuaciones/vdm/mapa-anim.png)](ejemplos/vdm/sim-example/animacion.html)   -->

<video src="./video/simulador-evacuaciones/vdm.m4v" controls 
poster="./img/herramientas/simulador-evacuaciones/vdm/mapa-anim.png" >
    <a href="./video/simulador-evacuaciones/vdm.m4v">Descargar video</a>
</video>


<!--[Top](#)-->

Resultados
----------

<table class="pure-table pure-table-horizontal">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Valor</th>
            <th>Unidades</th>
            <th>Observación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Evacuados</td>  
            <td style="white-space:nowrap"> 32276 &plusmn; 15 (97.8%) </td>
            <td>personas</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>No evacuados</td> 
            <td style="white-space:nowrap"> 724 &plusmn; 15 (2.2%) </td>
            <td>personas</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="white-space:nowrap">50% evacuados</td>
            <td> 21.5 / 21.8 / 22.2 <br>(min / prom / max)</td>
            <td>min</td>
            <td>Tiempo necesario para evacuar al 50% de la población.</td>
        </tr>
        <tr>
            <td style="white-space:nowrap">75% evacuados</td>
            <td> 30.3 / 30.6 / 30.8 <br>(min / prom / max)</td>
            <td>min</td>
            <td>Tiempo necesario para evacuar al 75% de la población.</td>
        </tr>
    </tbody>
</table>

La Figura 3 muestra el porcentaje de personas evacuadas a medida que transcurre el proceso de evacuación.

![](./img/herramientas/simulador-evacuaciones/vdm/cumulative-evac.png)  
Figura 3: Cumulative porcentage of agents evacuated.

  
Además, los datos entregados por el simulador permiten determinar a qué distancia de las zonas de seguridad se ubican los agentes que no logran evacuar, diferenciados por tipo (Residente, Visitante tipo I, Visitante tipo II) y por rango etáreo. Los Visitante tipo I son aquellas personas que están de paso por la ciudad y logran determinar hacia dónde hay que evacuar y los Visitante de tipo II son los que están de paso y no logran determinar hacia donde dirigirse. Inicialmente, todos los agentes visitantes son del tipo II y según la dinámica de la evacuación y su interacción con el resto de los agentes, pueden pasar a ser el tipo I.

![](./img/herramientas/simulador-evacuaciones/vdm/dist-non-evac-residents.png)  
Figura 4: Distance to the centroid of safe area  
for non-evacuated Residents by Group Age.  
  

![](./img/herramientas/simulador-evacuaciones/vdm/dist-non-evac-visitT1.png)  
Figura 5: Distance to the centroid of safe area  
for non-evacuated Visitors (type I) by Group Age.  
  

![](./img/herramientas/simulador-evacuaciones/vdm/dist-non-evac-visitT2.png)  
Figura 6: Distance to the centroid of safe area  
for non-evacuated Visitors (type II) by Group Age.  
  

<!--[Top](#)-->