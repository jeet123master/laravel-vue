<template>
	<div>
		<h1 ref="myref">hook tutorial</h1>
		<h2>I live in {{name}}</h2>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				name: 'kathmandu'
			}
		},
		beforeCreate(){
			console.log(this.name);
		},
		created(){
			// call mostly intial data from it..
			console.log("data ", this.name);
		},
		mounted(){
			console.log(this.$refs.myref);
		}
	}
</script>