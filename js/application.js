let titles = ['ID', 'TITLE', 'ISBN', 'AUTHOR'];
let books = [
	{
		id: 1,
		title: 'Based Design Mobile Learning Course on Android',
		author: 'Liranti Rahmelina',
		isbn: "1978-0524-2528-6374"
	},
	{
		id: 2,
		title: 'Development of Sales Application Using QR Code',
		author: 'Ricky Akbar, Husnil Kamil',
		isbn: "1978-0524-2528-6374"
	},
	{
		id: 3,
		title: 'Perancangan dan Implementasi Web Service pada Aplikasi Permainan ',
		author: 'Gilang Arsya Priyatna Zaman',
		isbn: "1978-0524-2528-6374"
	},
	{
		id: 4,
		title: 'Perancangan Augmented Reality Media Markerless PoI',
		author: 'Abraham Christover Manuputty',
		isbn: "1978-0524-2528-6374"
	}
	,
	{
		id: 5,
		title: 'Pengembangan SIG Berbasis Node.JS untuk Pemetaan Mesin dan Tracking',
		author: 'Rachmat Fajrin',
		isbn: "1978-0524-2528-6374"
	}
];

let app = new Vue({
	el: '#app',
	data: {
		books: books,
		titles: titles,
		isAdd: false,
		isUpdate: false,
		id: 6,
		title: '',
		author: '',
		isbn: '',
		curId: 0,
		inputErr: [false, false, false]
	},
	methods: {
		add: function() {
			this.isAdd = true;
		},
		cancelAdd: function() {
			this.inputErr = [false, false, false]
			this.title = '';
			this.author = '';
			this.isbn = '';
			this.isAdd = false;
		},
		update: function(i) {
			this.isUpdate = true;
			this.title = this.books[i].title;
			this.author = this.books[i].author;
			this.isbn = this.books[i].isbn;
			this.curId = this.books[i].id;
		},
		cancelUpdate: function() {
			this.inputErr = [false, false, false]
			this.title = '';
			this.author = '';
			this.isbn = '';
			this.isUpdate = false;
		},
		newJurnal: function() {
			if(!this.checkForm()) {
				return;
			}
			this.books.push({
				id: this.id++,
				title: this.title,
				author: this.author,
				isbn: this.isbn
			});
			this.cancelAdd();
		},
		upJurnal: function(id) {
			if(!this.checkForm()) {
				return;
			}
			for(let i = 0; i < this.books.length; i++) {
				if(this.books[i].id == id) {
					this.books.splice(i, 1, {
						id: id,
						title: this.title,
						author: this.author,
						isbn: this.isbn
					});
				}
			}
			this.cancelUpdate();
		},
		checkForm: function () {
			let title = this.title.trim()
			let auth= this.author.trim()
			let isbn = this.isbn.trim()
			if(title && auth && isbn) {
				return true;
			}

			if (!title) {
				this.inputErr.splice(0, 1, true);
			}
			else {
				this.inputErr.splice(0, 1, false);
			}
			if (!isbn) {
				this.inputErr.splice(1, 1, true);
			}
			else {
				this.inputErr.splice(1, 1, false);
			}
			if (!auth) {
				this.inputErr.splice(2, 1, true);
			}
			else {
				this.inputErr.splice(2, 1, false);
			}
			return false;
		},
	},
	computed: {
		isAdd: function() {
			return this.isAdd;
		},
		isUpdate: function() {
			return this.isUpdate;
		},
		isError: function() {
			for(let i = 0; i < this.inputErr.length; i++) {
				if(this.inputErr[i])
					return true;
			}
			return false;
		},
	}
})
