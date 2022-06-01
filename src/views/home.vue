<template>
    <div class="menu">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px;height: 100vh;;"
            mode="inline" :theme="theme">
            <a-menu-item key="1" @click="test(1)">
                <template #icon>
                    <MailOutlined />
                </template>
                看看echarts
            </a-menu-item>
            <a-menu-item key="2" @click="test(2)">
                <template #icon>
                    <CalendarOutlined />
                </template>
                去登陆
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>EVA</template>
                <a-menu-item key="3">凌波丽</a-menu-item>
                <a-menu-item key="4">明日香</a-menu-item>
                <a-sub-menu key="sub1-2" title="没想好">
                    <a-menu-item key="5">没头脑</a-menu-item>
                    <a-menu-item key="6">不高兴</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #icon>
                    <SettingOutlined />
                </template>
                <template #title>六一儿童节</template>
                <a-menu-item key="7">六月二</a-menu-item>
                <a-menu-item key="8">端午节</a-menu-item>
                <a-menu-item key="9">三天假</a-menu-item>
                <a-menu-item key="10">上班了emo</a-menu-item>
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
        const test = (type: Number) => {
            if (type==1) {
                router.push('/test')
            }else{
                router.push('/Login')
            }
        }
        return {
            ...toRefs(state),
            test
        };
    },
});
</script>

<style scoped>
</style>