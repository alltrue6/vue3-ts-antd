<script lang='ts' setup>
import { ref } from 'vue'
import { HomeService } from "../api/index";
const user = ref();
const password = ref();
const Login = async () => {
    const data = {
        password: password.value,
        user: user.value
    }
    const res = await HomeService.Login(data)
}

</script>

<template>
    <a-input v-model:value="user" placeholder="Basic usage" />
    <a-input v-model:value="password" placeholder="Basic usage" />
    <a-button type="primary" ghost @click="Login">登录</a-button>
</template>

<style lang='less' scoped>
</style>