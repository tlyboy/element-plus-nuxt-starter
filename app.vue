<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { appName } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  title: appName,
})

const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </el-config-provider>
</template>
