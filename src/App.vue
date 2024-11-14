<template>
    <div class="ui">
        <router-view />
    </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink} from 'vue-router'
export default defineComponent({
    name: "App",
    data() {
        return {

        }
    },
    created() {


    },
    mounted() {
    },
    methods: {
    }
})
</script>