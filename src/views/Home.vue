<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Carrusel></Carrusel>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TablaDinamica @toggleEditModal="toggleEditModal"></TablaDinamica>
      <button type="button" class="btn btn-primary btnTablaAgregar" @click="toggleModal">
        Agregar
      </button>
    <Modal v-model="$store.state.modalOpen" v-if="$store.state.modalOpen" @toggleModal="toggleModal">
      <template v-slot:modal-header>
                    <h5 class="modal-title" id="exampleModalLabel">Agregar especimen a la tabla</h5>
                    <button type="button" class="close" v-on:click="toggleModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
      </template>
      <template v-slot:form>
                <form @submit.prevent="submitPlanta">
                    <div class="modal-body">
                        <div class="container-fluid">
                                <div class="row justify-content-between">
                                    <p class="col-md-2">Nombre</p>
                                    <p class="col-md-2">Clima</p>
                                    <p class="col-md-2">Flor</p>
                                    <p class="col-md-2">Fruta</p>
                                    <p class="col-md-2">Hojas</p>
                                </div>
                                <div class="row justify-content-between">
                                    <input class="modalInput col-md-2" v-model="tempForm.Nombre" required type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Clima" required type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Flor" required placeholder="Si/No" type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Fruta" required placeholder="Si/No" type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Hojas" required type="text">
                                </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" v-on:click="toggleModal">Cancelar</button>
                        <button type="submit" id="btnTablaModalAgregar" class="btn btn-primary" >Agregar</button>
                    </div>
                </form>
      </template>
    </Modal>
    <Modal v-model="$store.state.editModalOpen" v-if="$store.state.editModalOpen" @toggleEditModal="toggleEditModal">
      <template v-slot:modal-header>
                    <h5 class="modal-title" id="exampleModalLabel">Editar especimen</h5>
                    <button type="button" class="close" v-on:click="toggleEditModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
      </template>
      <template v-slot:form>
                <form @submit.prevent="editPlanta">
                    <div class="modal-body">
                        <div class="container-fluid">
                                <div class="row justify-content-between">
                                    <p class="col-md-2">Nombre</p>
                                    <p class="col-md-2">Clima</p>
                                    <p class="col-md-2">Flor</p>
                                    <p class="col-md-2">Fruta</p>
                                    <p class="col-md-2">Hojas</p>
                                </div>
                                <div class="row justify-content-between">
                                    <input class="modalInput col-md-2" v-model="tempForm.Nombre" required type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Clima" required type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Flor" required placeholder="Si/No" type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Fruta" required placeholder="Si/No" type="text">
                                    <input class="modalInput col-md-2" v-model="tempForm.Hojas" required type="text">
                                </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" v-on:click="toggleEditModal">Cancelar</button>
                        <button type="submit" id="btnTablaModalAgregar" class="btn btn-primary" >Agregar</button>
                    </div>
                </form>
      </template>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrusel from '@/components/Carrusel.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TablaDinamica from '@/components/TablaDinamica.vue'
import Modal from '@/components/Modal.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    Carrusel,
    HelloWorld,
    TablaDinamica,
    Modal
  },
  data() {
    return {
      tempForm : {

      },
      blankForm : {
        Nombre: "",
        Clima: "",
        Flor: "",
        Fruta: "",
        Hojas: "",
      },
    }
  },
  computed: mapGetters(['plantas']),
  methods: {
    toggleModal(){
        this.tempForm = this.blankForm
        this.$store.state.modalOpen= !this.$store.state.modalOpen;
    },
    toggleEditModal(row){
        this.tempForm = {...this.plantas[row]}
        this.$store.state.rowToEdit = row
        this.$store.state.editModalOpen= !this.$store.state.editModalOpen;
    },
    submitPlanta(){
        const newPlanta = {
            Nombre: this.tempForm.Nombre,
            Clima: this.tempForm.Clima,
            Flor: this.tempForm.Flor,
            Fruta: this.tempForm.Fruta,
            Hojas: this.tempForm.Hojas,
            }
        this.$store.state.plantasArray.push(newPlanta)
    this.toggleModal()
    this.tempForm = this.blankForm
    },
    editPlanta(){
      this.$store.state.plantasArray.splice(this.$store.state.rowToEdit, 1, this.tempForm)
      this.toggleEditModal()
    }
  },
}
</script>
