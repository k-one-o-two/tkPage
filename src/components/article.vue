<script setup lang="ts">
defineProps<{ title: string; art: string }>();
</script>
<template>
    <div class="card card-l2">
        <div>
            <pre>{{ art }}</pre>
        </div>
        <div>
            <span class="link">
                <div>
                    <h2 class="title">{{ title }}</h2>
                    <slot></slot>
                </div>
            </span>
        </div>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
</style>
