export default {
	isCurrentPage: (page) => {
		if(appsmith.store.page === page) return true;
		return false;
	},

	setCurrentPage: (page) => {
		storeValue('page', page);
		navigateTo(page)
	},

	async onPageLoad() {
	
		Button4.isVisible = false
		Button5.isVisible = false
		Button6.isVisible = false
		Button18.isVisible = false
		Button19.isVisible= false
		Button20.isVisible= false
		Button21.isVisible= false
		ButtonGroup1.isVisible = false
	},

	async ButnParentFunc() {
		Button5.isVisible = true;
	},

	async ButnSiteFunc() {
		Button19.isVisible= true
		Button20.isVisible= true
		Button4.isVisible = true
		Button21.isVisible= true
	},


	mergeQuery: () =>{
		let combindedData = 
				genderQuery.data.map((item) =>{
					const user = nameEmailQuery.data.find((userItem) => item.id == userItem) || {}
					return {...item, ...user};
				})
		console.log(combindedData)
		return combindedData;    
	}
}

