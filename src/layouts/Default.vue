<template>
  <div class="layout">
    <header class="bg-rouge">
      <button @click="skip" class="bg-rouge text-gold px-3 py-2" id="skip">Skip to Content</button>
      <div class="h-3 bg-black"></div>
      <nav class="flex container mx-auto">
        <div class="flex-1">
          <g-link href="/" class="text-2xl">coconnell.me</g-link>
        </div>
      </nav>
    </header>
    <main class="container mx-auto">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  setup() {
    const skip = () => {
      const main = document.querySelector('main')
      main.setAttribute("tabindex", "-1");
      main.focus()
      main.removeAttribute("tabindex");
    }

    return {
      skip
    }
  }
}
</script>

<style scoped>
#skip {
  position: absolute;
  top:-100%;
  left:0;
  z-index: 999;
}
#skip:focus{
  top:0;
}
</style>
