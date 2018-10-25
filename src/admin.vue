<template>
  <div id="admin">
  	<div class="nav" v-for="item in routes">
  		<router-link v-for="(child,index) in item.children" :key="index" :to="{path:item.path+''+ child.path}">
  			{{ child.alias }}
  		</router-link>
  	</div>
  	<div>我是首页内容</div>
  	<section>
  		<router-view></router-view>
  	</section>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
  	return {
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
  background:#ccc; 
}
#admin .nav{
  	width:100%;
  	height:80px;
  	text-align:center;
  }
</style>
