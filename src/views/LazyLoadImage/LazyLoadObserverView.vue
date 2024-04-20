<script setup>
import LazyLoadImageObserver from '@/components/LazyLoadImage/LazyLoadImageObserver.vue'

const getImgUrl = (id) => {
    const imgUrl = new URL(`../../assets/lotsofimages/copy${id}.jpeg`, import.meta.url).href
    return imgUrl
}
</script>
<template>
    <LazyLoadImageObserver class="img-block" v-for="i in Array(5).keys()" :src="getImgUrl(i + 1)" />
</template>

<style scoped>
.img-block {
    width: 400px;
    height: 400px;
    display: block;
}
</style>