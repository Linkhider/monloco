<template>
<div class="nav">
    <div class="container mt-2 mb-2">
        <div class="raw d-flex align-items-center">
          <img src="../assets/svg/logo.svg" class="col-lg-2">
          <div class="raw d-flex align-items-center ml-auto">
            <b-select v-model="selected" :options="options" class="col-sm brd-select"></b-select>
            <div class="brd ml-2">
              <b-avatar class="brd-avatar"></b-avatar>
              <span class="ml-2 mr-2">Екатерина Юнусова</span>
            </div>
          </div>
        </div>
    </div>
</div>
</template>
<style>
  .nav{
  background: #FFFFFF;
  border: 1px solid #DBBFA7;
  box-shadow: 0px 1px 10px rgba(219, 191, 167, 0.1);
  }
  .brd{
    border: 2px solid #DBBFA7;
    box-sizing: border-box;
    border-radius:25px 5px 5px 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  .brd-avatar{
    border: 2px solid #DBBFA7;
  }
  .brd-select{
    border: 2px solid #DBBFA7;
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 12px;
  }
</style>

<script>
    export default {
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Москва' },
                    { value: 'a', text: 'Тюмень' },
                    { value: 'b', text: 'Краснодар' },
                    { value: 'c', text: 'Красноярск' }
                ]
            }
        }
    }
</script>
