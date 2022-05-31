<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { HomeService } from "../api/index";
const user = ref<string>('');
const password = ref<string>('');
const Login = async () => {
    let data = {
        password: password.value.toString(),
        user: user.value
    }
    console.log(data);

    const res = await HomeService.Login(JSON.stringify(data))
}

</script>

<template>
    <a-input v-model:value="user" placeholder="Basic usage" />
    <a-input v-model:value="password" placeholder="Basic usage" />
    <a-button type="primary" ghost @click="Login">Primary</a-button>
</template>

<style lang='less' scoped>
</style>