<template>
    <div class="mt-2 pb-0">
       <footer>
           <div class="d-flex justify-content-center">
               <img src="../assets/svg/logo-white.svg" class="mt-2" alt="">
           </div>
           <hr>
           <div class="container">
               <div class="row">
                   <div class="col-lg-2">
                       <a href="/">Меню</a><br/>
                       <a href="/">Меню</a><br/>
                       <a href="/">Меню</a><br/>
                       <a href="/">Кворкинги</a><br/>
                   </div>
                   <div class="col-lg-2">
                       <a href="/">Мастера</a><br/>
                       <a href="/">Мои мастера</a><br/>
                       <a href="/">Мои записи</a><br/>
                       <a href="/">Меню</a><br/>
                   </div>
                   <div class="col-lg-2">
                       <a href="/">Меню</a><br/>
                       <a href="/">Меню</a><br/>
                       <a href="/">Меню</a><br/>
                       <a href="/">Меню</a><br/>
                   </div>
                   <div class="ml-auto footer">
                       <button variant="outline-light" class="mt-2 mb-2 contact">Контактная информация</button>
                       <br>
                       <span class="d-flex justify-content-center mt-1">+7 (495) 123-45-67</span>
                   </div>

               </div>
               <div class="d-flex justify-content-center mt-3 pb-1 p">
                   © Название сайта 2020. Все права защищены.
               </div>

           </div>
       </footer>

    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    footer{
        background: #383838;
    }
    hr{
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
    a{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
    button{
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        height: 40px;
        width: 272px;
        background: inherit;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
    span{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .contact:hover{
        -moz-transform: scale(1.05);
        -webkit-transform: scale(1.05);
        -o-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: 0.7s;
    }
    @media (max-width: 1080px) {
        .footer{

        }
    }
</style>