<script>
    let medal = 'images/medal.png';
</script>

<style>
.ghost {
    animation: floating 3s infinite;
}

@keyframes floating {
    0% {
        transform: translateY(1.3125rem);
    }
    50% {
        transform: translateY(-2.9125rem);
    }
    100%{
        transform: translateY(1.3125rem);
    }
}
</style>

<section class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4 ghost" src={medal} alt="" width="100" height="100">
    <h1 class="display-5 fw-bold">Nuestros clientes ya son los #1.</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Analizamos y creamos estrategias modernas de marketing digital para que, como nuestros clientes, tu negocio crezca desde el primer día.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-warning bg-gradient btn-lg px-4 gap-3">¡Contrátanos! <i class="bi bi-star"></i></button>
        <button type="button" class="btn btn-outline-danger btn-lg px-4">Ver Portafolio <i class="bi bi-briefcase"></i></button>
      </div>
    </div>
</section>
