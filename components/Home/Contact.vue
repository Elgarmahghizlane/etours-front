<template>
  <div class="relative my-[4rem]">
    <div class="flex flex-col md:flex-row justify-between my-4 ">
      <div class="">
        <div class="md:mx-24 mx-4">
          <h1 class="font-bold text-base text-[#235a61] text-center md:text-left">
            {{ title }}
          </h1>
          <p v-html="parag" class="font-bold font-sans lg:text-4xl md:text-3xl text-xl text-center md:text-left ">
          </p>
        </div>
        <div class="mt-8 md:mx-24 mx-4">
          <div v-for="coord in coordonnées" :key="coord" class="flex flex-wrap">
            <img class="w-6 " :src=coord.icon alt="">
            <span class=" pl-4 pt-2">
              <span class="font-bold">
                {{ coord.item }} : <br>
              </span>
              <span class="text-sm">
                {{ coord.value }}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="map md:w-[50%] h-[330px] my-8 mx-4 md:mx-0">
        <Maps />
      </div>
    </div>
      <form class="md:absolute md:inset-0 md:top-[3rem] mx-auto p-4 max-w-[350px] bg-[#F4F4F4] rounded-[20px] ">
        <div class="mb-2">
          <input v-model="form.firstname" type="name" id="name"
            class="text-gray-900 font-light text-sm rounded-lg w-full p-3 " placeholder="First Name" />
        </div>
        <div class="mb-2">
          <input v-model="form.lastname" type="name" id="name"
            class="text-gray-900 font-light text-sm rounded-lg w-full p-3 " placeholder="Last Name" />
        </div>
        <div class="mb-2">
          <input v-model="form.email" type="email" id="email"
            class="text-gray-900 font-light text-sm rounded-lg w-full p-3 " placeholder="Email" />
        </div>
        <div class="mb-2">
          <MazPhoneNumberInput v-model="form.phoneNumber" @update="results = $event" />
        </div>
        <div class="mb-2">
          <textarea v-model="form.message" id="message" rows="2"
            class="text-gray-900 font-light text-sm rounded-lg w-full p-3" placeholder="Message">
          </textarea>
        </div>
        <div class="text-center w-full mb-2">
          <button type="submit" class="bg-[#235a61] w-full rounded-full text-white text-center h-8 ">
            Submit
          </button>
        </div>
      </form>
  </div>
</template>
<script>
import { MazPhoneNumberInput } from 'maz-ui'
import Maps from './Maps'
export default {
  components: { MazPhoneNumberInput, Maps },
  name: 'ContactUs',
  data() {
    return {
      title: 'CONTACT US!',
      parag: 'We are happy to <br> hear from you',
      coordonnées: [
        { item: 'Phone', value: '+212 600 000 000', icon: require('../../static/icons/phone.svg') },
        { item: 'Fix', value: '+212 560 000 000', icon: require('../../static/icons/phone.svg') },
        { item: 'Email', value: 'contact@etours.com', icon: require('../../static/icons/email.svg') },
        { item: 'Address', value: 'Agadir, Maroc.', icon: require('../../static/icons/map.svg') }
      ],
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        message: ''
      }
    }
  }
}
</script>
