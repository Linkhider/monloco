<template>
  <div class="bg">
    <div class="container">

      <div class="d-flex align-items-center row mr-1 ml-1 mt-3">
        <b-input-group class="search">
          <template v-slot:append>
            <b-input-group-text  class="brd-select"><b-icon-search></b-icon-search></b-input-group-text>
          </template>
          <b-form-input placeholder="ФИО мастера" class="brd-select"></b-form-input>
        </b-input-group>

        <div class="filter">
        <b-select v-model="selected" :options="options" class="brd-select font-filters drop">
          <b-select-option :value="null">Фильтры</b-select-option>
        </b-select>
        </div>

        <div class="distance">
          <b-select v-model="selected" :options="options" class="brd-select font-filters wht-btn drop-blck">
            <b-select-option :value="null">Расстояние</b-select-option>

          </b-select>
        </div>

        <div class="price">
          <b-select v-model="selected" :options="options" class="brd-select font-filters wht-btn drop-blck mr-2">
            <b-select-option :value="null">Цена</b-select-option>

          </b-select>
        </div>
      </div>


      <div class="row  d-flex justify-content-between">


        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row ">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png">
                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">
                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="d-flex row ml-auto mr-3">

          <div class="mt-3 ">
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-number
                last-number
            ></b-pagination>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                rows: 5,
                perPage: 1,
                currentPage: 1
            }
        },
        name: "coworkings"
    }
</script>
<style scoped>
  .brd-select{
    background: #a0c0bf;
    border: none;
  }
  .brd-select::placeholder{
    color: #FFFFFF;
  }
  .card{
    margin-top: 5px;
    margin-bottom: 5px;
    background: #FFFFFF;
    border: 0.5px solid #E8F1F1;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px rgba(219, 191, 167, 0.1);
    border-radius: 10px;
  }
  .btn{
    margin-top: -20px;
    margin-bottom: 5px;
    background: #a0c0bf;
    border: none;
    transition: 0.8s;
  }
  .btn:hover{
    background: #607676;
  }
  img{
    margin-top: 13px;
    margin-bottom: 10px;
    width: inherit;
    height: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icons{
    position:relative;
  }
  .icon{
    position: absolute;
    top: 7px;
    height: 15px;
    width: auto;
    left: 25px;
  }
  .icon2{
    position: absolute;
    top: 7px;
    height: 15px;
    width: auto;
    right: 25px;
  }
  .title{
    margin-top: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #a0c0bf;
  }
  .adress{
    margin-top: -20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #a0c0bf;
  }
  .gray{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #8A8A8A;
  }
  .cab{
    margin-top: -15px;
    margin-left: 15px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #a0c0bf;
  }
  .search{
    width: 55%;
  }
  .filter{
    width: 19%;
    padding: 17px;
  }
  .distance{
    width: 13%;
    padding-right: 17px;
  }
  .price{
    width: 13%;
  }
  .font-filters{
    font-size: 12px!important;
    height: 38px;
  }
  .wht-btn{
    background: #fff;
    border: 1px solid #a0c0bf;
    color: #a0c0bf;
  }
  .drop{
    background: #a0c0bf url("../assets/svg/select.svg") no-repeat scroll 90% 50%;
  }
  .drop-blck{
    background: #fff url("../assets/svg/select-blck.svg") no-repeat scroll 90% 50%;
  }


  @media (max-width: 1080px) {
    .btn{
      margin-bottom: 10px;
    }
    .cab{
      font-size: 10px;
    }
    .title{
      font-size: 15px;
    }
    .adress{
      font-size: 11px;
    }
    .brd-select {
      visibility: visible;
    }
    .search{
      visibility: visible;
      width: 100%;
    }
    .filter{
      visibility: visible;
      width: 34%;
      padding-left: 0px;
    }
    .distance{
      visibility: visible;
      width: 33%;

    }
    .price{
      visibility: visible;
      width: 33%;

    }
  }
</style>