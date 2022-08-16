<template>
    <div class="pxl-30" v-if="user">
        <div class="bg-white p-20 border-radius-10 text-center card mb-29 ">
            <img :src="user.photo" class="card-img" alt="">
            <p class="pt-20 line-height name">{{ limit(user.name) }}</p>
            <p class="pt-20 line-height position">{{ user.position }}</p>

            <div class="block bg-hover">
                <p class="email line-height">{{ limit(user.email) }}</p>
                <p class="email email-hover line-height">{{ user.email }}</p>
            </div>
            <p class=" line-height phone_number">{{ user.phone }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'vueWorkingCard',
    props: ['user'],
    methods: {
        limit(textLimit) {
            if (textLimit.length < 20) {
                return `${textLimit}`;
            } else if (textLimit.length < 20 === false) {
                return `${textLimit.slice(textLimit[textLimit.length - 1], 15)} ...`;
            }
        },
    },
}
</script>
<style>
/* vueWorkingCard */
.card {
    width: 280px;
}

/* font-size */
.line-height {
    line-height: 26px;
}

/* padding */
.p-20 {
    padding: 20px 20px 20px 20px;
}

.pt-20 {
    padding-top: 20px;
}

.pxl-30 {
    padding-left: 30px;
    padding-bottom: 30px;
}

/* border-radius  */
.border-radius-10 {
    border-radius: 10px;
}

/* card img*/
.card-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.block {
    position: relative;
}

.block>.email-hover {
    opacity: 0;
    background: rgba(0, 0, 0, 0.87);
    color: #fff;
    border-radius: 4px;
    padding: 5px 16px;
    position: absolute;

    bottom: -5px;
    left: -50;
    transition: 0.3s linear;
}

.block:hover>.email {
    opacity: 1;
    cursor: pointer;


}

/* media 1024 */

@media (max-width: 1024px) {}

/* media 768px */

@media (max-width: 768px) {
    .card {
        max-width: 344px;
    }

    .pxl-30 {
        padding-left: 16px;
        padding-bottom: 16px;
    }
}

/* media 360px */

@media (max-width: 360px) {
    .card {
        max-width: 328px;
    }

    .pxl-30 {
        padding-left: 0px;
        padding-bottom: 20px;
    }
}
</style>