<script lang="ts" setup>
import HeaderComponent from "@/components/Header.vue"
import { ref } from 'vue'
import ProjectCard from "../components/ProjectCard.vue"
import type { Project } from '../types/project.type'

let items = ref<Project[]>([]);
let filtered = ref<Project[]>([]);

if (localStorage.getItem("items") == null) {
    localStorage.items = JSON.stringify([
        {
            id: 1,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Densidade óssea e muscular em microgravidade',
            checked: true,
        }, {
            id: 2,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Materiais resistentes à radiação espacial',
            checked: false,
        }, {
            id: 3,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Comportamento de fluidos em microgravidade',
            checked: false,
        }, {
            id: 4,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Microrganismos em ambiente extremo',
            checked: true,
        }, {
            id: 5,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Crescimento de plantas em microgravidade',
            checked: true,
        }, {
            id: 6,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Regeneração de tecidos em microgravidade',
            checked: false,
        }, {
            id: 7,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Comunicação por rádio no espaço',
            checked: true,
        }, {
            id: 8,
            cover: '',
            description: '',
            flag: 'BR',
            tasks: [],
            title: 'Cristalização de proteínas em microgravidade',
            checked: false,
        },])
}
items.value = JSON.parse(localStorage.getItem("items"))

filterDisplay('');

function filterDisplay(search: string) {
    if (search.split("").length > 0) {
        filtered.value = items.value.filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))
    }
    if (search == '') {
        filtered.value = items.value;
    }
}



</script>

<template>
    <HeaderComponent @search="filterDisplay" />
    <div class="list">
        <ProjectCard v-for="value in filtered" :key="value.id" :title="value.title" :id="value.id"
            :checked="value.checked" :cover="value.cover" />
    </div>
    <div class="pag" v-show="false">
        <div class="prev">
            <svg width="18" height="26" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
            </svg>
        </div>
        <div class="pages"></div>
        <div class="next">
            <svg width="18" height="26" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20L12 10L2 0L0.225 1.775L8.45 10L0.225 18.225L2 20Z" fill="white" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    z-index: 999;
}

.list {
    margin: 74px auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 30px;
}

.pag {
    background: #475569;
    max-width: 300px;
    height: 40px;
    margin: 10px auto;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

@media (max-width: 1130px) {
    .list {
        grid-template-columns: repeat(3, 300px);

        .card {
            justify-self: center;
        }
    }
}

@media (max-width: 900px) {
    .list {
        gap: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
