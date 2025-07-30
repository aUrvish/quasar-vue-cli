<template>
  <q-page class="q-pr-lg">
    <q-card flat class="q-mt-lg q-pa-lg">
      <div class="text-h6 q-mb-md text-weight-medium">Resources Overview</div>

      <div class="row q-col-gutter-md q-mt-sm">
        <div
          v-for="({ icon, title, image }, index) in cards"
          :key="index"
          class="col-12 col-md-4"
        >
          <q-card bordered class="q-pt-sm">
            <q-item class="q-pa-sm">
              <q-item-section avatar>
                <q-btn
                  round
                  dense
                  :icon="`fa-solid ${icon}`"
                  size="16px"
                  class="q-ml-sm text-primary card-icon"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-dark text-body1 text-weight-bold">
                  {{ title }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-responsive :ratio="16 / 10">
              <img :src="image" class="q-pa-md" />
            </q-responsive>

            <q-card-section>
              <p class="q-ma-none text-body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="q-mt-md">
                <div class="q-px-none q-py-sm" v-for="i in 6" :key="i">
                  <p class="text-body1">Lorem, ipsum dolor.</p>
                  <q-separator v-show="i != 6" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<script setup>
const cards = [
  {
    icon: "fa-gear",
    title: "Tools and Guides",
    image:
      "https://plus.unsplash.com/premium_photo-1682430553117-f1d0edb35a14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: "fa-bullhorn",
    title: "News and Information",
    image:
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    icon: "fa-desktop",
    title: "Related Sites",
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>
