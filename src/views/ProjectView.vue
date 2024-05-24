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

let task = ref();

checkStatus()

function checkStatus() {
    if (item.value?.tasks.filter((e) => e.completed == false)[0] != null) {
        item.value.checked = false;
        localStorage.items = JSON.stringify(JSON.parse(localStorage.items).map((i: Project) => {
            if (i.id == item.value?.id) {
                i.checked = false;
            }
            return i;
        }))
    } else {
        item.value.checked = true;
        localStorage.items = JSON.stringify(JSON.parse(localStorage.items).map((i: Project) => {
            if (i.id == item.value?.id) {
                i.checked = true;
            }
            return i;
        }))
    }
}

function completeTask(index: number, vv: boolean) {
    let nts = item.value?.tasks.map((e, i) => {
        if (i == index) e.completed = vv;
        return e;
    })
    item.value.tasks = nts;
    console.log(nts)
    localStorage.items = JSON.stringify(JSON.parse(localStorage.items).map((i: Project) => {
        if (i.id == item.value?.id) {
            i.tasks = nts;
        }
        return i;
    }))
    checkStatus()
}

function addTask(value: string) {
    localStorage.items = JSON.stringify(JSON.parse(localStorage.items).map((i: Project) => {
        if (i.id == item.value?.id) {
            i.tasks.push({ completed: false, content: value });
        }
        return i;
    }))
    item.value?.tasks.push({ completed: false, content: value })
    adding.value = false
    task.value = ''
    checkStatus()
}
</script>

<template>
    <div class="container">
        <div class="left"></div>
        <div class="right">
            <h1>{{ item?.title }}</h1>
            <!-- convert to component -->
            <Status :checked="item.checked" />
            <div class="flag">
                <img height="64" width="64" :src="`https://flagsapi.com/${item?.flag}/flat/64.png`">
            </div>
            <hr>
            <h4>Descrição</h4>
            <p>{{ item?.description }}</p>
            <hr>
            <h4>Passo a passo para o reparo</h4>
            <div class="list">
                <div class="item" v-for="(x, i) in item?.tasks" :key="i">
                    <button @click="() => completeTask(i, !x.completed ? true : false)">
                        <svg v-if="!x.completed" width="24" height="24" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="14" height="14" stroke="white" stroke-width="2" />
                        </svg>
                        <div v-else>X</div>
                    </button>
                    <p>{{ x.content }}</p>
                </div>
            </div>
            <div v-if="!adding" class="add" @click="() => adding = true">
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z"
                        fill="#F8F8F8" />
                </svg>
                Adicionar novo item
            </div>
            <div v-else class="add-add">
                <div class="it">
                    <input type="text" placeholder="Digite aqui..." v-model="task">
                    <Status :checked="false" :text="true" class="button" @click="() => addTask(task)" />
                </div>
                <hr>
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
        display: flex;
        flex-direction: column;
        align-items: left;

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

.add-add {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 10px;
    border: solid 2px #94A3B8;
    border-radius: 6px;
    padding-top: 5px;

    input {
        background: none;
        border: none;
        outline: none;
        width: 70%;
        color: #ffffff;

        &::placeholder {
            color: #ffffff7e;
        }
    }

    .it {
        display: flex;
        align-items: center;
        padding: 3px 5px;

        .button {
            cursor: pointer;
        }
    }

    hr {
        width: 98%;
        border: solid .2px #94a3b862;
        margin: auto;
        margin-bottom: 10px;
    }
}

.add {
    opacity: 60;
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 250px;
    gap: 10px;

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