<template>
    <div>
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
                   <div class="ml-auto ">
                       <button variant="outline-light" class="mt-2 mb-2">Контактная информация</button>
                       <br>
                       <span class="d-flex justify-content-center">+7 (495) 123-45-67</span>
                   </div>

               </div>
               <p class="d-flex justify-content-center">
                   © Название сайта 2020. Все права защищены.
               </p>

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
    p{
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
</style>