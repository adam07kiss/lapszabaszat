<script setup>
import {ref} from 'vue'

const submitted = ref(false)
// const submitHandler = async () => {
//   // Let's pretend this is an ajax request:
//   await new Promise((r) => setTimeout(r, 1000))
//   submitted.value = true
// }

const formData = ref({
  name: "Név",
  email: "Email",
  subject: "Tárgy",
  message: "Message"
});

function encode(data) {
  return Object.keys(data)
      .map(
          (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
}

async function handleSubmit(data) {
  await (1000);
  console.log(data);
  fetch("/", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: encode({
      "form-name": "main-form",
      "name": data.name,
      "email": data.email,
      "subject": data.subject,
      "message": data.message
    }),
  })
      .catch((error) => alert(error));
  submitted.value = true
}
</script>

<template>
  <div class="bg-pictogram-gray">

    <div
        class="h-full w-full flex flex-col px-4 pb-10
       lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto justify-center font-poppins "
    >

      <div class="font-[600] text-[30px] text-center justify-center flex py-14">
        Kapcsolat
      </div>
      <div class="flex gap-16 lg:gap-20 flex-col md:flex-row">
        <div class="flex flex-col gap-4 basis-1/3">
          <span class="text-h4 font-poppins font-[500]">Elérhetőség</span>
          <div class="flex flex-col pl-2 gap-4 pb-4 text-slider-secondary-text">
            <p><span class="text-prices-color">Nagy Zsolt</span> üzemvezető</p>
            <a
                class="hover:text-prices-color"
                href="tel:+36204011683"
            >+36 20 401 1683</a>
            <span>H-P: 8-16</span>
            <a
                class="hover:text-prices-color"
                href="mailto: kisfastanyabutorgyartas@gmail.com"
            >kisfastanyabutorgyartas@gmail.com</a>
          </div>
          <img
              src="/img/kep3.jpg"
              width="300px"
              height="300px"
              alt="elérhetőség"
          >
        </div>
        <div class="flex flex-col gap-5 basis-2/3">

          <FormKit
              type="form"
              name="main-form"
              :form-class="submitted ? 'hide' : 'show'"
              @submit="handleSubmit"
              submit-label="Küldés"
              :actions="false"
              netlify-honeypot="bot-field"
          >
            <div class="flex gap-3 mb-5 ">
              <div class="basis-1/2">
                <FormKit
                    type="text"
                    name="name"
                    label="Név"
                    placeholder="Név"
                    validation="required"
                    input-class="flex w-full px-8 py-5 shadow-all-around rounded-sm"
                    label-class="hidden"
                />
              </div>
              <div class="basis-1/2">
                <FormKit
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    validation="required|email"
                    input-class="flex w-full px-8 py-5 shadow-all-around rounded-sm"
                    label-class="hidden"
                />
              </div>
            </div>
            <FormKit
                type="text"
                name="subject"
                label="Tárgy"
                placeholder="Tárgy"
                validation="required"
                input-class="flex w-full px-8 py-5 shadow-all-around rounded-sm"
                label-class="hidden"
            />
            <FormKit
                type="textarea"
                name="message"
                label="Üzenet"
                placeholder="Ide írja az üzenetét..."
                validation="required|length:20"
                input-class="flex w-full px-8 py-[247px] shadow-all-around rounded-sm pt-5"
                outer-class="mt-5"
                label-class="hidden"
            />

            <FormKit
                type="submit"
                placeholder="Küldés"
                input-class="flex my-5 text-white px-14 py-3.5 rounded border-btn-blue transition-all bg-btn-blue duration-300 shadow-md w-max
                hover:bg-white hover:text-btn-blue border-2 hover:transition-all hover:duration-300"
            />
          </FormKit>
          <div v-if="submitted">
            <h2>Üzenet elküldve!</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
