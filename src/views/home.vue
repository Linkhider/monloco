<template>
    <div class="bg">
        <div class="container">
            <div class="col-lg-3 back"><b-icon-chevron-left></b-icon-chevron-left><a href="/coworkings"><span>Выбор кворкинга</span></a></div>
            <div class="row">
            <div class="col-lg-8 mb-3">
                <div class="crd">
                    <div class="container">
                        <div class="carous">
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
                    </div>
                </div>
                <div class="crd">
                    <div class="container">
                        <p class="title">Название коворкинга</p>
                        <p class="second-title">г. Москва, ул. Моховая, д. 13</p>
                        <p class="gray">Категория деятельности:</p>
                        <div class="row">
                            <b-button variant="dark ml-3" >Педикюрная зона</b-button>
                            <b-button variant="dark ml-3" >VIP-SPA</b-button>
                            <b-button variant="dark ml-3" >Визажная зона</b-button>
                        </div>
                        <p class="gray mt-3">Описание:</p>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa id itaque, laborum laudantium magni minus modi nihil placeat, sunt tempora tenetur ullam? Dolorem doloribus dolorum excepturi magnam reiciendis sunt.</p>
                        <p class="gray mt-2">Тарифы:</p>
                        <div class="container">
                            <div class="row">
                                <div class="card col-lg-6 mb-3">
                                    <p class="card-title">Название коворкинга</p>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa debitis deleniti dolore dolorum ducimus eligendi esse et harum iste itaque minus, nihil omnis possimus quia recusandae repudiandae ut! Hic.</p>
                                    <div class="row">
                                        <div class="col-lg-5 mb-2">
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                        </div>
                                        <div class="col-lg-7 mb-2">
                                            <div class="">Абонемент 30 часов</div>
                                            <div class="mb-2">1 месяц - 4800₽</div>
                                            <div class="">Абонемент 60 часов</div>
                                            <div class="mb-2">2 месяца - 8400₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-lg-6 mb-3">
                                    <p class="card-title">Название коворкинга</p>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa debitis deleniti dolore dolorum ducimus eligendi esse et harum iste itaque minus, nihil omnis possimus quia recusandae repudiandae ut! Hic.</p>
                                    <div class="row">
                                        <div class="col-lg-5 mb-2">
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                        </div>
                                        <div class="col-lg-7 mb-2">
                                            <div class="">Абонемент 30 часов</div>
                                            <div class="mb-2">1 месяц - 4800₽</div>
                                            <div class="">Абонемент 60 часов</div>
                                            <div class="mb-2">2 месяца - 8400₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-lg-6 mb-3">
                                    <p class="card-title">Название коворкинга</p>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa debitis deleniti dolore dolorum ducimus eligendi esse et harum iste itaque minus, nihil omnis possimus quia recusandae repudiandae ut! Hic.</p>
                                    <div class="row">
                                        <div class="col-lg-5 mb-2">
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                            <div class="mb-3">1 час - 200₽</div>
                                        </div>
                                        <div class="col-lg-7 mb-2">
                                            <div class="">Абонемент 30 часов</div>
                                            <div class="mb-2">1 месяц - 4800₽</div>
                                            <div class="">Абонемент 60 часов</div>
                                            <div class="mb-2">2 месяца - 8400₽</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="crd">
                    <p class="gray ml-3">Отзывы мастеров:</p>
                    <div class="comm-card">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-auto">
                                    <b-avatar class="brd-avatar ml-1"></b-avatar>
                                </div>
                                <div class="col-lg-4">
                                   <p class="name">Екатерина Юнусова</p>
                                   <p class="country">Москва</p>
                                </div>
                                <div class="col-lg-2 ml-auto">
                                    <p class="date">21.06.2020</p>
                                    <p class="card-text comm-rait d-flex align-items-center"><img src="@/assets/svg/star-comm.svg">8.86</p>
                                </div>
                            </div>
                            <div class="container mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi aspernatur blanditiis cumque cupiditate delectus, deleniti dignissimos harum labore magnam maxime molestiae necessitatibus nisi porro quos sequi vitae voluptatem?
                            </div>
                        </div>
                    </div>
                    <div class="comm-card">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-auto">
                                    <b-avatar class="brd-avatar ml-1"></b-avatar>
                                </div>
                                <div class="col-lg-4">
                                    <p class="name">Екатерина Юнусова</p>
                                    <p class="country">Москва</p>
                                </div>
                                <div class="col-lg-2 ml-auto">
                                    <p class="date">21.06.2020</p>
                                    <p class="card-text comm-rait d-flex align-items-center"><img src="@/assets/svg/star-comm.svg">8.86</p>

                                </div>
                            </div>
                            <div class="container mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi aspernatur blanditiis cumque cupiditate delectus, deleniti dignissimos harum labore magnam maxime molestiae necessitatibus nisi porro quos sequi vitae voluptatem?
                            </div>
                        </div>
                    </div>
                    <div class="comm-card">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-auto">
                                    <b-avatar class="brd-avatar ml-1"></b-avatar>
                                </div>
                                <div class="col-lg-4">
                                    <p class="name">Екатерина Юнусова</p>
                                    <p class="country">Москва</p>
                                </div>
                                <div class="col-lg-2 ml-auto">
                                    <p class="date">21.06.2020</p>
                                    <p class="card-text comm-rait d-flex align-items-center"><img src="@/assets/svg/star-comm.svg">8.86</p>

                                </div>
                            </div>
                            <div class="container mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi aspernatur blanditiis cumque cupiditate delectus, deleniti dignissimos harum labore magnam maxime molestiae necessitatibus nisi porro quos sequi vitae voluptatem?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="crd">
                    <div class="col-lg-12">
                    <b-button variant="secondary" class="col-lg-12 mt-4 mb-2">Арендовать рабочее место</b-button>
                    <b-button variant="outline-secondary" class="col-lg-12 mt-2 mb-2">Написать сообщение</b-button>
                    <b-button variant="outline-secondary" class="col-lg-12 mt-2 mb-4">Оставить отзыв</b-button>
                    </div>
                </div>

                <div class="crd txt col-lg-12">
                    <div class="d-flex align-items-center">
                        <div>
                            <p class="mt-3 second-title">Рейтинг коворкинга</p>
                            <p class="rait d-flex align-items-center"><img src="@/assets/svg/star.svg">8.86 <span class="rait-text ml-3">9 отзывов от мастеров</span></p>
                        </div>

                        <div class="d-flex justify-content-end align-items-center ml-auto">
                            <img src="@/assets/svg/heart.svg" class="">
                        </div>
                    </div>
                </div>

                <div class="crd txt col-lg-12">
                    <p class="mt-2 second-title">г. Москва, ул. Моховая, д. 13</p>
                    <div class=" container d-flex">
                        <img src="@/assets/png/map.png" class="map mb-2">
                    </div>
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
        border-radius: 10px;
        hight: 848px;
        overflow: hidden;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .txt{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #383838;
    }
    .map{
        width: 290px;
        height: 228px;
        border: 0.5px solid #E8F1F1;
        box-sizing: border-box;
        box-shadow: 0px 1px 10px rgba(135, 175, 185, 0.1);
        border-radius: 10px;
    }
    .rait{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 39px;
        color: #383838;
    }
    .rait-text{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        color: #383838;
    }
    .second-title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #383838;
    }
    .gray{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #8A8A8A;
    }
    .title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        color: #383838;
    }
    .card-text{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #383838;
    }
    .card{
        background: #FFFFFF;
        border: 0.5px solid #E8F1F1;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(4, 94, 94, 0.05);
        border-radius: 10px;
    }
    .card-title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #DBBFA7;
    }
    .comm-card{
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(4, 94, 94, 0.05);
        border-radius: 10px;
        margin-bottom: 40px;
    }
    .country{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #383838;
        margin-top: -15px;
    }
    .date{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #383838;
    }
    .name{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #383838;
    }
    .back{
        margin-top: 15px;
        margin-bottom: -15px;
    }
    .comm-rait{
        margin-top: -15px;
    }

</style>