<template>
<span >
Nom <input type="text" v-model="nom"></input>
Prenom <input type="text" v-model="prenom"></input>
Age <input type="text" v-model="age"></input>
<div class="error" v-if="error" :title="nomComplet">
   Coucou {{nomComplet}}
</div>
<div class="success" v-else>
Coucou {{nom}}
</div>
<button @click="changeStatus">Click !</button>

<ul>
	<li v-for="member in aeris"> {{member.name}} ({{member.age}})</li>
</ul>

</span>

</template>

<script>
export default {
  props: {
	  nom:  {
	      type: String,
	      default: 'Inconnu'
	    }
  },
  data () {
   return {
     error : true,
     prenom: "",
     age:0,
     aeris : [{name:"Nicole", age: 18},{name:"Cathy", age: 17}, {name:"Jacques", age: 25} ]
    }
  },
  
  computed: {
	nomComplet: function() {
		console.log("Nom complet")
		return this.prenom+" "+this.nom
	}  
  },
  
  methods: {
	  changeStatus: function() {
		 this.error = ! this.error;
	  }
  },
  
  created: function() {
	  console.log("Created: "+this.nom)
  }
 
}
</script>

<style>

.head {
	background: red;
	margin: 10px
}
.error {
	background: red;
	margin: 10px
}
.success {
	background: green;
	margin: 10px
}
  
</style>