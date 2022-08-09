<template>
    <section class="pt-140 pb-100 bg-light-gray-two">
        <div class="container">
            <h1 class="color-black text-center working-title color-black">Working with POST request</h1>
            <div class="container-two">
                <form @submit.prevent="postForm()">
                    <input id="" type="text" v-model="form.name" required placeholder="form.name" />
                    <input id="" type="text" v-model="form.email" required placeholder="form.email" />
                    <input id="" type="text" v-model="form.phone" required placeholder="form.phone" />
                    <input id="" type="number" v-model="form.position_id" required placeholder="form.position_id" />
                    <input type="file" @change="onFileSelected($event)" id="" />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        </div>
    </section>
</template>
<script>

import axios from 'axios';
export default {
    name: 'vueForm',
    data() {
        return {
            form: {
                name: "JastinsTest",
                email: "Bestsd@gmail.com",
                phone: "+380968749215",
                photo: [],
                positions: "Security",
                position_id: 2,
            },
            token: null,
        }
    },
    methods: {
        async Token() {
            try {
                const response = await fetch(
                    "https://frontend-test-assignment-api.abz.agency/api/v1/token"
                );
                const data = await response.json();

                this.token = data.token;
                console.log(this.token);
            } catch (error) {
                console.log(error);
            }
        },
        onFileSelected(event) {
            this.form.photo = event.target.files[0];
        },
        postForm() {
            const formData = new FormData();
            Object.keys(this.form).forEach((key) => {
                formData.append(key, this.form[key]);
                console.log(this.form[key])
            });
            axios({
                method: "POST",
                url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
                headers: {
                    Token: this.token,
                },
                data: formData,
            })
                .then((response) => {
                    console.log(response.data);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error.response);
                });
                console.log(formData)
        },
    },
    created() {

        this.Token();

        // this.Positions();
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



input:invalid {
    border: 2px dashed red;
}

input:invalid:required {
    background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
    border: 2px solid black;
}
</style>