<template>
<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Insecto"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Pinguinos"
        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Bosque"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Desierto"
        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

    </b-carousel>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>