// Utilities
import { defineStore } from 'pinia'
import { useAlertStore } from './alert';

//Todas as variaveis e funçoes usadas pelo Pinia se tornam globais para aplicação,podendo usa-las em qualquer componente ou arquivo vue

const alertStore = useAlertStore()

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTextSelect: 0,
        showDialogTaskFileds: false
    }),
    actions: {
        addTask() {
            if (this.titleTaskCreating.length < 5) return; //Retorna sem fazer nada
            this.tasks.push({ title: this.titleTaskCreating, done: false })
            //Ao criar a tarefa é atribuido o sinalizador done para false,que é utilizada para saber se o checkbox esta marcado

            this.titleTaskCreating = ""
            this.saveLocalData()
            alertStore.notifyAlert("Adicionar Tarefa", "Tarefa adicionada com  sucesso.")//Chama o componente alert,e envia o titulo e o texto do alert
        },
        //Alterna a exibicao do dialog
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete
            if (index != null)
                this.indexTextSelect = index
            this.saveLocalData()
        },
        deleteTask() {
            this.tasks.splice(this.indexTextSelect, 1)
            this.toggleDelete()
            alertStore.notifyAlert("Deletando Tarefa", "Tarefa Deletada com sucesso.")
        },
        toggleEdit(index) {
            this.showDialogTaskFileds = !this.showDialogTaskFileds
            if (index != null)
                this.indexTextSelect = index
            this.saveLocalData()
        },
        saveLocalData() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))//Cria um item objeto do json chamado de tasks no localStorage do navegador
        },
        //Recupera od dados do localstorage
        getTasks() {
            let itens = localStorage.getItem('tasks')//Recupera o item objeto pela chave armazenada,ele retorna como string
            if (itens) {
                this.tasks = JSON.parse(itens)//Converte para json
            }
        },
        //Ao ser chamado irá alternar a variavel 'done',se tiver false alterna para true,quando a tarefa for salva
        toggleDoneTask(index) {
            this.tasks[index].done = !this.tasks[index].done
            this.saveLocalData()
        }
    }

})
