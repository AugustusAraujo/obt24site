<script setup lang="ts">
import Status from "@/components/Status.vue";

const props = defineProps({
    id: Number,
    title: String,
    checked: Boolean,
    cover: String,
})
</script>

<template>
    <RouterLink :to="`/project/${props.id}`" class="card">
        <div class="cover"></div>
        <h4>{{ props.title }}</h4>
        <Status :checked="props.checked" />
    </RouterLink>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    text-align: center;
    text-decoration: none;

    .cover {
        background: #94A3B8;
        height: 170px;
        width: 100%;
        border-radius: 6px;
    }
}
</style>