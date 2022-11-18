<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 La guianza como un servicio 

    p.mb-3  El guía de turismo desde el ámbito contable es una empresa unipersonal que presta un servicio, es decir sus usuarios no adquieren nada físico, ni duradero, sino un derecho de uso o disfrute de una experiencia, por un tiempo determinado. De la misma manera ocurre en un restaurante, una vez el cliente ha gastado su dinero no tiene la posibilidad de mostrar físicamente lo que ha obtenido, ya que lo que ha recibido es atención, bienestar, instalaciones, alimentos, experiencia, de esta manera es importante comprender: 
    
    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        SlyderA(tipo="b")(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-center.p-3
            .col-lg-12
              img(src="@/assets/curso/images/tema2/img_1_1.svg").mb-3
          .row.justify-content-center.align-items-star.p-3
            .col-lg-12
              img(src="@/assets/curso/images/tema2/img_2_1.svg").mb-3

    p.mb-3 Los servicios tienen un componente psicológico muy importante, <b>la percepción que el cliente tenga del dinero gastado, va a ser un factor decisivo para que vuelva y se fidelice o no vuelva a tomar su servicio </b>(Milio Balanzá, I. 2004). 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-3.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 La guianza como servicio turístico, se compone de actividades identificables, intangibles y perecederas donde el recurso humano es el principal factor, que realiza la venta de información o la realización de alguna actividad física o administrativa a favor del cliente.  El objeto principal es satisfacer las necesidades o deseos de los usuarios. El producto final se resume en un reporte, donde el costo del papel es insignificante en comparación al valor agregado que tiene intrínsecamente la información que contiene (Choy Zevallos E. 2012).

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 La guianza como servicio turístico, se compone de actividades identificables, intangibles y perecederas donde el recurso humano es el principal factor, que realiza la venta de información o la realización de alguna actividad física o administrativa a favor del cliente.  El objeto principal es satisfacer las necesidades o deseos de los usuarios. El producto final se resume en un reporte, donde el costo del papel es insignificante en comparación al valor agregado que tiene intrínsecamente la información que contiene (Choy Zevallos E. 2012)
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema2/img_3.png' alt='', style="width:400px; display:block; margin:-2rem 5rem ;").mb-3

    p.mb-5 En la legislación colombiana las principales funciones del guía por la que devenga ingresos son:


    .row.justify-content-center.align-items-star.mb-3
      .col-lg-9.lg-0.mb-3
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Orientar:")
            h4 Orientar:
            p.mb-0 Suministrar al turista o pasajero, las informaciones o puntos de referencia generales sobre diversos aspectos relacionados con su viaje, de forma clara, precisa, breve y específica.

          .tarjeta.back-tab.px-5.py-4(titulo="Instruir:")
            h4 Instruir: 
            p.mb-0 La función de enseñanza, que imparte al usuario a través de los atractivos turísticos, sobre diversidad de temas desarrollados en forma suficiente, veraz y completa, advirtiendo riesgos asociados con la actividad turística.

          .tarjeta.back-tab.px-5.py-4(titulo="Asistir: ")
            h4 Asistir: 
            p.mb-0 Ayuda oportunamente, de manera eficiente y suficiente, al turista en diversas situaciones o eventualidades que se presenten durante el viaje, procurando la mayor seguridad, satisfacción y bienestar posible (Resolución número 135 de 2016).
  
          .tarjeta.back-tab.px-5.py-4(titulo="Conducción: ")
            h4 Conducción: 
            p.mb-0 Encaminar al usuario con seguridad y eficiencia por los atractivos turísticos, en desarrollo del plan de viaje.
            ltimo dígito es el dígito de comprobación.
      .col-lg-3.lg-0
        img(src='@/assets/curso/images/tema2/img_4.svg'  alt='')

    p.mb-5 Para ejecutar el servicio, los alcances de la función de conducción que tiene el guía se ramifican a la administración de recursos del contratante y los propios.  Como lo describe la normatividad el guía debe prestar su servicio de manera eficiente, es decir, debe tener la capacidad de disponer de los recursos humanos, financieros y físicos para conseguir la satisfacción de los usuarios y el contratante frente al servicio guiado. 

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-6.m-top.mb-0.cs
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6.lg-0
        img(src='@/assets/curso/images/tema2/img_5.png'  alt='')
      .col-lg-6.lg-0
        .jumbotron-3.p-5.h-100
          p.mt-4 En efecto al disgregar la coordinación que ejerce un guía, se aprecia de manera más clara sus <b>funciones administrativas, por un lado, la responsabilidad que recibe al tener administrar dinero, equipos, materiales y personal de apoyo asignado por el contratante y por otro lado el gestionar sus propios recursos</b> en la medida que debe hacer el cálculo del precio del servicio (ver figura 1), recaudar los pagos que le correspondan y disponerlos para su beneficio.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span <i>Detalle de las funciones administrativas del guía</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .jumbotron-11.p-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              .jumbotron-12.p-4
                h3 A partir de las características de servicio 
                ul.lista-ul--color.mt-3
                  li
                    i.vineta(data-aos="fade-up") 
                    p.mb-0 Presupuestar los recursos financieros, humanos y físicos para ejecutar el servicio guiado. 
                  li
                    i.vineta(data-aos="fade-up") 
                    p.mb-0 Administrar los recursos y reportar su distribución al contratante.
            .col-6.col-lg-2
              img(src='@/assets/curso/images/tema2/fig_1.svg')
            .col-lg-5
              .jumbotron-12.p-4
                h3 Calcular las tarifas servicios guíados
                ul.lista-ul--color.mt-3
                  li
                    i.vineta(data-aos="fade-up") 
                    p.mb-0 Debe acordarse previamente con el contratante a partir de lsa carcteristicas del servicio  
          .row.justify-content-center.align-items-center
            .col-lg-5
              .jumbotron-13.p-3.mt-3
                p.mb-0.text-center Administrar recursos del contratante
            .col-lg-2
            .col-lg-5
              .jumbotron-13.p-3.mt-3
                p.mb-0.text-center Administración y gestión de recursos propios 
        .row.mt-3
          .col-lg-12
            .jumbotron-14.p-2
              p.mb-0 Nota. Imagen tomada del Viceministerio de turismo de Colombia (s.f.). 
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 





















      


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
