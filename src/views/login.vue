<script lang='ts' setup>
import { ref } from 'vue'
import { HomeService } from "../api/index";
import { message } from 'ant-design-vue';
const user = ref();
const password = ref();
const Login = async () => {
    const data = {
        password: password.value,
        user: user.value
    }
    const res = await HomeService.Login(data)
    if (res.status == 200) {
        message.info('登录成功');
    } else {
        message.error('登陆失败');
    }
}

</script>

<template>
    <a-input v-model:value="user" placeholder="请输入账号" />
    <a-input-password v-model:value="password" placeholder="请输入密码" />
    <a-button type="primary" ghost @click="Login">登录</a-button>
</template>

<style lang='less' scoped>
</style>