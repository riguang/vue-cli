<template>
  <div>
    <h1>menu：{{menu}}</h1>
  </div>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data () {
      return {
        menu: this.$store.state.com.menu
      }
    },
    computed: {
      // mapGetters将store中的getters映射到局部计算属性
      ...mapGetters(['test', 'access_token'])
    },
    async created() {
      // this.$store.commit({
      //   type: 'INCREASE',
      //   num: 10
      // })
      // this.$store.dispatch('INCREASE', {
      //  menu:'个人信息'
      // })
      console.log(`action异步修改`)
      await this.ADD_MENU({menu:'个人信息'})
      console.log(`action异步修改完成`)
    },
    methods:{
      ...mapActions(['ADD_MENU'])
    }
  }
</script>
