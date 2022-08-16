<template>
    <section class="pt-140 pb-100 bg-light-gray-two">
        <div class="container">
            <h1 class="color-black text-center working-title color-black">Working with POST request</h1>
            <div class="container-two">
                <form @submit.prevent="postForm()" class="pt-50">
                    <div class="">
                        <input type="text" class="w-full p-input border-input bg-white-input" required
                            placeholder="Your name" v-model="form.name">
                    </div>
                    <div class="pt-50">
                        <input type="text" class="w-full p-input border-input bg-white-input" required
                            placeholder="Email" v-model="form.email">
                    </div>
                    <div class="pt-50">
                        <input type="text" class="w-full p-input border-input bg-white-input" required
                            placeholder="Phone" v-model="form.phone" id="phone">
                        <label for="phone " class="lable-phone color-gray color-black">+38 (XXX) XXX - XX - XX</label>
                    </div>

                    <div class="mt-25">
                        <h4 class="title-radio">Select your position</h4>
                        <div class="container-radio" v-for="position in positions" :key="position.id">
                            <input type="radio" class="hidden" :id="`input${position.id}`" v-model="position_id"
                                @click="PositionId(position.id)" name="inputs">
                            <label class="entry" :for='`input${position.id}`'>
                                <div class="circle"></div>
                                <div class="entry-label">{{ position.name }}</div>
                            </label>

                            <div class="highlight"></div>
                            <div class="overlay"></div>
                        </div>
                    </div>

                    <div class="upload mt-50">
                        <input type="file" class="input-image" @change="onFileSelected($event)" ref="fileImg"
                            accept="image/jpeg">
                        <div class="upload-block">
                            <button type="button" class="uploadBtn" @click="$refs.fileImg.click()">Upload</button>
                            <div v-if="!form.photo.name" class="upload-photo">Upload your photo</div>
                            <div v-else class="upload-photo">{{ form.photo.name }}</div>
                        </div>
                    </div>
                    <div class="text-center mt-50">
                        <button type="submit" class="p-22 bg-gray border-radius color-white">Sing-up</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import { Fetching } from '@/api/Fetching';
import { getToken, postUsers, getPositions } from '../api/api'
export default {
    name: 'vueForm',
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                photo: [],
                position_id: null,
            },
            token: null,
            positions: [],
        }
    },
    methods: {
        Positions() {
            const [fetching, isLoading, errorMsg] = Fetching(async () => {
                const data = await getPositions();
                this.positions = data.positions;
            })

            fetching();
            console.log(isLoading);
            console.log(errorMsg)
        },
        PositionId(id) {
            this.form.position_id = id;
        },
        onFileSelected(event) {
            this.form.photo = event.target.files[0];
        },
        Token() {
            const [fetching, isLoading, errorMsg] = Fetching(async () => {
                const data = await getToken();
                this.token = data.token;
            })

            fetching();
            console.log(isLoading);
            console.log(errorMsg)
        },
        postForm() {
            const formData = new FormData();
            Object.keys(this.form).forEach((key) => {
                formData.append(key, this.form[key]);
                console.log(this.form[key])
            });

            const [fetching, isLoading, errorMsg] = Fetching(async () => {
                const data = await postUsers(formData, this.token);
                console.log(data);
                this.form.name = '';
                this.form.email = '';
                this.form.phone = '';
                this.form.photo = [];
                this.form.position_id = null;
            })
            fetching();
            console.log(isLoading);
            console.log(errorMsg)
        },

    },
    created() {
        this.Token();
        this.Positions()
    }

}


</script>
<style>
/* margin */
.mt-25 {
    margin-top: 25px;
}

.pb-100 {
    padding-bottom: 100px;
}


.p-input {
    padding: 16px 14px;
}

.border-input {
    border: 1px solid #D0CFCF;
    border-radius: 4px;
}

.bg-white-input {
    transition: 0.3s linear;
}

.bg-white-input:hover {
    background: white;
}

.color-gray {
    color: #7E7E7E;

}

.lable-phone {
    margin-top: 4px;
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
}


/* radio button */

.title-radio {
    font-size: 1rem;
}

.check {
    bottom: 0;
    display: flex;
    left: calc(50% + 40px);
    margin-bottom: 10px;
    position: absolute;
}

.container-radio {
    position: relative;
    margin-left: -10px;
    overflow: hidden;
    width: 100%;
    height: 36px;
}

.hidden {
    display: none;
}

.entry {
    height: 25px;
    position: absolute;
    width: 100%;
}

.entry:nth-child(2) {
    left: 8px;
    top: 8px;
}

.entry:nth-child(4) {
    left: 8px;
    top: 40px;
}

.entry:nth-child(6) {
    left: 8px;
    top: 75px;
}

.entry:nth-child(8) {
    left: 8px;
    top: 108px;
}

.circle {
    border: 1px solid #D0CFCF;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    position: absolute;
    transition: border-color 300ms;
    width: 20px;
}

.entry-label {
    cursor: pointer;
    margin-top: -1px;
    padding-left: 30px;
    user-select: none;
    -moz-user-select: none;
}

.overlay {
    height: 140px;
    pointer-events: none;
    transition: background 300ms;
    width: 40px;
}

.highlight {
    background: #00BDD3;
    border-radius: 50%;
    height: 12px;
    left: 12px;
    pointer-events: none;
    position: absolute;
    top: 12px;
    transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.2);
    transform: translateY(-50px);
    width: 12px;
}

.hidden:nth-child(1):checked~.highlight {
    transform: translateY(0);
}

.hidden:nth-child(3):checked~.highlight {
    transform: translateY(32px);
}

.hidden:nth-child(5):checked~.highlight {
    transform: translateY(67px);
}

.hidden:nth-child(7):checked~.highlight {
    transform: translateY(100px);
}

.hidden:nth-child(1):checked+.entry .circle {
    border-color: #00BDD3;
}

.hidden:nth-child(3):checked+.entry .circle {
    border-color: #00BDD3;
}

.hidden:nth-child(5):checked+.entry .circle {
    border-color: #00BDD3;
}

.hidden:nth-child(7):checked+.entry .circle {
    border-color: #00BDD3;
}


/* upload img  */
.input-image {
    display: none;
}

.upload-block {
    display: flex;
    width: 100%;
}

.uploadBtn {
    padding: 15px;
    background: #E5E5E5;
    color: rgba(0, 0, 0, 0.87);
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
}

.upload-photo {
    color: #7E7E7E;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
}
</style>