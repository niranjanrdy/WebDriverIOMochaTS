class CreateAccountPage {

    get email() { return $("//input[@class='is_required validate account_input form-control']") }
    get createAcc() { return $("//i[@class='icon-user left']") }
    get pageHeader() { return $("//h1[@class='page-heading']") }

    async proceedToCreateAccount(emailAddress: string) {
        await this.email.setValue(emailAddress)
        await this.createAcc.click()
    }

}
export default new CreateAccountPage()