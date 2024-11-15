<template>
    <div @click="open()">123</div>
    <Video></Video>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Video from './Video.vue'
export default defineComponent(
    {
        name: "Ship",
        data(){
            
        },
        components:{
            Video
        },
        methods:{
            open(){
                document.getElementById('video-overlay').style.display='block'
                document.getElementById('video-overlay').style.opacity = '1'
            }
        }
    }
) 
</script>