<template>
    <section class="bg-light-gray-two">
        <div class="container pt-140">
            <h1 class="color-black text-center working-title">Working with GET request</h1>
            <div class=" mt-50" v-if="users.length === 0">
               <Loading/>
            </div>
            <div v-else>
                <div class="mt-50">
                    <div class="flex cards-block flex-wrap mlb-30">
                        <vueWorkingCard v-for="user in users" :key="user.id" :user="user" />
                    </div>
                </div>
                <div class="mt-50" v-if="loading">
                    <Loading />
                </div>
                <div v-else>
                    <div class="flex justify-center mt-50" v-if="hiddenBtn">
                        <button @click="ShowMore()" class="bg-yellow p-22 border-radius">Show more </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import vueWorkingCard from './vueWorkingCard.vue';
import { getUsers } from '../api/api.js';
import Loading from '../components/Loading.vue'
import { Fetching } from '@/api/Fetching'
export default {
    name: 'vueWorking',
    components: {
        vueWorkingCard,
        Loading
    },
    data() {
        return {
            users: [],
            total_users: 0,
            limitCount: 6,
            page: 1,
            total_count: 0,
            loading: null,
            hiddenBtn: true
        }
    },
    methods: {
        Users() {
            const [fetching, isLoading, errorMsg] = Fetching(async () => {
                const response = await getUsers(this.limitCount, this.page);
                this.total_users = response.total_users;
                this.users = response.users;
                this.hiddenButton(this.total_users)
                

            })
            fetching()
            this.loading = isLoading;
            console.log(errorMsg)
        },
        ShowMore() {
            this.limitCount = this.limitCount += 6;
            this.Users();
        },
        hiddenButton(total_users) {
            let total_userss = total_users -= this.limitCount
            console.log(total_userss)
            if (total_userss >= 0) {
                this.hiddenBtn = true;
            } else {
                this.hiddenBtn = false;
            }

        }
    },
    created() {
        this.Users();
    },
}
</script>

<style>
.cards-block {
    justify-content: center;
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