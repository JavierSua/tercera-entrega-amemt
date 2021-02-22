<template>
    <div>
        <div class="container rounded table-responsive-sm">
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th v-for="(key, i) in keys" :key="key.id">
                            <button class="btn btn-secondary dropdown-toggle" type="button" @click="selectItem(i)"> {{key}} </button>       
                            <form @submit.prevent="applyFilter(key, i)" :class="{hideInput: i !== activeItem}">
                                <input type="text" v-model="filterInput">
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="planta in listPlantas" :key="planta.id">
                        <td v-for="key in keys" :key="key.id">
                            {{planta[key]}}
                        </td>
                        <button v-on:click="deleteRow($event.target.parentNode.sectionRowIndex)" >X</button>
                        <button v-on:click="$emit('toggleEditModal', $event.target.parentNode.sectionRowIndex)">Editar</button>
                    </tr>
                </tbody>
            </table>        
        </div>
    </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
    data(){
        return {
            listPlantas: [],
            keys: [],
            showInputFilter: false,
            activeItem:null,
            filterInput: ""
        }
    },
    computed: mapGetters(['plantas','filteredPlantas']),
    mounted() {
        this.getPlantas();
        this.getKeys()  
        this.listPlantas = this.plantas
    },    
    methods: {
        getPlantas(){
            fetch('https://602d985a96eaad00176dc9fd.mockapi.io/plantas')
                .then(resp => resp.json())
                .then(data => {
                    this.$store.state.plantasArray = data;
                    this.listPlantas = data
                    sessionStorage.setItem('plantas', JSON.stringify(this.plantas))
                });
        },
        getKeys(){
            fetch('https://602d985a96eaad00176dc9fd.mockapi.io/plantas')
                .then(resp => resp.json())
                .then(data => {
                    this.keys = Object.keys(data[0]);
                    sessionStorage.setItem('plantas', JSON.stringify(this.keys))
                }); 
        },
        deleteRow(rowIndex){
            this.plantas.splice(rowIndex,1)
        },
        selectItem(i) {
            if (this.activeItem == i){
                this.activeItem = null;
            } else {
                this.activeItem = i;
            }
            
        },
        applyFilter(filterCol, index){
            if (this.filterInput != ""){
                this.listPlantas = this.$store.getters.filteredPlantas(filterCol, this.filterInput)
            } else {
                this.listPlantas = this.plantas
            }
            this.selectItem(index)
            this.filterInput= ""
        }
    },
}
</script>
<style>
    .hideInput{
        display: none;
    }
</style>