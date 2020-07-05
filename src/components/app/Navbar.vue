<template>
  <div class="nav">
      <div class="container">
        <div class="row align-items-center" type="white" variant="light">
          <div class="col-lg-2 logo1" align="center">
            <p >monloco</p>
            <p class="logo2">BEATY COWORKING</p>
          </div>
          <div class="mx-1 col-lg-1 ml-auto" >
            <b-dropdown variant="outline-dark" right text="Город">
              <b-dropdown-item>Москва</b-dropdown-item>
              <b-dropdown-item>Краснодар</b-dropdown-item>
              <b-dropdown-item>Тюмень</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="col-lg-3 border-danger">
            <b-avatar href="#" icon="person-fill"></b-avatar>
            Екатерина Юнусова
          </div>
        </div>
      </div>
  </div>
</template>
<style>
  .nav{
    position: fixed;
    hight:70px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DBBFA7;
    box-shadow: 0px 1px 10px rgba(219, 191, 167, 0.1);
  }
  .logo1{
    font-family: 'Cormorant Garamond';
    font-size:2rem;
    letter-spacing: 2px;
  }
  .logo2{
    margin-top: -20px;
    font-family: 'Cormorant Garamond';
    font-size:0.5rem;
    letter-spacing: 2px;
  }
</style>