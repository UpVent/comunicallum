<script>
    import Meta from './Meta.svelte';
    import Navbar from './Navbar.svelte';
    import IndexJumbotron from './IndexJumbotron.svelte';
    import Footer from './Footer.svelte';
    import Plans from './Plans.svelte';
    import Medal from './Medal.svelte';

    /* GetButton.io widget */
    (function () {
        var options = {
            facebook: "108264074873815", // Facebook page ID
            whatsapp: "+52 462 288 8642", // WhatsApp number
            call_to_action: "¡Envíanos un mensaje!", // Call to action
            button_color: "#000000", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "facebook,whatsapp", // Order of buttons
            pre_filled_message: "¡Hola me comunico desde tu página web!", // WhatsApp pre-filled message
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<!-- SEO component -->
<Meta/>

<!-- Navbar component -->
<Navbar/>

<!-- Index Jumbotron component -->
<IndexJumbotron/>

<!-- Plans Component -->
<Plans/>

<!-- Medal component -->
<Medal/>

<!-- Portfolio Showcase Component -->

<!-- Allies Component -->

<!-- Services Component -->

<!-- Contact Component -->

<!-- Footer component -->
<Footer/>

