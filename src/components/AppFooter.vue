<template>
  <q-footer class="text-black text-center">
    <q-toolbar class="top-footer justify-between q-py-md toolbar-x">
      <div class="row q-col-gutter-xl q-mx-auto">
        <div class="column">
          <div class="text-body1 q-mb-sm">Quick Links</div>
          <q-list dense>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 1</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 2</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 3</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="column">
          <div class="text-body1 q-mb-sm">Quick Links</div>
          <q-list dense>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 1</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 2</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 3</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="column">
          <div class="text-body1 q-mb-sm">Quick Links</div>
          <q-list dense class="q-px-none">
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 1</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 2</q-item-section>
            </q-item>
            <q-item clickable class="text-left q-px-sm">
              <q-item-section>Link 3</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="footer-right">
        <p class="text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, qui!
        </p>
        <p class="text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, qui!
        </p>
      </div>
    </q-toolbar>
    <q-toolbar class="justify-between q-py-sm toolbar-x">
      <p class="q-ma-none text-white">© 2025 My App - All rights reserved.</p>
      <p class="q-ma-none text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </q-toolbar>
  </q-footer>
</template>
<style scoped>
.top-footer {
  background-color: var(--bg-secondary);
}

.footer-right {
  max-width: 250px;
}
</style>
