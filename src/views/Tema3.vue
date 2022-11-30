<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Administración de recursos del contratante

    p.mb-3 La participación del guía turístico en la elaboración de los presupuestos que se deben tener presente en los recorridos o los diferentes servicios que se le ofrecen, dado que de esta manera se le adhiere la responsabilidad brindada por el contratante y es quien se debe encargar de realizar dichos pagos a las entidades o servicios que se le ofrecen al turista, para ello se debe observar. 

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-lg-12.lg-0
        .cajon.color-custom-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-5.col-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema3/ico_1.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;").mb-3
            .col-lg-10(data-aos="fade-right")
              p.mb-3 <b>¿Qué es un presupuesto?</b>

              p.mb-3 La palabra se compone de dos raíces latinas: “pre” que traduce antes de o delante de y “suponer” que traduce hacer supuesto, hecho formado, por tanto, presupuesto antes de lo hecho o supuesto previamente.

              p.mb-0 El servicio guiado, hace referencia en unidades monetarias (dinero, en el caso de pagos proveedores cuyas estimaciones están basadas en métodos, en la experiencia y que con la planeación, coordinación y control de todas las funciones).

    p.mb-5 El presupuesto es parte fundamental del plan de acción, en el formato puede ser un anexo o incluirse dentro del mismo. Para la elaboración del presupuesto es necesario realizar las siguientes actividades, según Vinicio (2009) citado por Sena (2018):

    .row.justify-content-around.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_2.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-7
            .p-3
              p.text-center.mb-5 Enumerar todas las actividades que se van a realizar y puedan requerir de recursos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_3.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-7
            .p-3
              p.text-center.mb-4 Describir de forma detallada los recursos necesarios para cada actividad, incluyendo materiales, equipos y recursos humanos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_4.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-7.p-1
            .p-2           
              p.text-center.mb-4 Clasificar los requerimientos por rubros, agrupándolos por categorías.
              br

    p.mb-3 En el caso del tercer grupo de actividades, se pueden tener en cuenta, las siguientes:

    .row.justify-content-center.align-items-center.fondo-3.mb-3
      .col-6.col-lg-4.lg-0
        img(src='@/assets/curso/images/tema3/img_1.png'  alt='')
      .col-lg-6.lg-0
        ul.lista-ul--color.mt-3
          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 #[strong.color-text Servicios turísticos:] son los servicios que se le ofrecen al turista como transporte, alojamiento, alimentación, atractivos, entre otros.
          hr 
          li
            i.vineta(data-aos="fade-up") 
            p.mb-0  #[strong.color-text Servicios personales:] incluyen los pagos de personal que participarán en el recorrido, como sueldos y honorarios, los cuales pueden ser calculados por días o por horas.
          hr 
          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 #[strong.color-text  Equipos:] se incluyen los equipos que se van a manejar.
          hr 
          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 #[strong.color-text Insumos y materiales:] como folletos, fichas, entre otros.
          hr 
          li
            i.vineta(data-aos="fade-up")
            p.mb-0 #[strong.color-text Otros gastos:] puede contemplarse los imprevistos. 

    p.mb-3 Los ítems dependen de las características del servicio, puntualmente número de pasajeros y servicio incluidos.

    p.mb-3 A continuación se puede revisar un ejemplo del formato para administración de presupuesto.  

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        .tabla-a.color-acento-botones.mb-5
          table(style="min-width:1042px;").tg
            thead
              tr.th-1
                th.tg-0lax(colspan='9')
                  span(style='background-color:#D9D9D9') 
                  br
                  h3.text-center.text-white <b>Encabezado con el logo de la empresa <br> Nombre del servicio <br>Fecha </b>
                  span(style='background-color:#D9D9D9') 
            tbody
              tr.th-2
                td.text-center.text-white.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Detalle</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.text-white.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') Unidades escripción <br>/fecha de gasto
                  span(style='background-color:#D9D9D9') 
                td.text-center.text-white.tg-0lax(rowspan='2')(colspan='2')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') <b>Valor recibido</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.text-white.tg-0lax(rowspan='2')(colspan='2')
                  span(style='background-color:#D9D9D9')            
                  span(style='color:black') <b>Valor pagado</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.text-white.tg-0lax(rowspan='2')(colspan='3')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Saldo (a favor o en contra)</b>
                  span(style='background-color:#D9D9D9') 
              tr.th-2
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center Alojamiento
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-3
                td.tg-0lax
                  br
                  p.text-center Alimentación
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center Atractivos, entradas
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-3
                td.tg-0lax
                  br
                  p.text-center Honorarios de equipo de trabajo
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center Observaciones
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-3
                td.tg-0lax
                  br
                  p.text-center Elaborado por
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
             


    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-lg-12.lg-0
        .cajon.color-custom-2.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-3.col-lg-1(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema3/ico_5.svg').mb-3
            .col-lg-11(data-aos="fade-right")
              p.mb-3 <b>Tener en cuenta:</b>
              p.mb-0 <b>1.</b> El formato de presupuesto debe ir soportado con recibos, facturas, recibos de caja.
              p.mb-0 <b>2.</b> El contratante quien provee el dinero, debe dar un comprobante de egreso y en la contabilidad de la empresa debe dejarse constancia del desembolso de pago a terceros, en ningún momento debe ser registrado como parte de los honorarios, para efectos de impuestos que deberá pagar posteriormente el guía.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6.lg-0(data-aos="fade-left")
        .jumbotron-4.p-5
          p.mb-0 El guía de turismo, en su función de orientación y asistencia, puede asesorar respecto a diferentes servicios y apoyar a la agencia de viajes o al contratante a calcular el presupuesto que requiere para realizar determinadas actividades. Sin embargo, no se convierte en proveedor de dichos servicios (alojamiento, transporte, alimentación), tampoco en intermediación comercial, porque estaría incurriendo en una falta ética al actuar fuera de su ámbito profesional delimitado por cuatro funciones: conducir, asistir, orientar e instruir.  
      .col-lg-6.lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_2.png'  alt='')



























</template>

<script>
export default {
  name: 'Tema3',
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
