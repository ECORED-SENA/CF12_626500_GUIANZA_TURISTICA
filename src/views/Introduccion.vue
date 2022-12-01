<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
  
    .row.justify-content-center.align-items-center.fondo.mb-3
      .col-lg-12(data-aos="fade-right")
        p.mb-3 Al iniciar este proceso formativo, se hace necesario reconocer algunos elementos importantes desde el uso de conceptos y principales temas a desarrollar, para ello se debe tener en cuenta:
      figure.mb-5(data-aos="fade-right")
        .video
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JwhY34xdSmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
 
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
