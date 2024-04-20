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
    let options = {
        root: null,
        threshold: "0",
    };
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imgRef.value.src = props.src
                observer.unobserve(imgRef.value);
            }
        })
    }
    let observer = new IntersectionObserver(callback, options);
    observer.observe(imgRef.value);

    addEventListener('resize', (e) => {
        observer.observe(imgRef.value);
    })

})
</script>
<template>
    <img alt="tmp" id="listItem" ref="imgRef">
</template>
<style scoped>
img {
    width: 100%;
    height: 100%;
}
</style>