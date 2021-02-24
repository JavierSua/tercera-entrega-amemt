<template>
<div class="animales">
    <div class="container rounded">
            <SorryBtn></SorryBtn>
    </div>
</div>
</template>

<script>
import SorryBtn from '@/components/SorryBtn.vue'

export default {
    components: {
        SorryBtn
    }
}
</script>

<style lang="css">
    .animales {
    background-image: url(../../public/img/bg-img-animals.jpeg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
  }
 
</style>