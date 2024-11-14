<template>
    <div class="bg"></div>
    <div class="aa">
        <ul class="menu">
            <li>
                <div><span><a href="/ship">商店</a></span></div>
            </li>
            <li>船坞</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
    <!-- <div class="group_left">此处应有东西</div> -->
    <div class="group_top">
        <div class="group_top_img" style="background-image: url(https://q1.qlogo.cn/g?b=qq&nk=1376694973&s=640);"></div>
        <div class="group_top_text">
            <div class="name">石头帝国</div>
            <div class="level">136</div>
        </div>
    </div>
    <div id="live2d-main" class="live2d-main">
        <div class="live2d-tips"></div>
        <!-- 这里可以定义画布的大小位置 -->
        <canvas id="live2d" class="live2d"></canvas>
        <div class="tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <span class="fui-info-circle"></span>
            <span class="fui-cross"></span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { LAppDelegate } from './lappdelegate';
import { initDefine} from './lappdefine'
import {useRoute} from 'vue-router'
export default defineComponent({
    name: "App",
    data() {
        return {

        }
    },
    created() {


    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            var resourcesPath = "./model/"; // 指定资源文件（模型）保存的路径
            var backImageName = ""; // 指定背景图片
            var modelDir = "ChenHai"; // 指定需要加载的模型
            this.app = document.getElementById('live2d-main')
            this.can = document.getElementById("live2d")
            initDefine(resourcesPath,backImageName,modelDir.split(','))
            // 创建一个2Dcanvas画布
            //this.context = this.can.getContext('2d')
            this.can.width = this.app.offsetWidth
            this.can.height = this.app.offsetHeight
            if (LAppDelegate.getInstance().initialize() == false) {
                return;
            }
            LAppDelegate.getInstance().run();
        }
    },
    setup(){
        var router = useRoute()
    }
})
</script>