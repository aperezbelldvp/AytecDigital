<template>
    <div class="card bg-light text-center col-12 col-md-5 col-lg-4 col-xl-3"
        v-if="contact.first_name && contact.last_name">
        <img class="card-img-top p-4" :src="contact.image"
            :alt="`Image of a car ${contact.car_make}-${contact.car_model}`">
        <div class="card-body">
            <h5 class="card-title">{{ contact.first_name }} {{ contact.last_name }}</h5>
            <CardType :contact="contact" />
            <div class="car-info" v-if="contact.car_make && contact.car_model">
                <p class="card-text">{{ contact.car_make }}</p>
                <p class="card-text">{{ contact.car_model }}</p>
            </div>
        </div>
        <div class="row row-cols-2">
            <button class="col" @click="mail">
                <i class="bi bi-envelope-fill"></i> Email
            </button>
            <button class="col vertical-line" @click="call">
                <i class="bi bi-telephone-fill"></i> Call
            </button>
        </div>
    </div>
</template>

<script>
import CardType from './card-type.vue'

export default {
    props: ["contact"],
    setup(props) {
        const mail = () => {
            alert(props.contact.email)
        }
        const call = () => {
            alert(props.contact.phone)
        }
        return { mail, call }
    },
    components: {
        CardType
    }
}
</script>

<style scoped>
button {
    border: none;
    border-top: 1px solid #CCD1D1;
    padding: 1rem;
}

img {
    margin: auto;
    height: 150px;
    width: 250px;
    object-fit: scale-down;
}

.card-text {
    font-family: sans-serif;
}

.vertical-line {
    border-left: solid 1px #CCD1D1;
    margin: 0;
    padding: 0;
    ;
    height: auto;
}
</style>