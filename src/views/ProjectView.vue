<script setup lang="ts">
import Status from "@/components/Status.vue";
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Project } from "../types/project.type";

const route = useRoute()
let item = ref<Project>()

item.value = <Project>(JSON.parse(localStorage.items)).filter((i: Project) => i.id == Number(route.params.id))[0]
console.log(item.value)

let adding = ref<boolean>(false)
</script>

<template>
    <div class="container">
        <div class="left"></div>
        <div class="right">
            <h1>{{ item.title }}</h1>
            <!-- convert to component -->
            <Status :checked="item.checked" />
            <div class="flag">
                <img height="64" width="64" src="https://flagsapi.com/BR/flat/64.png">
            </div>
            <hr>
            <h4>Descrição</h4>
            <p>{{ item.description }}</p>
            <hr>
            <h4>Passo a passo para o reparo</h4>
            <div class="list">
                <div class="item">
                    <!-- button with bool completed state -->
                    <button>
                        <svg v-if="true" width="24" height="24" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="14" height="14" stroke="white" stroke-width="2" />
                        </svg>
                    </button>
                    text
                </div>
            </div>
            <div v-if="!adding" class="add" @click="() => adding = true">
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z"
                        fill="#F8F8F8" />
                </svg>
                <input type="text" placeholder="Adicionar nova item">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    z-index: 999;
}

.container {
    margin: 30px auto 80px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

hr {
    border: solid 1px #A1A1AA99;
    border-radius: 10px;
}

.left,
.right {
    width: 45%;
    min-width: 370px;
}

.left {
    background: #94A3B8;
    display: flex;
    height: 80vh;
    border-radius: 8px;
}

.right {
    h1 {
        width: 100%;
    }

    .list {
        .item {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
                height: 24px;
                width: 24px;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 0;
            }
        }
    }
}

.add {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 250px;
    gap: 10px;
    color: #FFFFFF99;

    input {
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        border-radius: 6px;
        padding: 3px 10px;

        &:focus {
            border: solid 1px #94A3B8;
        }
    }
}
</style>