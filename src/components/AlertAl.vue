<template>
    <div class="alert-notification">
        <!-- Aqui estamos usando uma classe de animação,uma cor 'success' ,um titulo e texto dinamicos,
          declarando no store as variaveis reativas 'alert.js',e chamando a funcao em stores/task.js alertStore.notifyAlert("Adicionar Tarefa", "Tarefa adicionada com  sucesso.") -->
        <v-alert class="animate__animated animate__bounce" type="success" :title="alertStore.alertTitle"
            :text="alertStore.alertText" closable>
        </v-alert>
    </div>
</template>

<script setup>
import 'animate.css'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore()//Recupera referencia do store

</script>



<style scoped>
.alert-notification {
    position: absolute;
    z-index: 1;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
