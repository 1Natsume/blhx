<template>
    <div v-for="(temp,index) in tmepListDatas" :key="temp.name">
        
        {{ temp.name }}
    </div>
    <!-- <div @click="open()">123</div> -->
    <!-- <Video></Video> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Video from './Video.vue'
export default defineComponent(
    {
        name: "Ship",
        data() {
            tmepListDatas :[]
        },
        created() {
            this.loadData()
        },
        components: {
            Video
        },
        methods: {
            open() {
                document.getElementById('video-overlay').style.display = 'block'
                document.getElementById('video-overlay').style.opacity = '1'
            },
            loadData() {
                // 拉取该文件夹下所有文件信息
                const filesMD = require.context('@/../../docs/', true, /\.md$/);
                const filesMDNames = filesMD.keys();
                const tmepListDatas = [];
                filesMDNames.map((item) => {
                    console.log(item)
                    const listObj = {name:'',path:'',children:[],showChild:true};
                    const listItemS = item.split('/');
                    if (listItemS.length > 0) {
                        listObj.name = listItemS[1].replace('.md', '');
                        listObj.path = item;
                        listObj.children = [];
                        listObj.showChild = false;
                    }
                    tmepListDatas.push(listObj);
                    this.tmepListDatas =tmepListDatas;
                });
            }
        }
    }
) 
</script>