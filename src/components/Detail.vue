<template>
    <div v-html="articalContent"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const marked = require("marked");
export default defineComponent(
    {
        name: "Detail",
        data() {
            return {
                articalContent: ''
            }

        },
        created() {
            this.$axios.get("@/../../docs/README.md").then(res => {
                const htmlMD = marked(res.data);

                this.articalContent = htmlMD;
            });
        },
        methods: {
            loadData() {
                
            }
        }
    }
) 
</script>