<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
</script>

<template>
  <div class="h-full">
    <el-config-provider :locale="zhCn">
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </el-config-provider>
  </div>
</template>
