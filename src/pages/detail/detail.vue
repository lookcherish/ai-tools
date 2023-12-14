<template>
  <div>
    <div class="grid place-items-center place-content-center h-screen">
      <div class="mt-20"> 测试pinia store命名空间使用</div>
      <div class="mt-20">userstore==userinfo:{{ userStore.userInfo }}</div>
      <div class="mt-20">teststore==name:{{ testStore.name }}</div>
    </div>
    <div class="mt-20">
      <h1 class="fs-40">uview使用</h1>
      <uni-card title="ss" @click="confirm"> </uni-card>
      <div class="flex-content-center flex justify-center">
        <uni-icons type="wallet" color="#bfa" size="24" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTitle } from '@/hooks/useTitle'
  import { useInit } from '@/hooks/useInit'

  const titleName = ref('')
  const { title, changeNavBarTitle } = useTitle()
  console.log('title: ', title.value)
  onLoad(() => {
    const { pageName, pagePath, pageQuery } = useInit()
    console.log('pageQuery', pageQuery?.name)
    titleName.value = pageQuery?.name ?? ''
    changeNavBarTitle(titleName.value)
    console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery')
  })
  // 使用了自动导入
  const userStore = useStore('user')
  const confirm = () => {
    console.log(1)
  }
  const testStore = useStore('test')
  onMounted(() => {
    console.log('onmount==userstore', userStore)
  }),
    onShow(() => {
      console.log('onshow')
    })
</script>

<style scoped lang="scss"></style>
