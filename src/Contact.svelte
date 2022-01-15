<script>
    let contact = 'images/contact.svg';

    // Form handler script
    var form = document.getElementById("my-form");
    function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    form.addEventListener("submit", handleSubmit)
    }
</script>

<section class="container col-xl-10 col-xxl-8 px-4 py-5 bg-contact">
    <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Contacto <i class="bi bi-envelope"></i></h1>
            <p class="col-lg-10 fs-4">¡Siempre queremos saber de ti! Dinos saber cómo podemos ayudarte y haremos nuestro mejor esfuerzo.</p>
            <img class="img-fluid" src={contact} alt="" />
        </div>
        <div class="col-md-10 mx-auto col-lg-5" data-aos="flip-left">
            <form class="border-0 shadow rounded m-2 p-2 form" id="my-form" action="https://formspree.io/f/xqknepzp" method="POST">
                <label class="form-label lead">Email:</label>
                <input class="form-control" type="email" name="email" />
                <label class="form-label lead">Mensaje:</label>
                <input class="form-control" type="text" name="message" />
                <hr>
                <button class="btn btn-success mt-2 lead" id="my-form-button">Enviar <i class="bi bi-envelope"></i></button>
                <p id="my-form-status"></p>
            </form>
        </div>
    </div>
</section>
