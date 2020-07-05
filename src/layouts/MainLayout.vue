<template>
  <div>
    <Navbar/>
    <Sidebar/>

  </div>


</template>
<script>
    import Navbar from '@/components/app/Navbar'
    import Sidebar from '@/components/app/Sidebar'
    export default {
        name: 'main-layout',
        data: () => ({
            isOpen: true
        }),
        components: {
            Navbar, Sidebar
        }
    }
</script>
