<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>



     
</template>

<script>

export default {
};
</script>


<style scoped>
body{
	margin: 0;
	font-size: 16px;
	color: #444;
	font-family: Arial, serif;
}

section{
	margin: 0 auto;
	min-width: 500px;
	max-width: 800px;
}

table{
	width: 100%;
	border-spacing: 0;
	text-align: center;
}

table th{
	background: #46607b;
	color: #fff;
	text-transform: uppercase;
}

table tbody tr td{
	border-bottom: 1px #ccc solid;
	padding: 0.5em 0;
}

table tbody tr:hover{
	background: #e4e8ff;
	cursor: pointer;
}

button{
	border: 1px solid #ccc;
	background: #eee;
	padding: 0.5em 2em;
	margin-top: 1em;
	border-radius: 4px;
}
button:hover{
	background: #e2e2e2;
	cursor: pointer;
}

div#grey-modal-background{
	position: absolute;
	left: 0;
	top: 0;
	background: rgba(8, 8, 8, 0.62);
	height: 100vh;
	width: 100%;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
}
div#grey-modal-background.hidden{
	display: none;
}
form.modal{
	background: #fff;
	width: 400px;
	padding: 1em;
	border-radius: 5px;
	box-shadow: 0 5px 5px 2px #555;
}
form.modal label{
	display: block;
}
form.modal input{
	width: 100%;
	box-sizing: border-box;
}
form button{
	float: right;
	margin-left: 1em;
}
form button.green{
	background: #528051;
	color: #fff;
}
form button.green:hover{
	background: #487047;
}
form input{
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 3px 4px;
}
form input.error{
	border: 1px solid #e5635f;
}
</style>