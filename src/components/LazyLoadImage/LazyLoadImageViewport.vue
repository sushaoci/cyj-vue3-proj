<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
    src: String,
    width: {
        type: String,
        default: '400px',
    },
    height: {
        type: String,
        default: '400px',
    },
})

const imgRef = ref(null)

onMounted(() => {
    checkInViewPort(imgRef.value)
    addEventListener("scroll", (event) => {
        checkInViewPort(imgRef.value)
    });
    addEventListener('resize', (e) => {
        checkInViewPort(imgRef.value)
    })
})
function checkInViewPort(element) {
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const { top, bottom } = element.getBoundingClientRect();
    const isOutViewPort = top > viewHeight || bottom < 0 
    if (!isOutViewPort) {
        element.src = props.src
    }
}
</script>
<template>
    <img alt="tmp" id="listItem" ref="imgRef" :width="width" :height="height">
</template>
<style scoped>

</style>