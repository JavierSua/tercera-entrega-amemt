<template>
    <div>
        <div class="container rounded table-responsive-sm">
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th v-for="key in keys" :key="key.id"> {{key}}  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(planta) in plantas" :key="planta.id">
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
            keys: [],
        }
    },
    computed: mapGetters(['plantas']),
    mounted() {
        this.getPlantas();
        this.getKeys()  
    },    
    methods: {
        getPlantas(){
            fetch('https://602d985a96eaad00176dc9fd.mockapi.io/plantas')
                .then(resp => resp.json())
                .then(data => {
                    this.$store.state.plantas = data;
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
    },
}
</script>
<style lang="">
    
</style>