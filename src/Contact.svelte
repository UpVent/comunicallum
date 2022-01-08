<script>
    let contact = 'images/contact.svg';
</script>

<section class="container col-xl-10 col-xxl-8 px-4 py-5 bg-contact">
    <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Contacto <i class="bi bi-envelope"></i></h1>
            <p class="col-lg-10 fs-4">¡Siempre queremos saber de ti! Dinos saber cómo podemos ayudarte y haremos nuestro mejor esfuerzo.</p>
            <img class="img-fluid" src={contact} alt="" />
        </div>
        <div class="col-md-10 mx-auto col-lg-5" data-aos="flip-left">

            <form class="p-4 p-md-5 border rounded-3 bg-light" action="" method="POST" id="form">
                <div class="form-floating mb-3">
                    <label for="full_name">Nombre Completo</label>
                </div>
                <div class="form-floating mb-3">
                    <label for="phone">Teléfono</label>
                </div>
                <div class="form-floating mb-3">
                    <label for="email">Correo</label>
                </div>
                <div class="form-floating mb-3">
                    <div class="form-floating mb-3">
                        <label for="floatingarea">Mensaje</label>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <div class="form-floating mb-3">
                    </div>
                </div>
                <button id="btn-enviar" class="w-100 btn btn-lg btn-primary bg-gradient" type="submit">Enviar <i class="bi bi-envelope"></i></button>
                <hr class="my-4">
                <small class="text-muted">Los correos pueden tardar hasta 24 horas en responderse.</small>
            </form>
        </div>
    </div>
</section>
