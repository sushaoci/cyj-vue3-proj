<template>
    <div class="flex justify-center">
        <div>
            <nav class="flex justify-center gap-2 m-20">
                <PublicButton>
                    <RouterLink to="/viewport">ViewPort</RouterLink>
                </PublicButton>
                <PublicButton>
                    <RouterLink to="/observer">Observer</RouterLink>
                </PublicButton>
            </nav>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import PublicButton from '../../components/PublicComponents/PublicButton.vue';

const route = useRoute()
const router = useRouter()

watch(route, (to, from) => {
    router.go(0)
})
</script>