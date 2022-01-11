<script>
    export let showOnPx = 150;
    let hidden = true;


    /** @function */
    function goTop() {
        document.body.scrollIntoView();
    }


    /** @function */
    function scrollContainer() {
        return document.documentElement || document.body;
    }


    /** @function */
    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }

</script>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 40px;
    user-select: none;
    bottom: 40px;
    color: white;
    background-color: black;
    border-radius: 20%;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

<svelte:window on:scroll={handleOnScroll}  />

<div class="back-to-top" on:click={goTop} class:hidden><i class="my-2 px-2 bi bi-caret-up-fill"></i></div>
