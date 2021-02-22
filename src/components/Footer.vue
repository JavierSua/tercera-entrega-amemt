<template>
    <footer class="text-muted">
        <div class="container container-footer rounded">
            <div class="row ">
                <div class="col-sm-7 col-xl-8">
                    <p>Soy un pie de pagina muy feliz y largo que se repite Soy un pie de pagina muy feliz y largo que se repite Soy un pie de pagina muy feliz y largo que se repite </p>
                    <p>Soy un pie de pagina con un link a <a href="https://google.com" class="text-decoration-none" target="_blank">Google</a> y otro a la <a href="index.html" class="text-decoration-none">pagina inicial</a>.</p>
                </div>
                <div class="col-sm-5 col-xl-4 container-social text-center text-sm-left">
                    <h3>Contactenos:</h3> 
                    <ul><a href="https://www.facebook.com" class="text-decoration-none" target="_blank"><font-awesome-icon :icon="['fab','facebook-square']" /> Facebook</a></ul>
                    <ul><a href="https://www.twitter.com" class="text-decoration-none" target="_blank"><font-awesome-icon :icon="['fab','twitter-square']" /> Twitter</a></ul>
                    <ul><a href="https://www.instagram.com" class="text-decoration-none" target="_blank"><font-awesome-icon :icon="['fab','instagram-square']" /> Instagram</a></ul>
                    <ul><a href="https://www.pinterest.com" class="text-decoration-none" target="_blank"><font-awesome-icon :icon="['fab','pinterest-square']" /> Pinterest</a></ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
	
}
</script>
<style>
footer{
    display: block;
    margin-top: 25px;
    padding: 20px 0;
    background: rgb(17, 17, 17);
}

.container-footer{ 
    font-size: 15px;
    background-color: rgb(17, 17, 17);
	text-align: left;
}

.container-social{
    font-size: 17px;
}

</style>