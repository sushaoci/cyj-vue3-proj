<script setup>
import LazyLoadImageViewPort from '@/components/LazyLoadImage/LazyLoadImageViewport.vue'

const getImgUrl = (id) => {
    const imgUrl = new URL(`../../assets/lotsofimages/copy${id}.jpeg`, import.meta.url).href
    return imgUrl
}
</script>
<template>
    <LazyLoadImageViewPort class="img-block" v-for="i in Array(5).keys()" :src="getImgUrl(i + 1)" />
</template>

<style scoped>
.img-block {
    width: 400px;
    height: 400px;
    display: block;
}
</style>