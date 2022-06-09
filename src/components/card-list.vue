<template>
    <div class="container w-auto">
        <div class="row justify-content-center animate__animated animate__backInDown">
            <card class="card-car" v-for="contact in contacts" :key="contact.id" :contact="contact" />
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from 'vue';
import card from './card.vue'

export default {
    setup() {
        // Cargamos la store
        const store = useStore() 
        // Llenamos contacts con el getter de la store
        const contacts = computed(() => {
            return store.getters.getContacts
        })
        // Con onMounted ejecutamos el fetch tras montar el componente
        onMounted(async () => {
            await store.dispatch('fetchContacts')
        })
        /* return en Vue nos permite pasar las variables/funciones al template para su consumo
        */
        return { contacts }
    },
    components: {
        card
    }

}
</script>

<style scoped>
/* La propiedad scoped evita que los estilos se propaguen, es decir, solo afectan a ese componente */
.container {
    padding: 1.5rem;
}
.card-car {
    margin: 10px;
}
</style>