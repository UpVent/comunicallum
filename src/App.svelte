<script>
    import Allies from './Allies.svelte';
    import Contact from './Contact.svelte';
    import Footer from './Footer.svelte';
    import IndexJumbotron from './IndexJumbotron.svelte';
    import Medal from './Medal.svelte';
    import Navbar from './Navbar.svelte';
    import Plans from './Plans.svelte';
    import Services from './Services.svelte';
    import Socials from './Socials.svelte';
    import TopBtn from './TopBtn.svelte';

    // External import
    import SvelteSeo from 'svelte-seo';

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
        let proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        let s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            let x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

    // SEO variables
    const url = "https://comunicallum.com";
    const title = "Comunicallum - Agencia de Marketing Digital para tu negocio.";
    const description = "Comunicallum es una agencia de marketing digital dedicada al aumento de alcance, optimización y propio manejo de la información en los negocios Mexicanos.";
    const keywords = "Marketing Digital, Monterrey, Calidad, Negocio con poca inversión, Marketing, Agencia, Agencia de Marketing, UpVent, UpVent Technologies, VentGrey";
    const image = "https://comunicallum.com/images/opengraph.jpeg"

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</svelte:head>

<!-- SEO component -->
<SvelteSeo
    title={title}
    description={description}
    keywords={keywords}
/>

<SvelteSeo
    openGraph={{
    title,
    description,
    url,
    images: [
      {
        url: image,
        width: 850,
        height: 650,
        alt: title,
      },
    ],
    }},
/>

<SvelteSeo
    twitter={{
        site: "@comunicallum",
        title: {title},
        description: {description},
        image: {image},
        imageAlt: "Logo Comunicallum Grande",
    }},
/>

<SvelteSeo
    jsonLd={{
        '@type': 'WebPage',
        mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://comunicallum.com/'
        },
        image: [
        'https://comunicallum.com/images/opengraph.jpeg',
        ],
        datePublished: '2021-01-03T17:31:37Z',
        author: {
        '@type': 'Person',
        name: 'El Equipo de Comunicallum'
        },
        }
    }}
/>

<!-- Navbar component -->
<Navbar/>

<!-- Index Jumbotron component -->
<IndexJumbotron/>

<!-- Plans Component -->
<Plans/>

<!-- Medal component -->
<Medal/>

<!-- Allies Logos Component -->
<Allies/>

<!-- Services Component -->
<Services/>

<!-- Contact Component -->
<Contact/>

<!-- Follow us on our socials! -->
<Socials/>

<!-- Footer component -->
<Footer/>

<!-- Goto top button (keep this all the way down) -->
<TopBtn/>
