<template>
  <div class="hw100">
    <Layout class="hw100">
      <Header class="header_container">
        <div >
          <img src=""/>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger>
          <Menu width="200px" class="hw100" @on-select="_onItemSelect">
            <MenuItem v-for="(item ,index) in leftMenuConfig" :name="item.value" :key="item.value" >
              {{item.label}}
            </MenuItem>
          </Menu>
        </Sider>
        <Content>
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import leftMenuConfig from '../config/leftMenu.js'

  export default {
    data() {
      return {
        leftMenuConfig: leftMenuConfig
      }
    },
    methods: {
      _onItemSelect(val){
        this.$router.push(val)
      }
    },
    computed: {},
    watch: {},

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header_container
    width 100%;
    border-bottom:2px solid transparent
    background white
    box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1)
    position relative
    z-index 20
  .hw100
    width 100%
    height 100%

</style>
