<template>
    <div class="container">
        <!-- Si existe rol lo mostramos y usamos una clase dinámica para modificar su color -->
        <p v-if="contact.role" class="contact-type" :class="contact.role == 'comprador' ? 'comprador' : 'vendedor'">{{ contact.role }}</p>
        <!-- Si no tiene rol mostramos Desconocido con el color establecido en las especificaciones -->
        <p v-else class="contact-type" style="background: lightcoral">desconocido</p>
    </div>
</template>

<script>
export default {
    props: ["contact"]
}
</script>

<style scoped>
.contact-type {
    color: white;
    margin: 1rem auto;
    width: 60%;
    padding: 0.5rem;
    border-radius: 1rem;
}
.contact-type::first-letter {
    text-transform: uppercase;
}

.comprador {
    background: lightgreen;
}

.vendedor {
    background: lightskyblue;
}
</style>