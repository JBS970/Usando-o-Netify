<template>
    <!-- Cria o campo de texto(input) -->
    <v-text-field :rules="rules" clearable label="Adicionar Tarefa" v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask()"></v-text-field>
    <!-- Chama diretamente de store o metodo taskStore.addTask -->

    <!-- Envia o array tasks para o ListTask.vue -->
    <list-tasks></list-tasks>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();//Recupera a referencia do store

//Regra de validação do campo de texto Adiciona Tarefa
const rules = [value => {
    if (!value || value.length >= 5) return true //Se nao tiver valor ou se valor for < 5 caracteres
    return 'Voce deve usar um titulo para a tarefa com mais de 5 caracteres.'
}]

//Toda vez que o app for montado(inicializado)
onMounted(() => {
    taskStore.getTasks() //Recupera as tarefas salvas em localStorage
})

</script>