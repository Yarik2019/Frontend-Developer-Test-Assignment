<template>
    <section class="bg-light-gray-two">
        <div class="container pt-140">
            <h1 class="color-black text-center working-title">Working with GET request</h1>
            <div class="mt-50">
                <div class="flex cards-block flex-wrap mlb-30">
                    <vueWorkingCard v-for="user in users[0]" :key="user.id" :user="user" />
                </div>
            </div>
            <div class=" mt-50" v-if="loading[1]">
                <Loading />
            </div>
            <div class="flex justify-center mt-50" v-else>
                <button @click="ShowMore()" class="bg-yellow p-22 border-radius">Show more</button>
            </div>
        </div>
    </section>
</template>
<script>
import vueWorkingCard from './vueWorkingCard.vue';
import { getUsers } from '../api/api.js';
import Loading from '../components/Loading.vue'
export default {
    name: 'vueWorking',
    components: {
        vueWorkingCard,
        Loading
    },
    data() {
        return {
            users: [],
            total_users: [],
            count: 6,
            loading: false
        }
    },
    methods: {
        async Users(count, loading) {

             this.users = [...await getUsers(count, loading)]
             this.loading = [...await getUsers(count, loading)]
             this.total_users = [...await getUsers(count, loading)]
        },
        ShowMore() {
            this.count = this.count += 6;
            this.Users(this.count, this.loading);
        },
        // buttonHidden(){
        //     this.total_users = this.total_users[2].total_users - this.count 
        //      console.log(this.total_users > 0)
        //     return this.total_users > 0
        // }
    },
    computed:{
    //    buttonHidden(){
    //    return  (this.total_users[2].total_users - this.count) > 0
    //    },
    //    hidden(){
    //    return this.total_users = this.buttonHidden()
    //    }
    },
    created() {
        this.Users();
        this.hidden
    }
}
</script>

<style>
.cards-block {
    justify-content: center;
}

.block-test {
    height: 10vh;
    background-color: red;
}

.mlb-30 {
    margin-left: -30px;
    margin-bottom: -30px;
}

.pb-29 {
    padding-bottom: 29px;
}

/* media 1024 */

@media (max-width: 1024px) {}

/* media 768px */

@media (max-width: 768px) {
    .mlb-30 {
        margin-left: -16px;
        margin-bottom: -16px;
    }
}

/* media 360px */

@media (max-width: 360px) {
    .mlb-30 {
        margin-left: 0px;
        margin-bottom: -20px;
    }
}
</style>