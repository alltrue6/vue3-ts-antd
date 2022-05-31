<template>
    <div class="menu">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px;height: 100vh;;"
            mode="inline" :theme="theme">
            <a-menu-item key="1" @click="test">
                <template #icon>
                    <MailOutlined />
                </template>
                去tset
            </a-menu-item>
            <a-menu-item key="2">
                <template #icon>
                    <CalendarOutlined />
                </template>
                Navigation Two
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>Navigation Three</template>
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #icon>
                    <SettingOutlined />
                </template>
                <template #title>Navigation Four</template>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuTheme } from 'ant-design-vue';
import router from '@/router';
export default defineComponent({
    components: {
        MailOutlined,
        CalendarOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
    setup() {
        const state = reactive({
            theme: 'dark' as MenuTheme,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
        });
        const test=()=>{
           router.push('/test')
        }
        return {
            ...toRefs(state),
            test
        };
    },
});
</script>

<style scoped>
.menu{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
}
</style>