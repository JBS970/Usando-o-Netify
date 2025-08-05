<template>
    <div class="text-center pa-4">

        <!-- Componente Modal -->
        <v-dialog v-model="taskStore.showDialogDelete" max-width="600" persistent>
            <v-card max-width="400" prepend-icon="mdi-update" title="Deletar Tarefa">

                <!-- Componente alert Faz o data binding bidirecional com a propriedade title do objeto task, que esta declarada em TodoList.vue -->
                <v-card-text>
                    <v-card title="A tarefa será Deletada" color="red">{{
                        taskStore.tasks[taskStore.indexTextSelect]
                        }}</v-card>
                </v-card-text>

                <template v-slot:actions>
                    <!-- Para fechar o modal a funcao toggle-->
                    <v-btn color="red-darken-1" variant="elevated" text="No" @click="taskStore.toggleDelete"></v-btn>
                    <v-btn color="green-darken-1" variant="elevated" text="Yes" @click="taskStore.deleteTask"></v-btn>

                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task';
import { useAlertStore } from '@/stores/alert';

const taskStore = useTaskStore();//Recupera a referencia do store
const alertStore = useAlertStore();//Recupera a referencia do store


</script>