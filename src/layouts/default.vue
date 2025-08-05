<template>
  <v-main>

    <alert-al v-if="alertStore.showAlert"></alert-al>
    <view-app />

  </v-main>

  <!-- Crie componentes globais aqui -->
</template>

<script setup>
import ViewApp from './ViewApp.vue';
import AlertAl from '@/components/AlertAl.vue';//Importa o componente alert
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore()
</script>
