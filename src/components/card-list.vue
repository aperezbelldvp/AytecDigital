<template>
    <div class="container w-auto">
        <div class="row justify-content-center">
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
        const store = useStore()
        const contacts = computed(() => {
            return store.getters.getContacts
        })

        onMounted(async () => {
            await store.dispatch('fetchContacts')
        })
        return { contacts }
    },
    components: {
        card
    }

}
</script>

<style scoped>
.container {
    padding: 1.5rem;
}
.card-car {
    margin: 10px;
}
</style>