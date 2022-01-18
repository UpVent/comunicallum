<script charset="utf-8">
    let screenshot = 'images/screen.jpeg';
</script>

<style type="text/css" media="screen">
    .img-spot {
        transform: rotate(20deg);
    }

    .img-spot:hover {
        transform: rotate(380deg);
        transition: all 1s;
    }

    .btn:hover {
        transform: scale(1.1) perspective(1px);
        transition: all 500ms;
    }
</style>

<section class="mt-2 mb-2">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="display-3 border-bottom">¡Síguenos en nuestras redes sociales!</h1>
                <p class="lead">Subimos contenido de manera regular, aportando contenido de valor para nuestra comunidad y transmitiendo la luz de todos los eventos a los que vamos.</p>
                <a class="btn btn-primary text-white border-0" style="background-color: #3b5998;" href="https://www.facebook.com/Comunicallum/" role="button"><i class="bi bi-facebook"></i> Facebook</a>

                <a class="btn btn-primary text-white border-0" style="background-color: #ac2bac;" href="https://www.instagram.com/comunicallum/" role="button"><i class="bi bi-instagram"></i> Instagram</a>

            </div>
            <div class="col-md-4">
                <a href="https://www.instagram.com/comunicallum/" target="_blank">
                    <img class="img-fluid rounded shadow img-spot" src={screenshot} alt="Screenshot comunicallum"/>
                </a>
            </div>
        </div>
    </div>
</section>
