export default {
	async loginBtn () {
		if(Input1.inputText === 'testUser' && Input2.inputText === '123'){
			Text3.isVisible = false
			storeValue('loggedName', Input1.inputText)
			navigateTo('Home')
		}
		else{
			Text3.isVisible = true
		}
	}
}