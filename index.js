var demo = new Vue({
	el: '#app',
	data: {
		text: '',
		resultado: ''
	},
	methods: {
		validate() {
			if (this.text.trim() !== '') {
				let mySurname = (' M I I ' + ' L L ' + ' E R ').replace(/ /g, '') +
				' ' + (' REBE LL O ').replace(/ /g, '');

				if (this.text.toLowerCase() === 'vinícius ' + mySurname.toLowerCase()) {
					this.resultado = 'You are right, you typed my first name together.';
					return;
				} else if (this.text.split(' ').length !== 2) {
					this.resultado = 'My surname is two.';
					return;
				}

				this.resultado = this.text.toLowerCase() === mySurname.toLowerCase() ? 'You are right.' : 'You are wrong.';
			} else {
				this.resultado = 'Type something.';
			}
		},
		focusInput() {
			this.$refs.surname.focus();
		}
	}
});