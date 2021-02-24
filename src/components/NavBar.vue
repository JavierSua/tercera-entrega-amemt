<template>
	<div>
		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand mx-auto"><router-link to="/" class="navbar-brand">Naturaleza</router-link> 
				<span class="fa-2x">
					<font-awesome-layers class=" fa-fw " >
						<font-awesome-icon :icon="['far','circle']" style="color: #3d6b34;" size="2x"/>
						<font-awesome-icon icon="seedling" transform="shrink-8" size="2x"  />
					</font-awesome-layers>
				</span> 
			</a> 
		</nav> 
	
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
			<div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class="collapse navbar-collapse text-center" id="navbarNav">
					<ul class="navbar-nav">
						<li>
							<!--<a class="nav-link" href="index.html">Plantas</a> -->
							<router-link to="/" class="btn nav-link">Plantas</router-link>
						</li>
						<li>
							<router-link to="/Animales" class="btn nav-link">Animales</router-link>
						</li>
						<li>
							<router-link to="/Insectos" class="btn nav-link">Insectos</router-link>
						</li>
						<li>
							<router-link to="/Link" class="btn nav-link">Link</router-link>
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
<style>
.anchor{
    color:#7ad66880;
}
</style>