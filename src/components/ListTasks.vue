<template>
    <div>

        <!-- Area central do app -->
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>Tarefas</v-list-subheader>

            <!-- Renderiza os checkboxs com os rotulos                 Este :value="task.id || index" resolve o erro de mesmo id criado pelo loop  -->
            <v-list-item v-for="(task, index) in taskStore.tasks" :key="index" :value="task.id || index"
                @click="taskStore.toggleDoneTask(index)">
                <!-- Foi adicionado o evento de alternar o check do checkbox: ele alterna e sava no localStorage,passando o indice do item -->

                <template v-slot:prepend="{ }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>

                </template>
                <v-list-item-title>{{ task.title }}</v-list-item-title>
                <v-list-item-subtitle>
                    {{ task.description }}
                </v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <!-- Isso indica que você está usando um slot nomeado chamado activator. Esse slot é geralmente usado para definir o elemento que ativa algo
      — como abrir um menu, um diálogo, ou um popover.{ props } Isso é desestruturação de objeto.Isso é desestruturação de objeto.
       O componente pai (como um v-menu, v-dialog, etc.) passa propriedades para o slot-->
                        <template v-slot:activator="{ props }">
                            <!-- botao Icone da lista de tarefas -->
                            <v-btn color="grey-lighten" icon="mdi-dots-vertical" variant="text" v-bind="props">
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                                <!-- Item do menu -->
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>

            </v-list-item>
        </v-list>
        <!-- Para exibir ou nao o este dialogo passamos o valor para o componente 'DialogTaskFields.vue' -->
        <!-- <dialog-task-fields :dialog="showDialogTaskFileds"></dialog-task-fields> -->

        <!--
         -- Passa a variável showDialogTaskFileds como uma prop para o componente DialogTaskFields.vue
         -- @toggle="toggle"Escuta o evento personalizado toggle emitido pelo componente dialog-task-fields, e chama a função toggle
         -- :task="tasks[indexTextSelect]" Passa a variavel task como uma props array com o indice desse array 'indexTextSelect' -->
        <dialog-task-fields :task="taskStore.tasks[taskStore.indexTextSelect]" />


        <dialog-delete></dialog-delete>
    </div>
</template>


<script setup>
import DialogTaskFields from './DialogTaskFields.vue';
import DialogDelete from './DialogDelete.vue';
import { useTaskStore } from '@/stores/task';


const taskStore = useTaskStore();//Recupera a referencia do store


</script>