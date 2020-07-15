<template>
<div class="nav">
    <div class="container mt-2 mb-2">
        <div class="row algn">
          <div class="d-flex align-items-center">
              <a href="/"  class="col-lg-2 animation logo"><img src="../assets/svg/logo-white.svg"></a>
          </div>
          <div class="row d-flex align-items-center col-lg-4 ml-auto avtr">
            <b-select v-model="selected" :options="options" class="mr-2 col-sm brd-select hide"><b-icon-arrow-up></b-icon-arrow-up></b-select>
            <div class="d-flex align-items-center brd ml-auto mr-3">
              <a href="/">
                <b-avatar class="brd-avatar"></b-avatar>
                <span class="ml-2 mr-2 wht">Екатерина Юнусова</span>
              </a>
            </div>
          </div>
        </div>
    </div>
</div>
</template>
<style>
  a{
    text-decoration: none;
  }
  span{
    color: black;
  }
  .animation:hover{
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
    transition: 1s;
  }
  .wht{
    color: #fff;
  }
  .nav{
    background: #383838;
    border-bottom: 1px solid #fff;
    box-shadow: 0px 1px 10px rgba(219, 191, 167, 0.1);
  }
  .brd{
    border-left: none;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius:25px 5px 5px 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
  .brd-avatar {
    border: 1px solid #fff;
    overflow: hidden;
    border-left: none;

  }
  .brd-select {
    border: 1px solid #fff;
    background: #383838 url("../assets/svg/select.svg") no-repeat scroll 90% 50%;
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;
    color: #FFFFFF;
    outline: none;
  }
  .avtr{
    margin-right: 15px;
  }
  .page-link:hover {
    z-index: 2;
    color: #a0c0bf;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #a0c0bf;
  }
  .custom-select:focus {
    border-color: #f9f9f9;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(41, 41, 41, 0.25);
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #a0c0bf;
    color: #a0c0bf;

  }
  .page-item button {
    border: 1px solid #a0c0bf;
    border-radius: 5px!important;
    margin: 5px;
    color: #a0c0bf;
  }
  .page-item span {
    border: 1px solid #a0c0bf;
    border-radius: 5px!important;
    margin: 5px;
    color: #a0c0bf;

  }
  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #a0c0bf;
    border-color: #a0c0bf;
  }


  @media ( max-width: 1080px) {
    img{
      width: 95%;
    }
    .brd-avatar {
      margin-left: auto;
      margin-top: 0px;
      border: 1px solid #fff;

    }
    .algn{
      flex-wrap: nowrap;
    }
    .brd{
      visibility: hidden;
      display: flex;
    }
    .brd-avatar {
     visibility: visible;
      display: flex;
    }
    .hide {
     visibility: hidden;
      display: none;
      position: absolute;
    }
    .avtr{
      position: absolute;
    }
    .logo{
      width: 80%;
    }
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
