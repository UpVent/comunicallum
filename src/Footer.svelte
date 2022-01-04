<script>
    import { Styles } from 'sveltestrap';
    import { Icon } from 'sveltestrap';

    let year = new Date().getFullYear();
</script>

<style>
    .fbutton {background-color: #3b5998}
    .tbutton {background-color: #55acee}
    .gbutton {background-color: #dd4b39}
    .ibutton {background-color: #ac2bac}
    .lbutton {background-color: #0082ca}
    .ghbutton {background-color: #333333}

    .upvent-mask {background-color: rgba(0, 0, 0, 0.2)}
</style>

<footer class=" text-center text-white bg-dark bg-gradient">
  <div class="container p-4">
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-primary border-0 m-1 fbutton" href="#!" role="button"><i class="bi bi-facebook text-white"></i></a>
      <!-- Twitter -->
      <a class="btn btn-primary border-0 m-1 tbutton" href="#!" role="button"><i class="bi bi-twitter text-white"></i></a>
      <!-- Google -->
      <a class="btn btn-primary border-0 m-1 gbutton" href="#!" role="button"><i class="bi bi-google text-white"></i></a>
      <!-- Instagram -->
      <a class="btn btn-primary border-0 m-1 ibutton" href="https://www.instagram.com/comunicallum/" role="button"><i class="bi bi-instagram text-white"></i></a>
      <!-- Linkedin -->
      <a class="btn btn-primary border-0 m-1 lbutton" href="#!" role="button"><i class="bi bi-linkedin text-white"></i></a>
      <!-- Github -->
      <a class="btn btn-primary border-0 m-1 ghbutton" href="#!" role="button"><i class="bi bi-github text-white"></i></a>
    </section>

    <section class="mb-4">
        <p>
            Desarrollamos tu marca u organización a través de una #comunicaciónestratégica digital 🇲🇽🎬📸.
            <br />
            En nuestra agencia de marketing digital, gestionamos diversos proyectos de investigación de mercados, marketing, publicidad, estrategias de comunicación, desarrollo web, y proyectos de innovación.
        </p>
    </section>

    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div class="text-center p-3 upvent-mask">
      © {year} Copyright:
    <a class="text-white" href="https://comunicallum.com/">comunicallum.com</a>
  </div>
  <div class="text-center p-3 upvent-mask">
      Hecho con <i class="bi bi-heart-fill text-danger"></i> por <a class="text-white" href="https://upvent.codes/">UpVent Technologies</a>
  </div>
</footer>
