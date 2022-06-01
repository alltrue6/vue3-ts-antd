<script lang='ts' setup>
import { ref, reactive } from 'vue'
import Home from "@/views/home.vue";
</script>

<template>
    <div class="container">
        <Home class="left"></Home>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang='less' scoped>
.container {
    display: flex;

    .left {
        width: 20%;
    }

    .right {
        width: 80%;
    }
}
</style>