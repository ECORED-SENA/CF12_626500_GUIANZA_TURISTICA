<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Conceptualización del mercado turístico

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12(data-aos="fade-right")
          p.mb-3 El mercado en la actualidad abarca los intereses y necesidades de la población, atendiendo en su beneficio y posibilidades que se ofrece, de esta manera para la OMT (1998) citado por González Molina (2016) el mercado como punto de confluencia de factores de las relaciones económicas se compone por elementos para su estudio y comprensión: 

    .row.justify-content-center.align-items-star.fondo-1.mb-3
      .col-6.col-lg-3.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_1.png'  alt='')
      .col-lg-9(data-aos="fade-left") 
        .jumbotron.p-4.mb-3
          .h4 La Oferta
          p.mb-3 Centrada en los emprendedores, vendedores y sus negocios dedicados a la venta de servicios y productos con los cuales se espera, dar la satisfacción de los turistas. 
          p.mb-0 La oferta está relacionada a los componentes de:  equipamientos e instalaciones como hoteles, restaurantes, casinos, información turística, entre otros y  los atractivos turísticos como los sitios naturales, museos, fiestas religiosas, industrias, concursos, la cultura, entre otros.
        .jumbotron-1.p-4.mb-1
          .h4 La Demanda
          p.mb-3 El conjunto de clientes o posibles clientes también llamados consumidores de los bienes y servicios turísticos. 
          p.mb-0 Centro de atención que se aprovecha de los intereses. necesidades o solicitudes que, en el caso de la guianza, está relacionado con cada uno de los sitios que visitan y como allí estos intereses y necesidades generan ventas.

    .jumbotrom-x.mb-2(data-aos="fade-left") 
      .row.justify-content-center.align-items-star
        .col-lg-12.mb-3
          p.mb-3 Retomando el mercado turístico, es decir, las relaciones económicas que se dan entre quienes ofrecen los servicios turísticos y los usuarios,  es sensible a diferentes factores que van desde la comercialización del producto, las tecnologías disponibles y la competencia, la disponibilidad de la infraestructuras y los servicios complementarios, el sistema monetario, los controles sanitarios (restricciones por pandemia), además la situación sociopolítica del destino, la seguridad y el riesgo de las personas durante el viaje. (Romero Ternero, M. J., 2018).

      .row.justify-content-center.align-items-center
        .col-12.col-md-8.col-lg-10.col-xl-10.mb-3(data-aos="fade-left")
          p.mb-3 Los anteriores conceptos aplicados al ejercicio del guionaje están interrelacionados con otros a tener en cuenta:
            ul.lista-ul--color.mt-3
              li
                i.vineta(data-aos="fade-up") 
                p.mb-0 #[strong Temporadas.] Se dice que, en el siglo XXI, este concepto de periodo o ciclo mayor a una semana y menor a un año, en donde se realizan actividades específicas, tiende a desaparecer;  sin embargo, y de acuerdo con Milio Balanzá, (2004), para comprender las razones por las que existen las temporadas definidas en este caso para el turismo alta, media y baja, es necesario conocer las características de la demanda, como se comparten a continuación:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-5 La elasticidad
            p.mb-3 Hace referencia a la hipersensibilidad en los movimientos de compra turística, por lo tanto, hay una concentración de la demanda en determinados momentos del año, para caer posteriormente a niveles de inactividad.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_2.png").mb-3
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-5 La estacionalidad
            p.mb-3 Consiste en períodos de actividad e inactividad de compra - venta turística en los que los agentes climáticos intervienen en la formación de períodos de alta y baja temporada. 
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_3.png").mb-3

        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-5 La irracionalidad
            p.mb-3 Es propia de toda actividad de compra-venta de bienes que son de lujo. Sin embargo, con el paso del tiempo el turismo se está convirtiendo en servicio de primera necesidad..  
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_4.png").mb-3

        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-5 Potencialmente universal. 
            p.mb-3 Esta característica se refiere a que todos los hombres al menos potencialmente son turistas, por tanto, la demanda turística abarca a toda la humanidad. 
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_5.png").mb-3

    p.mb-3 Otro factor a tener en cuenta, es el de la clasificación,  como lo explica González Molina (2016), la demanda turística se divide en cuatro grandes grupos: 

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-12.col-md-8.col-lg-12.col-xl-12.mb-4
        ImagenInfografica.color-acento-contenido.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema1/info.svg')
              
          .tarjeta-blanca.p-3(x="5%" y="84%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-sm-8.mb-lg-0
                h4.mb-2 La demanda diferida:
                p.mb-0 Es aquélla que no ha podido viajar por motivos del entorno (catástrofes, terrorismo, pandemias, entre otros) o de la oferta disponible (no existen plazas de alojamiento, por ejemplo). 

          .tarjeta-blanca.p-3(x="24%" y="56%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0
                h4.mb-2 La demanda potencial: 
                p.mt-2 Es decir, personas que viajarán cuando sus circunstancias personales mejoren. 

            
          .tarjeta-blanca.p-3(x="73%" y="75%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                h4.mb-2 La demanda no efectiva: 
                p.mb-0 Sector de población que no viaja por algún motivo. 

          .tarjeta-blanca.p-3(x="47%" y="8%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0
                h4.mb-2 La demanda efectiva:
                p.mt-2 Número actual de personas que participan en la actividad turística, es decir, que efectivamente viajan. Este grupo es el que se analiza y se mide en las estadísticas. 
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-12(data-aos="fade-left") 
        .jumbotron-2.p-4.mb-3
          p.mb-0 En cuanto al gasto turístico, según la OMT citada por Romero Ternero (2018), es un concepto relevante, porque hace referencia a lo que el consumidor está dispuesto a gastar para y en su viaje. Los principales son: alojamiento, gastronomía, medios de transporte, actividades culturales y lúdicas, regalos y compras.

    .row.justify-content-center.align-items-star.fondo-1
      .col-lg-10(data-aos="fade-left") 
        p.mb-0 A su vez el gasto turístico depende de los factores que condicionan la decisión de viajar, como lo explica González Molina (2016), estos son: 

    .jumbotron-18
      .row.align-items-center.justify-content-center.p-4
        SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_1.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-tarjeta-slyder-2
              .p-4.text-ce
                h4.text-center Económicos:
                p.text-center Comparativa de los precios en origen y en destino, política fiscal (impuestos) y controles de gasto en turismo, tipos de cambio. 



          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_2.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-tarjeta-slyder-2
              .p-4
                h4.text-center Motivacionales:
                p.text-center Condicionantes socioculturales, tiempo de ocio, estilos de vida, costumbres, creencias religiosas y políticas, factores demográficos.



          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_3.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")

            .tarjeta.color-tarjeta-slyder-2
              .p-4
                h4.text-center Contextuales:
                p.text-center  Situación política, conflictos, guerras, riesgo de inestabilidad, adecuación de infraestructuras.

          
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_4.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-tarjeta-slyder-2
              .p-4
                h4.text-center Marketing:
                p.text-center Información sobre productos y publicidad de estos.



          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_5.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-tarjeta-slyder-2
              .p-4
                h4.text-center Calidad:
                p.text-center  Satisfacción de las necesidades concretas, condiciones técnicas de los productos (condiciones aseo y mantenimiento de transporte y alojamiento) y relación calidad precio. 


          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_6.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")

            .tarjeta.color-tarjeta-slyder-2
              .p-4
                h4.text-center Expectativas:
                p.text-center  Expectativas, comparabilidad, fidelidad, percepción, conservación de los recursos patrimoniales, accesibilidad, singularidad, entre otros.


    p.mb-3 Otro elemento del mercado que el guía debe reconocer para ejercer sus funciones de asistencia y orientación es la oferta, la cual está determinada por ciertos factores como lo explica González Molina (2016) y Romero Ternero (2018): 

    .row.justify-content-evenly.align-items-star.p-2
      .col-lg-6(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Infraestructura.")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Corresponde al conjunto de bienes y servicios con que cuenta el destino y facilita el acceso, como, por ejemplo:  el sistema de transportes, las carreteras, las comunicaciones y lo que corresponde con lo requerido en el destino para hacer satisfactoria la estadía como la energía, la sanidad, el agua potable.
          .row.justify-content-center.align-items-center(titulo="Superestructura")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Organizaciones especializadas tanto públicas como privadas que conforman un sistema y que optimizan, potencian y cambian sus objetivos y maneras de funcionar para que el turismo cuente con actualización permanente y soporte legal, administrativo, comercial;  también se ejerce la supervisión de la calidad de los productos y servicios turísticos y las certificaciones con reconocimiento mundial. 
          .row.justify-content-center.align-items-center(titulo="Espacio Geográfico.")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Es donde tiene lugar el encuentro de la oferta y la demanda. 
          .row.justify-content-center.align-items-center(titulo="Los Operadores de Mercado.")
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Empresas con la función principal de mediar en la interacción entre la oferta y la demanda, como:  las agencias de viajes, las compañías de transportes, guías de turismo, establecimientos gastronómicos, alojamiento, entretenimiento, entre otros.
          .row.justify-content-center.align-items-center(titulo="La oferta complementaria. ")
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Abarca los productos y servicios que demandan los turistas mientras disfrutan de su estancia en el lugar de destino.
          
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_6.svg' alt='', style="width:500px; display:block; margin:auto 0;").mb-3


    p.mb-0  El guía con los conocimientos y suficientes datos que incluyen los precios ofrecidos por las empresas que hacen parte de la competencia directa, tiene la oportunidad de adecuar los propios valores de su trabajo, puesto que el cliente frente a servicios similares, comparará para escoger el mejor, de ahí la importancia de establecer factores de valor agregado que fidelicen a sus clientes con garantía de ética y competitividad. Además, el guía requiere conocer el mercado para realizar una adecuada proyección de sus servicios y establecer las estrategias que se pueden manejar según las distintas temporadas y el momento de vida en el que se encuentre el producto/servicio así al determinar estratégicamente el precio de su servicio, el cliente se motiva a adquirirlo  (Milo Balanza, 2004).



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
