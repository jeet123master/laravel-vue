<template>
	<div>
		<h2>The views number is {{views}}</h2>
		<button @click="updateCounter(1)">Increase</button>
		<button @click="updateCounter(-1)">Decrease</button>
		<br>
		<br></br>

		<div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
			<h1>{{blog.title}}</h1>
			<p>{{blog.post}}</p>
		</div>

		<br>
		<br>
		<br>

		<div>
			<h1 v-if="showItem">Show this item if 'showItem' is true</h1>
			<h1 v-else>Show this item if 'showItem' is False</h1>
		</div>

		<button @click="showItem = !showItem">Change Showitem</button>


	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				views: 0,
				blogs: [],
				showItem: false
			}
		},
		methods: {
			updateCounter(number){
				this.views += number
			}
		},
		created(){
			this.views = 100

			let posts = [
					{title: 'title blog 1', 'post':'this is blog post 1', id:1},
					{title: 'title blog 2', 'post':'this is blog post 2', id:2},
					{title: 'title blog 3', 'post':'this is blog post 3', id:3},
					{title: 'title blog 4', 'post':'this is blog post 4', id:4},
				]
			this.blogs = posts
		}
	}
</script>