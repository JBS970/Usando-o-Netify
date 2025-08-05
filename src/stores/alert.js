// Foi criado um store exclusivo para o alert
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({//Declara as variaveis reativas
        showAlert: false,
        alertTitle: "",
        alertText: ""
    }),
    actions: {
        notifyAlert(title, texto) {
            this.alertTitle = title
            this.alertText = texto
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        }
    }
})
