<template>
    <div class="text-center pa-4" persistent>


        <v-dialog v-model="taskStore.showDialogTaskFileds" max-width="600" persistent>
            <v-card max-width="400" prepend-icon="mdi-update" title="Editar Tarefa">

                <v-card-text>
                    <!-- Faz o data binding bidirecional com a propriedade title do objeto task, que esta declarada em TodoList.vue -->
                    <v-text-field label="Title" v-model="props.task.title"></v-text-field>
                    <v-text-field label="Description" v-model="props.task.description"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <!-- Para fechar o modal sempre utilizamos um lançador de evento como o '$emit()' que lança a funcao toggle-->
                    <v-btn color="primary" variant="elevated" text="Ok" @click="taskStore.toggleEdit()"></v-btn>

                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();//Recupera a referencia do store

//- defineProps é uma função especial do Vue 3 usada dentro de <script setup> para declarar as props que um componente espera receber.
const props = defineProps({ task: Object })


</script>
