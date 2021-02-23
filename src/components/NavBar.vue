<template>
	<div>
		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand mx-auto" href="index.html"><router-link to="/">Naturaleza</router-link> 
				<span class="fa-2x">
					<font-awesome-layers class="fa-lg fa-fw">
						<font-awesome-icon :icon="['far','circle']" />
						<font-awesome-icon icon="seedling" transform="shrink-8" />
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
							<router-link to="/" class="btn anchor">Plantas</router-link>
						</li>
						<li>
							<router-link to="/Animales" class="btn anchor">Animales</router-link>
						</li>
						<li>
							<router-link to="/Insectos" class="btn anchor">Insectos</router-link>
						</li>
						<li>
							<router-link to="/Link" class="btn anchor">Link</router-link>
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