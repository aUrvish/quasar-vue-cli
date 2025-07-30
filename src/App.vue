<template>
  <q-layout view="1Ff LpR fFf">
    <Navbar />
    <Drawer />

    <q-page-container class="q-ml-lg">
      <q-page class="q-pa-sm">
        <q-toolbar class="q-pa-sm justify-between page-toolbar">
          <q-btn
            round
            dense
            icon="fa-solid fa-left-long"
            class="q-ml-sm q-pa-md page-back-btn"
            color="primary"
          />
          <q-toolbar-title class="text-center text-h6">
            Resources
          </q-toolbar-title>
          <div style="width: 40px"></div>
        </q-toolbar>

        <Resources />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Navbar from "./components/AppNavbar.vue";
import Drawer from "./components/AppDrawer.vue";
import Resources from "./pages/ResourcesPage.vue";
</script>
