<template>
  <q-drawer show-if-above side="left" bordered>
    <q-list>
      <q-item-label header class="invisible">Lorem</q-item-label>
      <template v-for="(item, index) in items" :key="index">
        <q-expansion-item class="main-sidebar" group="mainsidebar">
          <template v-slot:header>
            <q-item-section avatar class="avatar-div">
              <q-icon size="20px" :name="item.icon" />
            </q-item-section>

            <q-item-section class="text-weight-medium text-body1">
              {{ item.title }}
            </q-item-section>
          </template>
          <q-item
            clickable
            v-ripple
            v-for="(page, ind) in item.pages"
            :key="ind"
          >
            <q-item-section>
              {{ page }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-separator />
      </template>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "Resources Overview",
    icon: "fa-solid fa-list-ul",
    pages: [
      "Resources Overview Page 1",
      "Resources Overview Page 2",
      "Resources Overview Page 3",
    ],
  },
  {
    title: "Tools and Guides",
    icon: "fa-solid fa-gear",
    pages: [
      "Tools and Guides Page 1",
      "Tools and Guides Page 2",
      "Tools and Guides Page 3",
    ],
  },
  {
    title: "News and Information",
    icon: "fa-solid fa-bullhorn",
    pages: [
      "News and Information Page 1",
      "News and Information Page 2",
      "News and Information Page 3",
    ],
  },
  {
    title: "Related Sites",
    icon: "fa-solid fa-desktop",
    pages: [
      "Related Sites Page 1",
      "Related Sites Page 2",
      "Related Sites Page 3",
    ],
  },
]);
</script>
<style>
.main-sidebar .q-expansion-item__toggle-icon {
  display: none;
}

.main-sidebar .q-item__section--avatar {
  min-width: fit-content;
}

.q-expansion-item--expanded > .q-expansion-item__container > div:first-child {
  background-color: var(--primary-color);
  color: white;
}
</style>
