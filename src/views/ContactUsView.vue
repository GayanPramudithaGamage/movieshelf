<template>
    <div class=" min-h-screen bg-black text-white p-6 md:p-12">
      <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-2 font-Roboto ">How to reach us</h2>
      <p class="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consetetur.</p>
  
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-1">First Name *</label>
              <input v-model="form.firstName" type="text" title="firstName" placeholder="" class="w-full p-2 rounded bg-gray-800 border border-gray-600" />
              <span v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</span>
            </div>
            <div>
              <label class="block mb-1">Last Name *</label>
              <input v-model="form.lastName" type="text" title="lastName" placeholder="" class="w-full p-2 rounded bg-gray-800 border border-gray-600" />
              <span v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</span>
            </div>
          </div>
  
          <div>
            <label class="block mb-1">Email *</label>
            <input v-model="form.email" type="email" title="email" placeholder="" class="w-full p-2 rounded bg-gray-800 border border-gray-600" />
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>
  
          <div>
            <label class="block mb-1">Telephone</label>
            <input v-model="form.phone" type="tel" title="telNumber" placeholder="" class="w-full p-2 rounded bg-gray-800 border border-gray-600" />
          </div>
  
          <div>
            <label class="block mb-1">Message *</label>
            <textarea v-model="form.message" rows="4" title="message" placeholder="" class="w-full p-2 rounded bg-gray-800 border border-gray-600"></textarea>
            <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
          </div>
  
          <p class="text-sm text-gray-400">* required fields</p>
  
          <div class="flex items-center space-x-2">
            <input v-model="form.agree" type="checkbox" title="terms&conditions" placeholder="" id="agree" class="accent-yellow-600" />
            <label for="agree" class="text-sm">I agree to the <a href="#" class="underline">Terms & Conditions</a></label>
          </div>
          <span v-if="errors.agree" class="text-red-500 text-sm">{{ errors.agree }}</span>
  
          <button type="submit" class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded mt-2">
            SUBMIT
          </button>
        </form>
  
        <!-- Embedded Google Map -->
        <div class="rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            class="w-full h-full min-h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12147.118819676547!2d-3.670057342517097!3d40.435876669958816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2slk!4v1747469119411!5m2!1sen!2slk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  })
  
  const errors = reactive({})
  
  function handleSubmit() {
    // Clear errors
    Object.keys(errors).forEach((key) => (errors[key] = ''))
  
    // Validate
    if (!form.firstName) errors.firstName = 'First name is required.'
    if (!form.lastName) errors.lastName = 'Last name is required.'
    if (!form.email) errors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email format.'
    if (!form.message) errors.message = 'Message is required.'
    if (!form.agree) errors.agree = 'You must agree to the Terms & Conditions.'
  
    // If no errors, do something (e.g., send form)
    if (Object.values(errors).every((v) => v === '')) {
      alert('Form submitted successfully!')
      // Reset form or send to backend here
    }
  }
  </script>
  