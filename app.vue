<script setup lang="ts">
import { appName } from '~/constants'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  title: appName,
})

const locale = ref(zhCn)
</script>

<template>
  <ElConfigProvider :locale="locale">
    <ElScrollbar height="100%">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ElScrollbar>
  </ElConfigProvider>
</template>
