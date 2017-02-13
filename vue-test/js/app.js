Vue.component('section-list', {
  props: ['aoeu'],
  template: '<a>{{ aoeu.text }}</a>'
});

var mainPage = new Vue({
	el: '#bjbk-wish-list',
	state : {
		activeSection : null
	},
	data: {
	    message: '봉주와 나의 wish list 키키키',
	    sectionList: [
			{
		      	text: '먹고 싶은거'
			},
			{
		      	text: '하고 싶은거'
			},
			{
		      	text: '사고 싶은거'
			},
			{
		      	text: '기타'
			},
			{
		      	text: '봉주에게 바라는거'
			},
			{
		      	text: '백경에게 바라는거'
			},
		]
	}
});
