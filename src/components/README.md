# Components

Os arquivos de modelo do Vue nesta pasta são importados automaticamente.

## 🚀 Usage

A importação é feita pelo [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components). Este plugin importa automaticamente os arquivos `.vue` criados no diretório `src/components` e os registra como componentes globais. Isso significa que você pode usar qualquer componente em seu aplicativo sem precisar importá-lo manualmente.

O exemplo a seguir assume um componente localizado em `src/components/MyComponent.vue`:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
  //
</script>
```

Quando seu modelo for renderizado, a importação do componente será automaticamente incorporada, o que renderizará isso:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
  import MyComponent from '@/components/MyComponent.vue'
</script>
```
