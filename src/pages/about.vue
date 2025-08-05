<template>
    <v-container class="py-10">
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
                <v-avatar size="120" class="mb-4">
                    <v-img src="../assets/garoto.png" alt="Avatar" />
                </v-avatar>

                <h1 class="text-h4 font-weight-bold mb-2">Sobre Nós</h1>
                <p class="text-body-1">
                    Este é um exemplo de página "About" criada com Vue 3 e Vuetify 3.
                    Aqui você pode descrever a sua empresa, seu time ou propósito.
                </p>

                <v-divider class="my-6"></v-divider>

                <v-row>
                    <v-col cols="12" md="4">
                        <v-card variant="tonal">
                            <v-card-title class="text-h6">Missão</v-card-title>
                            <v-card-text>
                                Nossa missão é fornecer soluções modernas e eficientes.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card variant="tonal">
                            <v-card-title class="text-h6">Visão</v-card-title>
                            <v-card-text class="mb-4">
                                Buscamos inovação e excelência em cada projeto.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card variant="tonal">
                            <v-card-title class="text-h6">Valores</v-card-title>
                            <v-card-text class="mb-4">
                                Transparência, ética e compromisso com o cliente.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
//
</script>

<style scoped>
/* Estilos opcionais */
</style>
