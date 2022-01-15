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
      <a class="btn btn-primary border-0 m-1 fbutton" href="https://www.facebook.com/Comunicallum/" role="button"><i class="bi bi-facebook text-white"></i></a>
      <!-- Instagram -->
      <a class="btn btn-primary border-0 m-1 ibutton" href="https://www.instagram.com/comunicallum/" role="button"><i class="bi bi-instagram text-white"></i></a>
    </section>

    <section class="mb-4">
        <p>
            Desarrollamos tu marca u organización a través de una <a class="text-info" href="https://www.instagram.com/explore/tags/comunicaci%C3%B3nestrat%C3%A9gica/">#comunicaciónestratégica</a> digital 💻.
            <br />
            En nuestra agencia de marketing digital, gestionamos diversos proyectos de investigación de mercados, marketing, publicidad, estrategias de comunicación, desarrollo web, y proyectos de innovación.
        </p>
    </section>
  </div>
  <div class="text-center p-3 upvent-mask">
      © {year} Copyright:
    <a class="text-white" href="https://comunicallum.com/">comunicallum.com</a>
  </div>
  <div class="text-center p-3 upvent-mask">
      Hecho con <i class="bi bi-heart-fill text-danger"></i> por <a class="text-white" href="https://upvent.codes/">UpVent Technologies</a>
  </div>
    <div class="container text-center text-light small mt-5 border-top">
        <p>
            El <a href="https://github.com/UpVent/comunicallum">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a>
        </p>
    </div>
</footer>
