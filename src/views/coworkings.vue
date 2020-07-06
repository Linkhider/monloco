<template>
  <div class="bg">
    <div class="container">
      <div class="row d-flex align-items-center mt-3 mb-3">
        <b-input-group class="col-lg-8">
          <template v-slot:append>
            <b-input-group-text class="brd-select"><b-icon-search></b-icon-search></b-input-group-text>
          </template>
          <b-form-input class="brd-select"></b-form-input>
        </b-input-group>
        <b-select v-model="selected" :options="options" class="col-lg-2 brd-select"></b-select>
        <b-select v-model="selected" :options="options" class="col-lg-1 brd-select"></b-select>
        <b-select v-model="selected" :options="options" class="col-lg-1 brd-select"></b-select>
      </div>
      <div class="row">
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
              <img src="@/assets/png/preview.png">
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
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/png/preview.png">
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
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/png/preview.png">
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
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/png/preview.png">
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
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/png/preview.png">
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
        <div class="col-lg-6 card">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/png/preview.png">
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
    </div>
  </div>
</template>
<script>
    export default {
        name: "coworkings"
    }
</script>
<style scoped>
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
  }
  img{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: -15px;
    width: 270px;
    height: auto;
  }
  .title{
    margin-top: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #383838;
  }
  .adress{
    margin-top: -20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
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
  .cab{
    margin-top: -15px;
    margin-left: 15px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #383838;
  }
</style>