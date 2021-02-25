<template>
	<div>
		<nav class="navbar navbar-dark bg-dark">
		<router-link to="/" class="center">
		<!--	<a class="navbar-brand mx-auto" href="index.html"> --> Naturaleza 
				<span class="fa-2x">
					<font-awesome-layers class="fa-lg fa-fw">
						<font-awesome-icon :icon="['far','circle']" />
						<font-awesome-icon icon="seedling" transform="shrink-8" />
					</font-awesome-layers>
				</span> 
		<!--	</a> -->
			</router-link>
		</nav> 
	
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
			<div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class="collapse navbar-collapse text-center" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item btn">
							<router-link to="/Animales">Animales</router-link>
						</li>
						<li class="nav-item btn">
							<router-link to="/Insectos">Insectos</router-link>
						</li>
						<li class="nav-item btn">
							<router-link to="/Link">Link</router-link>
						</li>	
					</ul>
				</div>
			</div>
		</nav>
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
.center{
	margin-left: 46%;
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
 
}

.container{
    background-color: #7ad66880;
    padding: 15px;
    margin-top: 12px;
    margin-bottom: 12px;
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
    margin-top: 25px;
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