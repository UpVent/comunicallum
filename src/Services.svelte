<script>
    let services = [{
            image: 'images/servicio1.png',
            name: 'SEO & SEM',
            text: 'Posicionaremos tu negocio en los motores de búsqueda más populares. Contamos con un plan de contenido para lograr que tus clientes te encuentren fácilmente al buscar tu producto o servicio en Internet.'
        },
        {
            image: 'images/servicio2.png',
            name: 'Estrategia Digital',
            text: 'Te ayudaremos a incrementar las ventas de tu negocio a través de una estrategia digital para que obtengas los mejores resultados.'
        },
        {
            image: 'images/servicio3.png',
            name: 'Campañas de Publicidad',
            text: 'Optimizamos tus campañas de publicidad en redes sociales, asegurando de que tu inversión en las mismas genere nuevos clientes.'
        },
        {
            image: 'images/servicio4.png',
            name: 'Manejo de Redes Sociales',
            text: 'Llevamos tus redes sociales al siguiente nivel con nuestros expertos. Aumentamos tu visibilidad y tu número de likes desde el primer día.'
        },
        {
            image: 'images/servicio5.png',
            name: 'Branding',
            text: '¿Necesitas desarrollar contenido para tu marca? Nosotros te tenemos cubierto con diseñadores expertos y una gran variedad de opciones.'
        },
        {
            image: 'images/servicio6.png',
            name: 'Cobertura de Eventos',
            text: 'Filmaciones, fotografía profesional, material audiovisual y mucho más para que tus eventos sean el trending topic de tu zona.'
        },
        {
            image: 'images/servicio7.png',
            name: 'Elaboración de Páginas Web',
            text: 'Posicionamos tu negocio en internet, no necesitas experiencia ¡Nosotros nos encargamos de tener tu página web en menos de 24 horas!'
        },
        {
            image: 'images/servicio8.png',
            name: 'Creación de Contenido',
            text: 'Creamos, producimos y levantamos de forma profesional tu contenido audiovisual (imagen y vídeo) para redes sociales y otras plataformas.'
        },
    ];
</script>

<style>
    .card:hover {
        transform: scale(1.1) perspective(1px);
        transition: all 500ms;
    }
</style>

<section class="mt-5 mb-5" id="services">
    <h2 class="display-5 fw-bold pb-2 text-center border-bottom">Nuestros servicios</h2>
    <div class="container mt-2">
        <div class="row">
            <div class="col-sm-1 col-md-12">
                <div class="row">
                    {#each services as service}
                        <div class="col-md-4 mb-3">
                            <div class="card border-0 rounded-3 shadow">
                                <img class="img-fluid card-img-top" height="234" width="351" alt="100%x280" src={service.image}>
                                    <div class="card-body">
                                        <h4 class="card-title text-muted border-bottom">{service.name}</h4>
                                        <p class="card-text text-muted small">{service.text}</p>
                                    </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
