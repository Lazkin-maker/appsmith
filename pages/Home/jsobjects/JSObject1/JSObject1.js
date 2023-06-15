export default {

	async myFun2 () {
		if(Switch1.isSwitchedOn == true){
			Text1.text = 'Changed to English word'
			Input2.label = 'Enter the Yeast Batch ID'
			Input3.label = 'Enter the Yeast Quantity'
		  Text6.text = 'Current Enzyme Type'
			Text8.text = 'Remaining Time Before Next Sample'
			Text12.text = 'Additional Comments'
			Button9.text = 'Save'
			Button11.text = 'Save'
			Button7.text = 'Save'
			Select1.labelText = 'Select the Enzyme Type'
		}
		else{
			Text1.text = 'Changed to Swedish word'
			Input2.label = 'Ange jäst Batch ID' 
			Input3.label = 'Ange jästmängeden'
			Text6.text = 'Nuvarande EnzymTyp'
			Text8.text = 'Återstående tid före nästa prov'
			Text12.text = 'Ytterligare kommentarer'
			Button9.text = 'Spara'
			Button11.text = 'Spara'
			Button7.text = 'Spara'
			Select1.labelText = 'Välj EnzymTyp'
			
		}
	},


	async btnFunc () {
		let timer = 60;
		let minutes, seconds;

		if(appsmith.store.timer){
			let {timer} = appsmith.store
			const {min, sec} = timer.split(":").map(x => parseInt(x))
			timer = (min * 60) + sec
		}

		let interval = setInterval(displayTime, 1000)

		function displayTime() {
			minutes = parseInt(timer/60);
			seconds = parseInt(timer%60);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			storeValue('timer', minutes + ":" + seconds)
			timer--

			if(timer < 0 || timer === 60){
				clearInterval(interval);
			}
		}
	},

	async onPageLoad() {
		Switch1.isSwitchedOn = false
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

	async ButnChild1Func() {
		Button6.isVisible= true;
		Button18.isVisible= true;
	},
	
	async CookingButn() {
		Container7.isVisible= false
		Container15.isVisible= true
	},

		isCurrentPage: (page) => {
			if(appsmith.store.page === page) return true;
			return false;
		},

			setCurrentPage: (page) => {
				storeValue('page', page);
				navigateTo(page)
			},

				async menyBtn() {
					ButtonGroup1.isVisible = true;
				},

					async changeColorBtn(btn){
						if(btn == "Button15"){
							storeValue('colorBtn16', "#231f20")
							if(Container8.isVisible = true){
								Container8.isVisible = false
							}
							Container7.isVisible = true;
							Divider4.isVisible = true;
							Divider8.isVisible= false;
							if(appsmith.store.colorBtn15 == "#553DE9"){
								storeValue('colorBtn15', "#231f20")
							}else{
								storeValue('colorBtn15', "#553DE9")
							}
						}

						else if(btn == "Button16"){
							if(Container7.isVisible = true){
								Container7.isVisible = false
							}
							Container8.isVisible = true
							Divider4.isVisible= false;
							Divider8.isVisible= true;
							storeValue('colorBtn15', "#231f20")
							if(appsmith.store.colorBtn16 == "#553DE9"){

								storeValue('colorBtn16', "#231f20")
							}else{
								storeValue('colorBtn16', "#553DE9")
							}
						}
					},

						async FermenterNumber(number) {
							if(Container7.isVisible){
								Text11.text = "Fermenter " + number
							}
							else{
								Container7.isVisible = true;
								Text11.text = "Fermenter " + number
							}
						},
}