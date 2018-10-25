<template>
  <div id="index">
    <div class="nav" v-show="show" v-for="item in routes">
    	<div class="nav-child" v-for="(child,index) in item.children">
    		<div v-for="(child1,index1) in child.children">
	    		<router-link :to="{path:item.path+''+ child.path +'/'+ child1.path}">
	    			{{ child1.alias }}
    			</router-link>
    		</div>
    	</div>
    </div>
    <section>
    	<router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
  	return {
  		show:'false',
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style lang="scss" scoped>
#index {
  width:100%;
  height:100%;
  background:orange;
}
</style>
