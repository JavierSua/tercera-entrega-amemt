<template>

    <!-- Tarjetas -->
    
     <div>
       <div class="container rounded">
        <div class="card-deck">
            <div class="card btn">
               <!-- <img class="card-img-top" src="style/img/cactus-250px-Coryphantha_ramillosa.jpg" alt="Coryphantha Ramillosa"> -->
                 <v-img src="public/img/cactus-250px-Coryphantha_ramillosa.jpg"></v-img>
                <div class="card-body">
                    <h5 class="card-title">Cactus</h5>
                    <p class="card-text">Cactaceae, las cactáceas, son conocidas en conjunto como cactos, cactus o cacti. Esta familia es originaria de América.</p>
                    <a href="paginas/plantas/suculenta.html" class="btn-primary stretched-link"></a>
                </div>
            </div>
            <div class="card btn">
            <!--    <img class="card-img-top" src="style/img/begonia-1024px-Begonia_plant_14.jpg" alt="Begonia Aconitifolia"> -->
               <v-img src="public/img/begonia-1024px-Begonia_plant_14.jpg"></v-img>
                <div class="card-body">
                    <h5 class="card-title">Begonia</h5>
                    <p class="card-text">La familia de las begonias (Begoniaceae) es una familia de plantas con dos géneros, procedentes de todas las regiones húmedas tropicales a excepción de Australia y Polinesia.</p>
                    <a href="paginas/plantas/begonia.html" class="btn-primary stretched-link"></a>
                </div>
            </div>
            <div class="card btn">
            <!--    <img class="card-img-top" src="style/img/orquidea-1024px-Labiata.jpg" alt="Cattleya Labiata"> -->
              <v-img src="public/img/orquidea-1024px-Labiata.jpg"></v-img>
                <div class="card-body">
                    <h5 class="card-title">Orquidea</h5>
                    <p class="card-text">Las orquídeas u orquidáceas (nombre científico Orchidaceae) son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas.</p> 
                    <a href="paginas/plantas/orquidea.html" class="btn-primary stretched-link"></a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Tabla -->
    
    <div class="container rounded table-responsive-sm">
        <table class="table table-striped table-dark"></table>
        
        <!-- Modal -->
        
        <button type="button" class="btn btn-primary btnTablaAgregar" data-toggle="modal" data-target="#exampleModal">
            Agregar
        </button>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar especimen a la tabla</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
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
                                <input class="modalInput col-md-2" required type="text">
                                <input class="modalInput col-md-2" required type="text">
                                <input class="modalInput col-md-2" required placeholder="Si/No" type="text">
                                <input class="modalInput col-md-2" required placeholder="Si/No" type="text">
                                <input class="modalInput col-md-2" required type="text">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" id="btnTablaModalAgregar" class="btn btn-primary" >Agregar</button>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    <!-- Footer -->
    
    <footer class="text-muted">
        <div class="container container-footer rounded">
            <div class="row ">
                <div class="col-sm-7 col-xl-8">
                    <p>Soy un pie de pagina muy feliz y largo que se repite Soy un pie de pagina muy feliz y largo que se repite Soy un pie de pagina muy feliz y largo que se repite </p>
                    <p>Soy un pie de pagina con un link a <a href="https://google.com" class="text-decoration-none" target="_blank">Google</a> y otro a la <a href="index.html" class="text-decoration-none">pagina inicial</a>.</p>
                </div>
                <div class="col-sm-5 col-xl-4 container-social text-center text-sm-left">
                    <h3>Contactenos:</h3> 
                    <ul><a href="https://www.facebook.com" class="text-decoration-none" target="_blank"><i class="fab fa-facebook-square"></i> Facebook</a></ul>
                    <ul><a href="https://www.twitter.com" class="text-decoration-none" target="_blank"><i class="fab fa-twitter-square"></i> Twitter</a></ul>
                    <ul><a href="https://www.instagram.com" class="text-decoration-none" target="_blank"><i class="fab fa-instagram-square"></i> Instagram</a></ul>
                    <ul><a href="https://www.pinterest.com" class="text-decoration-none" target="_blank"><i class="fab fa-pinterest-square"></i> Pinterest</a></ul>
                </div>
            </div>
        </div>
    </footer>
    
    <div class="background-filter">
        <!-- Esto es un fitro para que la imagen de fondo no se vea tan brillante. -->        
    </div>
    
    <div class="background-img-container">
        <div class="background-img">
        </div>  
    </div>
    
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
.navbar-brand{
    font-size: 1.5rem;
}

.navbar{
    padding: 0 1rem;
    border-bottom: #3d6b34 solid 2px;
}

.fa-stack{
    font-size: 1.8rem;
    color: #3d6b34;
}

.carousel-item img{
    width: auto;
    height: auto;
    max-height: 400px;
    margin: auto; 
    
} 

.carousel-caption{
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20 0;
  /*  background: url(../style/img/bg-filter.png);*/
}

.container{
    background-color: #7ad66880;
    padding: 15px;
}

.table{
    margin-bottom: 0;
}

.card{
    background-color:  #96af96;
    border: solid 2px rgb(99, 99, 99);
}

.btn, .btn-wrn {
    color: black;
    padding: 0 0;
    text-align: center;
    transition: 0.4s;
}

.btn:hover {
    background-color:#468c46;
    color: white;
    border: solid 5px #468c46;
}

.btn-wrn:hover{
    background-color: #b8bb1c;
    font-size: 20px;
}

.btn-borrar, .btn-edit{
    padding: .75rem;
    margin: 0 7%;
    vertical-align: top;
    min-width: 49px;
    height: 48px;
    
}

.btnTablaAgregar{
    display: flex;
    color: black;
    text-align: center;
    background-color:#5db85d;
    border: solid 2px #5db85d;
    border-radius: 3px;
    margin-left: 10%;
    margin-top: 8px;
}

.progress-bar{
    width: 0%;
    transition: width 2s ease;
}
.progress-bar-full{
    width: 100%;
}

footer{
    display: block;
    padding: 20px 0;
    background: rgb(17, 17, 17);
}

a{
    color:#7ad66880;
}
a:hover{
    color:#7ad668;
}

.container-footer{ 
    font-size: 15px;
    background-color: rgb(17, 17, 17);
}

.container-social{
    font-size: 17px;
}

.bg-text{
    background-color: #afc8af!important;
    overflow: auto;
}
.bg-text .col-12{
    font-size: 1.1rem;
}

.background-filter{
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: -100000;
    position: fixed;
   /* background: url(../style/img/bg-filter.png); */
}

.background-img-container {
    left: 0px;
    top: 0px;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    z-index: -999999;
    position: fixed;
}

.background-img{
 /*   background-image: url("../style/img/bg-img-plants.jpg"); */
    height: 100%;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
}
body{
    background-color: #5a6773; /*Por si falla cargar la imagen de fondo*/
}

.undr-cstr{
    max-height: 452px;
    max-width: 452px;
    margin: auto;
}
</style>


