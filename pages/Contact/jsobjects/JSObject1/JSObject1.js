export default {
	isCurrentPage: (page) => {
		if(appsmith.store.page === page) return true;
		return false;
	},

	setCurrentPage: (page) => {
		storeValue('page', page);
		navigateTo(page)
	},

	async onClickParent() {
		// let count = countUsers.data.map((item) => item.count);
		// for(let i = 0; i <count; i++){
// 
		// }
		// console.log("this is: "+ count)

	},
	async onClickBtn() {
		let product = Api2.data.price
		//let product = Api2.data.products.find((item) =>  item.price)
		let productPrice = product * 0.432
		console.log("This is the price: " + productPrice);
		 storeValue('price', productPrice)
	},

	async onPageLoad() {
		storeValue('price', '')
	},
}