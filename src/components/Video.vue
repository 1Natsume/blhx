<template>
    <div id="video-overlay" style="opacity: 0; display: none;">
        <div id="video-overlay__vimeo-video" data-vimeo-initialized="true"
            style="pointer-events: none; transform: scale(1);">
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                    src="https://player.vimeo.com/video/761102167?title=0&amp;byline=0&amp;controls=0&amp;app_id=122963"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style="position: absolute; top: 0px; left: 0px; width: 933px; height: 739px;"
                    title="Lusion Reel 2023" data-ready="true"></iframe></div>
        </div>
        <div id="video-overlay__mobile-close-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75781 3.75732L12.2431 12.2426" stroke="white" stroke-width="2" stroke-linecap="round">
                </path>
                <path d="M12.2422 3.75732L3.75691 12.2426" stroke="white" stroke-width="2" stroke-linecap="round">
                </path>
            </svg></div>
        <div id="video-overlay__controls"><button id="video-overlay__play-btn">PLAY</button>
            <div id="video-overlay__progress-container">
                <div id="video-overlay__progress-active"></div>
                <div id="video-overlay__progress-bg"></div>
            </div><button id="video-overlay__mute-btn">MUTE</button>
        </div>
        <div id="video-overlay-cursor"><svg id="video-overlay-cursor-svg" xmlns="http://www.w3.org/2000/svg" width="36"
                height="36" fill="none" viewBox="0 0 36 36">
                <path stroke="#020022" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M31 31 17.928 18 31 5M5 5l13.072 13L5 31"></path>
            </svg></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Video"
})
</script>