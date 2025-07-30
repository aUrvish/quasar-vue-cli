<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="q-pa-none justify-between q-py-md toolbar-x">
      <div>
        <a href="#" class="text-white q-ma-none text-h5 logo">Logo</a>
      </div>
      <div class="row items-center q-gutter-sm text-white">
        <div class="text-subtitle2">Go to:</div>
        <q-btn flat dense no-caps size="14px" label="Ratings" />
        <q-separator vertical dark />
        <q-btn flat dense no-caps size="14px" label="Designators" />
        <q-separator vertical dark />
        <q-btn flat dense no-caps size="14px" label="Credential Search" />
        <q-btn
          outline
          dense
          icon="fa-solid fa-search"
          color="white"
          size="7px"
          class="q-ml-lg q-px-sm no-border-radius search-btn"
          aria-label="Search"
        />
      </div>
    </q-toolbar>
    <div
      class="bg-secondary text-white flex items-center justify-between toolbar-x"
    >
      <div class="row q-gutter-md items-center">
        <q-btn-dropdown
          v-for="(link, index) in dropdowns"
          :key="index"
          dense
          flat
          size="12px"
          :label="link.title"
          dropdown-icon="fa-solid fa-chevron-down"
          class="chevron-icon-fs"
        >
          <q-list>
            <q-item
              v-for="(item, ind) in link.list"
              :key="ind"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>{{ item }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div
        class="q-px-md text-black bg-warning text-weight-bold text-body2 announcement-caption"
      >
        ANNOUNCEMENTS
      </div>
    </div>
  </q-header>
</template>
<script setup>
import { ref } from "vue";

const dropdowns = ref([
  {
    title: "Get Certified",
    list: ["Dropdown Item"],
  },
  {
    title: "Explore Occupations",
    list: ["Dropdown Item"],
  },
  {
    title: "Develop Professionally",
    list: ["Dropdown Item"],
  },
  {
    title: "Resources",
    list: ["Dropdown Item"],
  },
  {
    title: "Support",
    list: ["Dropdown Item"],
  },
]);
</script>
<style scoped>
.logo {
  text-decoration: none;
}

.search-btn {
  padding-top: 6px;
  padding-bottom: 6px;
}

.toolbar-x {
  padding-left: 100px;
  padding-right: 100px;
}

.announcement-caption {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
<style>
.fa-chevron-down {
  font-size: 10px !important;
}
</style>
