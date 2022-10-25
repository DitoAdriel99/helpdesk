<template>
  <Header></Header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Form from '@/components/Form'

export default{
  components:{
    Header,
    Form
  },
}
</script>