<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Administración y gestión de recursos propios

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-5.lg-0(data-aos="fade-right")
        .jumbotron-4.p-5.mb-3
          p.mb-0 El guía como empresa unipersonal también debe realizar una proyección para períodos futuros (mes, trimestre, semestre, año o años), es decir, determinar con cuáles recursos dispone, tanto a nivel personal al verificar saldos de bancos, disponibles inmediatos, flujos de efectivo, inventarios de equipos propios, así como estadísticas y conocimientos del mercado turístico como una base para presupuestar sus servicios #[strong.color-text (ver figura 2).]   
      .col-lg-7.lg-0(data-aos="fade-left")
        .row.justify-content-center.align-items-star.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span <i>Gestión de recursos propios del guía de turismo</i>
        img(src='@/assets/curso/images/tema4/fig_1.svg'  alt='')
    
    Separador

    #t_4_1.titulo-segundo
      .h2 4.1. Tarifa del servicio guiado 


    p.mb-5 El precio o tarifa como se denomina en la guianza, hace referencia a la cantidad de dinero que el cliente está dispuesto a pagar por un producto o servicio determinado. Los criterios para aplicar tarifas reducidas, lo mismo que para aplicar tarifas altas y cuándo hacerlo, han de formar parte de la política del servicio del guía.

    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Pronóstico de ventas en la guianza

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6.lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema4/img_1.png'  alt='').mb-3
      .col-lg-6.lg-0(data-aos="fade-left")
        p.mb-0 Luego de identificar las características del mercado turístico, el guía puede adentrarse a realizar un pronóstico de sus operaciones, con el objetivo de predecir en un periodo futuro. Como lo menciona Luna González (2015), los indicadores claves para los pronósticos efectivos son:

        ul.lista-ul--color.mt-3
          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 <b>Conocer la historia para estimar el futuro (Nº de servicios según la temporada)</b>, especialmente las variaciones del calendario, días hábiles o fines de semana. 

          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 <b>Mantener actualizados sus conocimientos sobre el segmento de mercado</b> al que pertenecen sus usuarios, por ejemplo, demanda o convenios especiales.

          li
            i.vineta(data-aos="fade-up") 
            p.mb-0 <b>Capacidad de repetir la experiencia turística </b> del cliente.

    p.mb-0 Para que pueda realizar un pronóstico de ventas del servicio guiado debe tener en cuenta las siguientes preguntas: 

    .row.d-none.d-lg-block.m-top
      .row.fondo-4.mb-0
        .col-lg-7.mb-3.mb-lg-0.p-5(style="place-self:center")
          ul.lista-ul--color.mt-5
            li
              i.vineta(data-aos="fade-up") 
              p.mb-0 ¿Cuántas horas diarias en promedio labora como guía?

            li
              i.vineta(data-aos="fade-up")
              p.mb-0 ¿Cuántos días a la semana laborará?

            li
              i.vineta(data-aos="fade-up")
              p.mb-0 ¿Cuántos días libres desearía tener al año?

            li
              i.vineta(data-aos="fade-up")
              p.mb-0 ¿En promedio cuántos días de incapacidad tendría al año?

            li
              i.vineta(data-aos="fade-up")
              p.mb-0 ¿Cuántas horas diarias considera que gastaría fuera del servicio guiado en reuniones con contratantes o usuarios, ofreciendo sus servicios, contestar correos, legalizando cuenta de cobro y de gastos, actividades similares, diseñar nuevos productos, visitar nuevos lugares, etc.?

            li
              i.vineta(data-aos="fade-up")
              p.mb-0  ¿Cuál sería el ingreso mensual, ideal por los servicios de guianza?

        .col-lg-3.mb-3.mb-lg-0.ps-4.pe-4(style="place-self:center")
          figure.text-center
            img.mt-4(src="@/assets/curso/images/tema4/img_2.png" data-aos="fade-right" style="display:inline;position:relative;max-width:290px;")

    .row.justify-content-center.align-items-star.d-block.d-lg-none.m-top-1
      .row
        .col-lg-7.mb-3.mb-lg-0.p-5(style="place-self:center")
          ul.lista-ul--color.mt-5
            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  ¿Cuántas horas diarias en promedio labora como guía?

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  ¿Cuántos días a la semana laborará?

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0 ¿Cuántos días libres desearía tener al año?

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0 ¿En promedio cuántos días de incapacidad tendría al año?

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  ¿Cuántas horas diarias considera que gastaría fuera del servicio guiado en reuniones con contratantes o usuarios, ofreciendo sus servicios, contestar correos, legalizando cuenta de cobro y de gastos, actividades similares, diseñar nuevos productos, visitar nuevos lugares, etc.?

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  ¿Cuál sería el ingreso mensual, ideal por los servicios de guianza?

        .col-lg-3.mb-3.mb-lg-0.ps-4.pe-4(style="place-self:center")
          figure.text-center
            img.mt-4(src="@/assets/curso/images/tema4/img_2.png" data-aos="fade-right" style="display:inline;position:relative;max-width:290px;")

    p.mb-3 En caso de que no tenga la respuesta a estas preguntas se aconseja que realice una investigación de su entorno con guías que están en el sector y en las estadísticas del Sistema de Estadísticas Regional.
    
    p.mb-3 Al responder las anteriores preguntas el guía está en la capacidad de ofrecer tanto servicio puede ofrecer en determinado tiempo y que para efectos prácticos de este material se llamará “capacidad de carga del guía”. 

    p.mb-5 Luego determinar los insumos necesarios para prestar el servicio tales como el tiempo que debe disponer el guía, otro importante aspecto de la autonomía para la proyección económica de la actividad como guía es determinar la tarifa del servicio guiado

    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-2 Criterios para fijar una tarifa

    p.mb-3 Los criterios para conocer cómo se fija la tarifa están en función de los costos y gastos, es decir, la suma de costos y gastos fijos y variables que se requieran para poner en marcha el servicio y a partir de ahí, determinar el margen que se quiere tener de ganancia (ver figura 3). 

    .row.align-items-center.justify-content-center.p-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 3.
          span <i>Análisis desde el punto de vista económico para determinar tarifa</i>
        img.mb-3(src='@/assets/curso/images/tema4/fig_2.svg'  alt='')(data-aos="zoom-in-right")

    p.mb-5 A continuación, se disgregan los componentes de las fórmulas descritas en la imagen.

    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Clasificación de costos y gastos 

    p.mb-3 Costos y gastos son dos conceptos clave a la hora de establecer cuánto dinero realmente requiero para prestar un servicio, como lo menciona la fórmula anterior, ayuda a establecer el costo total del servicio.  Si bien ambos conceptos significan erogaciones o salidas de dinero, los dos tienen naturalezas distintas. 

    p.mb-3 El costo hace referencia al conjunto de erogaciones o salida de dinero en que se incurre para producir un bien o servicio, como es la materia prima, insumos, mano de obra, disponible, energía para mover máquinas, entre otros. Para el caso del guía el tiempo de duración del servicio:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade")
        .jumbotron-5.p-1
          .row.justify-content-center.align-items-center.mb-3.ps-2(data-aos="zoom-in-down")
            .col-lg-10.bg-color-1.p-1
              p.mb-0.text-center.mt-2 Desembolsos = Erogaciones = Salidas de dinero

    p.mb-3 Los costos pueden dividirse en:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema4/ico_2.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-8
            .p-5
              h5.text-center.mb-2 Costo directo
              p.text-center.mb-4 Tiene relación directa con el producto o servicio, por ejemplo, madera para muebles, vehículos para la prestación de servicios de transporte, contrataciones para prestación de servicios como el conductor, principal mano de obra para transporte terrestre, aéreo o marítimo.

      .col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema4/ico_3.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-8
            .p-4
              h5.text-center.mb-2 Costo indirecto
              p.text-center.mb-0 Son parte subjetiva del producto o servicio y requieren de una clasificación especial del Plan de Cuentas Contables dependiendo del tipo de bienes o servicios. Estos a su vez pueden ser variables (varían proporcionalmente a la cantidad de unidades o servicios terminados / prestados como la energía, reparaciones, combustibles) o fijos (pagos permanentes que independientemente de si se produzca o no como costos de personal directivo de producción, arrendamientos, seguros, impuestos, etc.).

    p.mb-5 La clasificación de los costos se detalla con los elementos que lo conforman:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.lg-0
            img.mx-5(src='@/assets/curso/images/tema4/ico_4_1.svg', alt='', style="width:125px; display:block; margin:auto 0 ;")
          .col-lg-10.lg-0
            p.mb-0 <b>Materia Prima:</b> elemento base para la elaboración de los productos o para la prestación de servicios y que normalmente tienen la mayor representación en el costo.
        .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
          .col-lg-2.lg-0
            img.mx-5(src='@/assets/curso/images/tema4/ico_5_1.svg', alt='', style="width:125px; display:block; margin:auto 0 ;")
          .col-lg-10.lg-0
            p.mb-0 <b>Mano de obra:</b> valor correspondiente al dinero pagado a los trabajadores que participan en el proceso de elaboración de los productos o prestación de los servicios.
        .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
          .col-lg-2.lg-0
            img.mx-5(src='@/assets/curso/images/tema4/ico_6_1.svg', alt='', style="width:125px; display:block; margin:auto 0 ;")
          .col-lg-10.lg-0
            p.mb-0 <b>Costos de producción y/o prestación de servicios:</b> este último es de suma importancia ya que requiere de la experticia para determinar todos los demás cargos fijos o variables en los que se incurre en el proceso de producción y en el de prestación de servicios, que sumados a los dos anteriores dan como resultado el costo total.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade")
        .jumbotron-5.p-1
          .row.justify-content-center.align-items-center.mb-3.ps-2(data-aos="zoom-in-down")
            .col-lg-10.bg-color-1.p-1
              p.mb-0.text-center.mt-1 Costo total = Materia Prima + Mano de obra + Otros costos de producción


    p.mb-3 De otra parte, se entiende como gasto al conjunto de erogaciones destinadas a la distribución o venta del producto, a la administración e incluso al mantenimiento de los equipos. A su vez este rubro se divide en:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade")
        p.mb-0 <b>Gastos de administración:</b> corresponde a gastos fijos y variables de los servicios para que exista una operación, son:
    .row.justify-content-center.align-items-star.mb-3
      .col-lg-10(data-aos="fade")
        .jumbotron-6.px-5.py-4
          .row.justify-content-center.align-items-center
            .col-lg-4.lg-0
              img(src='@/assets/curso/images/tema4/img_3.png').mb-3
            .col-lg-8.lg-0
              ul.lista-ul--color
                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0  Gastos de personal administrativo, asistencia, contabilidad, servicios generales y otros.

                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0 Gastos legales.

                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0  Seguros.
      
                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0  Servicios públicos.
      
                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0  Mantenimiento y reparaciones.

                li
                  i.vineta(data-aos="fade-up") 
                  p.mb-0  Gastos de viaje.

        p.my-4 <b>Gastos en ventas:</b> relacionados con la distribución, almacenaje, expendio y gastos de personal de ventas, publicidad, arrendamientos (locales de ventas), servicios públicos.

        p.mb-0 Para entender la importancia de estos dos conceptos se presenta un complemento de otros que son parte de la comprensión del gasto:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.lg-0(data-aos="fade-right")
        .jumbotron-7.px-4.py-4
          ul.lista-ul--color
            li
              i.vineta(data-aos="fade-up") 
              p.mb-0 Fijar el precio de venta. 

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  Tomar decisiones para que el producto o servicio sean rentables.

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  Poder establecer presupuestos y controlar los costos.
      .col-lg-2.lg-0(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_4.svg')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.lg-0
        p.mb-3 Para calcular los costos y gastos de un servicio guiado es necesario que la información sea confiable y rigurosa. Un costo mal calculado puede causar pérdidas en la operación de cualquier ente económico ya sea una empresa, una pyme, un contratista o freelance.

        p.mb-3 Para calcular los costos y gastos de un servicio guiado es necesario que la información sea confiable y rigurosa. Un costo mal calculado puede causar pérdidas en la operación de cualquier ente económico ya sea una empresa, una pyme, un contratista o freelance.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.lg-0
        .row.align-items-center.aling
          .col-lg-12(data-aos="zoom-in-down")
            .tarjeta.color-custom-9.p-4.mb-5
              .row.justify-content-center.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col-lg-2
                      img.mx-1(src="@/assets/curso/images/tema4/ico_7.svg",  alt='', style="width:60px; display:block; margin:auto 0 ;").mb-3
                    .col.mb-3.mb-sm-0
                      p.mb-1 A continuación, se muestran algunos ejemplos de clasificación para ver la diferencia entre costo y gasto en la labor como guía de turismo
                    .col-md-auto
                      a.boton(:href="obtenerLink('downloads/OKEst_Anexo_ejemplos_de_clasificación_para_el_costo_y_gasto.pdf')" target="_blank")
                        span Descargar
                        .row
                          .col-auto
                            img.mx-1(src="@/assets/curso/images/tema4/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.lg-0
        p.mb-3 De esta manera se presenta las variables que se pueden presentar en la guianza desde el costo y el gasto fijo (ver figura 4).

        .row.justify-content-center.align-items-star.mb-0
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              span <i>Costo y gastos fijo y variables en la guianza</i>


    .row.justify-content-center.align-items-center.mb-2
      .col-lg-6(data-aos="fade")
        .jumbotron-8
          .row.justify-content-center.align-items-center.mb-3.ps-2(data-aos="zoom-in-down")
            .col-lg-10.bg-color-1.p-1
              h3.text-center.mt-1 Costo y gastos - fijos y variables 

    .row.justify-content-center.align-items-star.mb-3(data-aos="fade-up")
        .col-lg-12
          img(src='@/assets/curso/images/tema4/fig_3.svg'  alt='')

          figcaption.mt-3 Nota. Adaptado de Diseño y comercialización de productos turísticos locales y regionales Milio Balanzá (2004).  

    p.mb-3 De esta manera se presenta las variables que se pueden presentar en la guianza desde el costo y el gasto fijo (ver figura 4).
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 1. 
          span #[em Ejemplo cálculo de costo y gastos fijos para un guía]

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-10
        .tabla-a(data-aos="zoom-in-up")
          .tableContainer 
            thead
              tr.tableizer-firstrow.p-0.th-1 
                <th colspan="2">   Ítems
                th  Costos
                th Gastos
            tbody
              tr.p-0.th-4
                <td rowspan="6"> ¿Cuáles son sus gastos y costos fijos?</td> 
                td Ítem
                td 
                td 700.000
          
              tr.p-0
                td.th-3 ¿Cuáles son sus gastos mensuales vivienda?
                td
                td 400.000

              tr.p-0
                td.th-4  ¿Cuáles son sus gastos mensuales en alimentación?
                td.th-4  
                td.th-4  150.000
      
              tr.p-0
                td ¿Cuáles son sus gastos mensuales servicios públicos?
                td 75.000
                td 75.000
     
              tr.p-0
                td.th-4  ¿Cuáles son sus gastos mensuales en servicio de internet y telefonía móvil?
                td.th-4  
                td.th-4  50.000

              tr.th-3.p-0 
                <td> ¿Cuál es el gasto bancario mensual? Subtotal Sumatoria costo y gastos fijos.</td>
                td.th-3  75.000
                td.th-3  1´300.000
       
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 2. 
          span #[em Ejemplo cálculo de costo y gastos variables para un guíaa]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .tabla-a(data-aos="zoom-in-up")
          .tableContainer 
            thead
              tr.tableizer-firstrow.p-0.th-1 
                <th colspan="2">   Ítems
                th  Costos
                th Gastos
            tbody
              tr.p-0.th-4
                <td rowspan="6">Costo y gastos variables. Dependen de la temporada</td> 
                td ¿Cuáles son sus gastos mensuales por transporte?
                td 
                td 150.000
       
                
              tr.p-0
                td.th-3 ¿Cuánto calcula será su gasto en indumentaria o ropa anual para servicio de guianza? 
                td 150.000
                td 

              tr.p-0
                td.th-4 ¿Cuáles serán sus gastos en equipos y mantenimiento anual? 
                td.th-4  50.000
                td.th-4  
      
              tr.p-0
                td  Impuestos (retención 10% a honorarios)
                td 
                td 150.000
     
              tr.p-0
                td.th-4 ¿Cuánto desearía mensualmente provisionar para emergencias, jubilación, etc.?
                td.th-4  200.000
                td.th-4  150.000

              tr.th-3.p-0 
                td Subtotal Sumatoria costo y gastos variable
                td.th-3  
                td.th-3 1´850,000

    p.mb-3   El costo de equipos, indumentario y su mantenimiento de calcula anual y luego se divide en los 12 meses para obtener un aproximado.
    p.mb-5 Para calcularlo debe proyectar cuáles son sus ingresos o determinar un deseado de ingresos.

         
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-lg-8.lg-0
        .jumbotron-5.p-3.mb-3
          .row.justify-content-center.align-items-center
            .col-5.col-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema3/ico_5.svg',  alt='', style="width:80px; display:block; margin:auto -3rem ;").mb-3
            .col-lg-10(data-aos="fade-right")
              p.mb-2.mt-3 Costos totales mensuales según este ejemplo = Σ costos y gastos fijos + Σ costos y gastos variables
              p.text-center   3.400.000  = 1.375.000  + 2.025.000

    
    p.mb-3 Este cálculo mensual es la base que al dividirla en 30 resulta el costo diario y hasta puede calcular la base para su servicio por horas.

    p.mb-3 La ganancia es el excedente económico que se espera de la prestación del servicio. Luego de calcular los costos de producción y mercadeo, se agrega el margen de ganancia, que desean obtener en cada servicio. 

   
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-lg-10.lg-0
        .jumbotron-9.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-12.col-lg-12(data-aos="fade-left")
              p.mb-3 Por ejemplo: si desea obtener el 20% de ganancia, sume este porcentaje al 100%.  El resultado multiplíquelo por el costo y gastos del servicio
          .row.justify-content-center.align-items-center
            .col-12.col-lg-7.lg-0
              .jumbotron-15.p-2
                p.mb-0.text-center Tarifa potencial = Costos y gastos del servicio* (% ganacia+100)
                p.mb-0.text-center 4.080.000=  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3400.000 *   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120%


    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6.lg-0(data-aos="fade-left")
        .jumbotron-7.p-5
          p.mb-0 Este margen depende del análisis de mercado y la planeación estratégica que se mencionó anteriormente. Por tanto, la temporada, las condiciones del servicio, entre otras, influyen en la escogencia del margen. #[strong.color-text En temporadas altas, el margen de ganancia podría ser menor, garantizando el flujo constante de solicitud de servicios guiados; si por el contrario en su caso el objetivo es prestar unos pocos servicios en el mes o en la semana por que la puesta en marcha de la experiencia turística es compleja,] entonces se debe aumentar el margen de ganancias. 
      .col-lg-6.lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema4/img_5.png'  alt='')

    p.mb-0 Retomando el concepto de la guianza como un servicio turístico perecedero, se debe tener en cuenta que en la planeación de la tarifa debe pensar en un rubro para garantizar el éxito del servicio guiado en caso de encontrarse con condiciones adversas, por ello se recomienda calcular un porcentaje para imprevistos que puede ser del 10%. Este es otro factor que puede ayudar a determinar cuál sería el margen ideal de ganancia (ver tabla 3).


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 3. 
          span #[em Ejemplo de cálculo de imprevisto]

    .row.justify-content-center.align-items-center
      .col-lg-2.lg-0
        img.mt-1(src='@/assets/curso/images/tema4/img_6.svg'  alt='')
      .col-lg-8.lg-0
        .tabla-a.color-acento-contenido.mt-2
          table
            tbody
              tr
                td(width='75').text-center.text-white.th-5  Tarifa potencial (suma de costos y gastos fijos y variables + margen de ganancia)

                td(width='25').th-6 4.080.000

              tr
                td(width='15').text-center.text-white.th-5   Imprevisto (10% sobre tarifa potencial)
                td(width='85').th-6  408.000

              tr
                td(width='15').text-center.text-white.th-5   Subtotal 
                td(width='85').th-6 4.488.000

    .row.justify-content-center.align-items-center
      .col-lg-10.lg-0        
        p.my-3 Por otro lado, como independiente el guía de turismo en Colombia debe afiliarse al Sistema General de Seguridad Social en Salud y pagar mensualmente sobre el 40% del valor mensual de sus ingresos, sin que la base de cotización sea inferior al salario mínimo legal mensual vigente -SMLV-.De acuerdo al ingreso base debe hacer un aporte mensual del  12.5% al Sistema General de Seguridad Social en Salud, el 16% en materia pensional, el paso ARL Administradora de Riesgos laborales corresponderá a su nivel de riesgo en el servicio (Ministerio de Salud y Protección Social de Colombia,2021).

    .row.d-none.d-lg-block
      .row.justify-content-center.align-items-center
        .col-lg-11.lg-0(style="place-self:center")  
          .jumbotron-16
            .row.justify-content-center.align-items-center
              .col-5.col-lg-12.px-5(data-aos="fade-left")
                p.mt-5 Por ejemplo, luego de determinar su tarifa potencial y sumar los imprevistos tiene su base de cotización. Para calcular la cotización debe calcular el 40% y de este aplicar el *12,5% de salud, el 16% de pensión y 1,044 de ARL
                .row.justify-content-center.align-items-center
                  .col-12.col-lg-9
                    .jumbotron-15.p-2
                      p.mb-0.text-center Cotización seguridad social= ((Tarifa potencial + imprevistos) *40%) * (12.5%+16%+1.044%)
                      p.mb-0.text-center Cotización seguridad social   = (4.488.000*40%) * 29,544%
                      p.mb-0.text-center 530.374   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 1.795.200   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 29,544%

                  .col-lg-3.mb-3.mb
                    img.mt-4(src="@/assets/curso/images/tema4/img_7.svg" data-aos="fade-right" style="display:inline;position:relative;max-width:290px;")


    .row.d-block.d-lg-none
      .row.justify-content-center.align-items-center
        .col-12.col-lg-12.px-5(data-aos="fade-left")
          p.mt-5 Por ejemplo, luego de determinar su tarifa potencial y sumar los imprevistos tiene su base de cotización. Para calcular la cotización debe calcular el 40% y de este aplicar el *12,5% de salud, el 16% de pensión y 1,044 de ARL
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.lg-0
          p.mb-3 Cotización seguridad social= ((Tarifa potencial + imprevistos) *40%) * (12.5%+16%+1.044%)
          p.text-center Cotización seguridad social   = (4.488.000*40%) * 29,544%
          p.text-center 530.374                      = 1.795.200 * 29,544%

        .col-lg-3.mb-3.mb-lg-0.ps-4.pe-4(style="place-self:center")
          figure.text-center
            img.mt-4(src="@/assets/curso/images/tema4/img_7.svg" data-aos="fade-right" style="display:inline;position:relative;max-width:290px;")

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.lg-0  
          p.mb-3  De esta manera, se debe observar el siguiente ejemplo de cómo se puede llegar a calcular la tarifa que se desea (ver tabla 4): 

    .row.justify-content-center.align-items-center(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 4. 
          span #[em Ejemplo para calcular la tarifa deseada]

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-2
          table.tb
            tbody
              tr
                td(width='50').th-7.p-4 Tarifa potencial ( Tarifa deseada) ¿Cuánto cobrar como guía para lograr sus metas económicas?
                td(width='15').text-center.th-8 Mensualmente
                td(width='15').text-center.th-8  Semanalmente (valor mensual / 4)
                td(width='20').th-8  Diariamente (Dividir el valor semanal en el número de días que trabajará en la semana, por ejemplo 5)
              tr
                td(width='50').th-7.p-4  Tarifa potencial +imprevisto+ cotización seguridad social (4.080.000+408.000+530.374)
                td(width='15').text-center.th-8   5.018.374
                td(width='15').text-center.th-8  1.254.594
                td(width='20').text-center.th-8  250.919
           
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5.lg-0(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_8.png'  alt='').mb-3
      .col-lg-5.lg-0(data-aos="fade-right")
          p.mb-3 #[strong.color-text Para calcular la utilidad es necesario identificar el margen de contribución,] el cual se entiende como aquel monto de dinero que se obtiene para cubrir la totalidad de los costos fijos y cualquier exceso que genere por encima de los costos fijos se considera utilidad (Ramírez P., C., López Pacheco, E., & Chaves N., J. 1988).
       
          p.mb-0 A su vez, se debe tener en cuenta que #[strong.color-text las utilidades serán la base para el pago de impuestos.] Es decir, de acuerdo a los ingresos todo trabajador independiente debe declarar y pagar por sí mismo sus impuestos. En la medida que aumenten los ingresos lo hará de manera proporcional a los impuestos a declarar.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-lg-8.lg-0
        .jumbotron-9.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-5.col-lg-12(data-aos="fade-left")
              .jumbotron-15.p-4.mb-3
                p.mb-0.text-center Tarifa deseada – Σ costos y gastos variables = margen contribución 
                p.mb-0.text-center 5.018.374    -   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  2.025.000   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=    2.993.374
                     
          .row.justify-content-center.align-items-center
            .col-5.col-lg-12.lg-0
              .jumbotron-15.p-4
                p.mb-0.text-center Margen de contribución –costos y gastos fijos= Utilidad liquida
                p.mb-0.text-center   2.993.374     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -           1.375.000  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=   1618374 
           
    .row.justify-content-center.align-items-star.mb-0
      .col-lg-10.lg-0(data-aos="fade-left")
        p.mb-3 Otro análisis que se debe hacer a la tarifa es el punto de equilibrio. #[strong.color-text Toda empresa del sector turístico desde un alojamiento, agencia o un guía de turismo debe saber perfectamente a qué tipos de clientes, el mercado turístico y el punto de equilibrio, es decir cuando se consigue cubrir costes y a partir de este las empresas comienzan a obtener beneficios.] (Ramírez P., C., López Pacheco, E., & Chaves N., J. 1988). Para ello se necesita una experiencia en el mercado para poder identificar los siguientes datos (ver figura 5):


    .row.justify-content-center.align-items-center(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 5. 
          span #[em Datos necesarios para calcular el punto de equilibrio]

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-down")
        .jumbotron-17.p-5
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-3
              .jumbotron-19.p-3
                p.mb-4 <b>Σ Costos  y gastos fijos </b>
            .col-2.col-lg-1
              img(src='@/assets/curso/images/tema4/flecha.svg'  alt='')
            .col-lg-3 
              .jumbotron-19.p-3
                p.mb-4 <b> Tarifa para cada servicio </b>
            .col-2.col-lg-1
              img(src='@/assets/curso/images/tema4/flecha.svg'  alt='')
            .col-lg-3 
              .jumbotron-19.p-3
                p.mb-0 <b>Costos variables en cada servicio guiado </b>
          .jumbotron-19.p-3
            p.mb-0 <b>La fórmula que se aplica para hallar el punto de equilibrio es el siguiente:</b>
            p.mb-0 PE= Σ costos y gastos fijos / Tarifa deseada por cada servicio - (De cada servicio costos y gastos variables)


   
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.lg-0
        .row.align-items-center.aling
          .col-lg-12(data-aos="zoom-in-down")
            .tarjeta.color-custom-9.p-4.mb-5
              .row.justify-content-center.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col-lg-2
                      img.mx-1(src="@/assets/curso/images/tema4/ico_7.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                    .col.mb-3.mb-sm-0
                      p.mb-1 Finalmente existen alternativas de cómo hacer una adecuada gestión del dinero, lo que permite proyectar gastos y demandas, por ello se puede ingresar al Manual del alumno educación financiera.
                    .col-md-auto
                      a.boton(:href="obtenerLink('downloads/wcms_734537.pdf')" target="_blank")
                        span Descargar
                        .row
                          .col-auto
                            img.mx-1(src="@/assets/curso/images/tema4/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    separador
  
    #t_4_2.titulo-segundo
      .h2 4.2 Criterios de planeación estratégica en el guionaje

    p.mb-5 Desde la planeación estratégica del guía como empresa unipersonal para mantenerse en el mercado se debe tener en cuenta características del servicio como: 


    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-6.col-lg-3.mb-3
        .jumbotron-10.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-8.mb-4.mb-lg-0
              img.mt-3(src='@/assets/curso/images/tema4/ico_11.svg').mb-3
              h4.mb-4.text-center Ciclo de vida.
    

      .col-6.col-lg-3
        .jumbotron-10.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-5.col-lg-8.mb-4.mb-lg-0
              img.mt-2(src='@/assets/curso/images/tema4/ico_12.svg').mb-3
              h4.text-center.mb-5 Cobertura.
 

      .col-6.col-lg-3.mb-3
        .jumbotron-10.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-8.mb-4.mb-lg-0
              img.mt-3(src='@/assets/curso/images/tema4/ico_13.svg').mb-3
              h4.mb-1.text-center Gastos de manutención.
           

      .col-6.col-lg-3
        .jumbotron-10.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-8.mb-4.mb-lg-0
              img.mt-3(src='@/assets/curso/images/tema4/ico_14.svg').mb-3
              h4.mb-5.text-center Comisiones.
          
    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Ciclo de vida

    p.mb-3   Los servicios que se presentan en el turismo presentan algunos elementos que llevan a desarrollarse a través de diferentes fases, es por ello que según Milio Balanzá, (2004), los ciclos de vida del servicio o fases que pasa un servicio en el mercado turístico son unas estrategias para la fijación de tarifa, para ello se puede observar: 

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-primario
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Fase de gestación")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Fase de gestación
                p Que corresponde al momento en el que el servicio se crea y se prepara para su entrada en el mercado, el precio debe ser adecuado según lo novedoso que éste pueda ser y el tipo de cliente al que se dirija.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_9.png', alt='Texto que describa la imagen')
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Fase de introducción")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Fase de introducción
                p.mb-3 Es el primer acercamiento al consumidor, cuando el servicio guiado no es conocido y se quiere llamar la atención.  Se puede optar por un precio alto, teniendo en cuenta la aparición de competencia y que se puedan adaptar precios fácilmente.
                p.mb-0 En caso contrario al empezar con precio bajos el margen no le permitirá modificar el precio para competir.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_10.png', alt='Texto que describa la imagen')
              
              
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Fase de crecimiento")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Fase de crecimiento
                p.mb-0 Cuando se ha conseguido ser conocido por el consumidor y ha conseguido su confianza, se puede optar por mantener el precio o subirlo (nunca de forma exagerada), siempre que no se descuide la calidad del servicio.
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_11.png', alt='Texto que describa la imagen')

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Fase de madurez")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Fase de madurez
                p.mb-3 Cuando el servicio lleva cierto tiempo en el mercado y que suele coincidir con una estabilización en las ventas y en los beneficios que genera, se ha de recurrir generalmente a una disminución de los precios.
                p.mb-0 Se deberán estudiar los beneficios para el usuario y tratar de mejorarlos. También es el momento de conquistar nuevos tipos de clientes.

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_12.png', alt='Texto que describa la imagen')

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Fase de declive")
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Fase de declive
                p.mb-0 Las ventas descienden con la aparición de competidores y porque el servicio comienza a estar anticuado, hay dos estrategias la primera consiste en agregar o sustituir algunas de las propiedades que forman el servicio guiado, con el fin de producir un cambio y renovación en el mismo; la segunda consiste en salirse del mercado, porque es imposible mantenerse por más tiempo sin acumular pérdidas.

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_13.png', alt='Texto que describa la imagen')
      
    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Cobertura

    p.mb-3 Cuando se presenta el servicio de turismo se hace necesario considerar ciertos aspectos, en los cuales como lo menciona Cabo Nadal (2004), hay elementos trascendentales a la hora de prestar un servicio y acordar una tarifa, entre ellos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema4/img_14_1.svg').mb-3
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Cuando' numero='1')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Depende del acuerdo previo con el contratante hay un recargo en servicios en horarios nocturnos. Por ejemplo, desde la 6 pm hasta más de las 10 pm- 5 horas aproximadamente se denomina como #[em night tour] o tour nocturno y tiene un recargo sumado a un rubro que se le debe proporcionar al guía para el transporte a su casa o alojamiento.
          .row.color-custom-10(titulo='Número de usuarios.' numero='2')
            .row.align-items-center
              .col-lg-12
                p.mb-0

          .row.color-custom-10(titulo='Duración' numero='3')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Oscilan medio día (entre dos y cuatro horas), día completo (máximo 9 horas), por ejemplo, transfer y vista a la ciudad. Si el servicio se presta en las cercanías de la ciudad mínimo calculo una hora adicional es decir un recargo del 10%. 

          .row.color-custom-10(titulo='Idioma' numero='4')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se estima que un 20% de recargo por cada idioma que se requiera, idiomas asiáticos como el mandarín puede tener hasta el 50%.

          .row.color-custom-10(titulo='Recorrido especializado.' numero='5')
            .row.align-items-center
              .col-lg-12
                p.mb-0 

    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Gastos de manutención 

    p.mb-3 Otro ingreso del guía que no está dentro de las ganancias, sino hace parte de la operación son los viáticos, este concepto surge cuando el guía a causa de su trabajo se ve en la obligación de comer o dormir fuera de casa (ver figura 6). 

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6.lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema4/img_15.svg'  alt='')
      .col-lg-6.lg-0(data-aos="fade-left")
        .jumbotron-7.p-5.h-100
          ul.lista-ul--color
            li
              i.vineta(data-aos="fade-up") 
              p.mb-0 Facilitar la manutención del guía poniéndose de acuerdo directamente con el hotel o restaurante.
            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  Pagar un viático, es decir, una cantidad fija preestablecida, independientemente del importe de los gastos que haya tenido el guía.

            li
              i.vineta(data-aos="fade-up") 
              p.mb-0  Pagar contra factura, es decir el guía realiza los pagos y luego solicita el reembolso con la factura de los servicios relacionados con hospedaje y alimentación, acordados previamente.
      

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.lg-0
        .row.align-items-center.aling
          .col-lg-12(data-aos="zoom-in-down")
            .tarjeta.color-custom-9.p-4.mb-5
              .row.justify-content-center.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col-lg-2
                      img.mx-1(src="@/assets/curso/images/tema4/ico_7.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                    .col.mb-3.mb-sm-0
                      p.mb-1 Tarifas para el servicio guiado en la ciudad de Bogotá
                    .col-md-auto
                      a.boton(:href="obtenerLink('downloads/Tarifas para el servicio guiado en la ciudad de Bogotá.pdf')" target="_blank")
                        span Descargar
                        .row
                          .col-auto
                            img.mx-1(src="@/assets/curso/images/tema4/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    p.mb-5 Tener en cuenta que algunas agencias de viajes ofrecen comisiones a los guías por promocionar otros recorridos o servicios y lograr una venta. Evitar centrarse solo en este aspecto durante el servicio pues se puede incurrir en una aprobación como la siguiente: “...está prohibido coaccionar a los turistas a realizar compras en determinados establecimientos comerciales, respetando las libertades de sus pasajeros y persiguiendo obtener beneficios particulares de la transacción realizada...”


    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-4
        .h4.mb-0.m-top-3.mx-3 Comisiones

    p.mb-5 El guía tiene la oportunidad de ganar dinero con un recurso de llamado comisiones.  Se trata de promocionar y vender de acuerdo con la política empresarial, unos servicio o productos asociados al recorrido ganando un porcentaje acordado del precio de venta.  El pago de la comisión se puede hacer después de la venta del producto o servicio o al final del contrato según negociación.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-3.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema4/img_16.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Tener en cuenta que esta no es una actividad que haga parte de la función de un guía, pero en ocasiones puede realizar estas negociaciones con ética y el concepto de calidad del servicio siempre presente

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 Tener en cuenta que esta no es una actividad que haga parte de la función de un guía, pero en ocasiones puede realizar estas negociaciones con ética y el concepto de calidad del servicio siempre presente
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema4/img_16.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3














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
