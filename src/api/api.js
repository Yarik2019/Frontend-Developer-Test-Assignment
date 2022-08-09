// get Users

export const getUsers = async (limitCount = 6, loading) => {
  try {
    loading = true;
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${limitCount}`
    );
    const data = await response.json();
    loading = false;
    return [data.users, loading, data];
  } catch (error) {
    console.log(error.message);
  }
};

// post users 

{/* <form @submit.prevent="postForm()" class="pt-50">
                    <div class="">
                        <input type="text" class="w-full p-input border-input bg-white-input" placeholder="Your name"
                            v-model="name">
                    </div>
                    <div class="pt-50">
                        <input type="text" class="w-full p-input border-input bg-white-input" placeholder="Email"
                            v-model="email">
                    </div>
                    <div class="pt-50">
                        <input type="text" class="w-full p-input border-input bg-white-input" placeholder="Phone"
                            v-model="phone" id="phone">
                        <label for="phone " class="lable-phone color-gray color-black">+38 (XXX) XXX - XX - XX</label>
                    </div>

                    <div class="mt-25">
                        <h4 class="title-radio">Select your position</h4>
                        <div class="container-radio" v-for="position in positions" :key="position.id" >
                            <input type="radio" class="hidden" :id="`input${position.id}`" v-model="position_id" @click="PositionId(position.id)" name="inputs">
                            <label class="entry" :for='`input${position.id}`'>
                                <div class="circle"></div>
                                <div class="entry-label">{{ position.name }}</div>
                            </label>

                            <div class="highlight"></div>
                            <div class="overlay"></div>
                        </div>
                    </div>

                    <div class="upload mt-50">
                        <input type="file">
                    </div>
                    <div class="text-center mt-50">
                        <button type="submit" class="p-22 bg-gray border-radius color-white">Sing-up</button>
                    </div>
                </form> */}