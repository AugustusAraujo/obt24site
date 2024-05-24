<script lang="ts" setup>
import { ref } from 'vue'
import ProjectCard from "../components/ProjectCard.vue"
import type { Project } from '../types/project.type'

let items = ref<Project[]>([{
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
    checked: true,
}, {
    id: 3,
    cover: '',
    description: '',
    flag: 'BR',
    tasks: [],
    title: 'Comportamento de fluidos em microgravidade',
    checked: true,
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
    checked: true,
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
    checked: true,
},])
</script>

<template>
    <div class="list">
        <ProjectCard v-for="value in items" :key="value.id" :title="value.title" :id="value.id" :checked="value.checked"
            :cover="value.cover" />
    </div>
    <div class="pag">
        <div class="prev">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
            </svg>
        </div>
        <div class="pages"></div>
        <div class="next">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    margin: 30px auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 30px;
}
</style>
