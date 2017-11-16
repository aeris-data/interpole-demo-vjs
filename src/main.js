require("exports-loader?!./l.min.js")

var pjson = require('../package.json');
console.log(pjson.version);

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import {VueColorPlugin, VueAerisLanguagePlugin} from 'aeris-mixins'
Vue.use(VueColorPlugin)
Vue.use(VueAerisLanguagePlugin)

import InterpoleCoucou from './interpole-coucou.vue'


ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://rawgit.com/aeris-data/aeris-commons-fonts/develop/font/aeriscommmonsfonts.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js','https://cdnjs.cloudflare.com/ajax/libs/moment-range/3.0.3/moment-range.min.js']
})
ljs.load('dep', function() {
	
	
	var bundleName = "interpole-demo-vjs"

		function registerElement(name, component) {
			if (!window.registredAerisElements) {
				window.registredAerisElements = [];
			}
			if (window.registredAerisElements.indexOf(name) < 0) {
				let registrable = true
				if (window.aerisexclusions) {
					var aux = window.aerisexclusions[bundleName]
					if (aux) {
						if (aux.indexOf(name)>= 0) {
							console.log("Aeris - Exclusion of "+name)
							registrable = false;
						}
					}
				}
				if (registrable) {
					console.log("Aeris - Registration of "+name)
					Vue.customElement(name, component);
					window.registredAerisElements.push(name)
				}
			}
		}
	
	window.moment = moment
	window['moment-range'].extendMoment(moment);
	
	console.info("Début registration des custom elements commons")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	
	registerElement('interpole-coucou', InterpoleCoucou);
	

})

