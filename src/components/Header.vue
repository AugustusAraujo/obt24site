<script setup lang="ts">
import { ref, watch } from 'vue'
const emit = defineEmits<{
    (e: 'search', search: string): void
}>()

let search = ref('');

watch(search, async (n, o) => {
    if (search.value.split('').length > 0) {
        emit('search', n)
    }
})

</script>

<template>
    <header>
        <router-link to="/" class="home">
        </router-link>
        <div class="search">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
                    fill="white" />
            </svg>
            <input type="text" placeholder="Pesquisar" v-model="search">
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    z-index: 99999;
    background: #475569;
    height: 64px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;

    .home {
        height: 32px;
        width: 32px;
        background: #ffffff;
        border-radius: 200px;
        margin-left: 10%;
    }

    .search {
        min-width: 260px;
        margin: auto;
        width: 33%;
        height: 32px;
        background: #334155;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;

        input {
            color: white;
            background: none;
            border: none;
            outline: none;
            width: 90%;

            &::placeholder {
                color: #ffffffd0;
            }
        }

        svg {
            min-width: 24px;
            margin-top: 6px;
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>