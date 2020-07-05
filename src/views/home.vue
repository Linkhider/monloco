<template>
    <div class="bg">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 mb-3">
                <div class="crd">
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        class="ml-2 mr-2 carous"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                        <b-carousel-slide img-src="https://picsum.photos/848/590/?image=52"></b-carousel-slide>
                        <b-carousel-slide img-src="https://picsum.photos/848/590/?image=54"></b-carousel-slide>
                        <b-carousel-slide img-src="https://picsum.photos/848/590/?image=58"></b-carousel-slide>
                        <b-carousel-slide img-src="https://picsum.photos/848/590/?image=56"></b-carousel-slide>
                        <b-carousel-slide img-src="https://picsum.photos/848/590/?image=60"></b-carousel-slide>
                    </b-carousel>
                </div>
                <div class="crd">
                    2card
                </div>
                <div class="crd">
                    3card
                </div>
            </div>
            <div class="col-lg-4">
                <div class="crd">
                    <div class="col-lg-12">
                    <b-button variant="outline-#000" class="col-lg-12 mt-2">Button</b-button>
                    <b-button variant="outline-primary" class="col-lg-12 mt-2">Button</b-button>
                    <b-button variant="outline-primary" class="col-lg-12 mt-2">Button</b-button>
                    </div>
                </div>

                <div class="crd">
                    2rcard
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .bg{
        background: #E5E5E5;    }
    .crd{
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(4, 94, 94, 0.05);
        border-radius: 10px;
        margin-top: 35px;
    }
    .carous{
        border-radius: 50px;
        hight: 848px;
    }

</style>