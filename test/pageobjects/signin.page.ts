class SigninPage {

    get signInBtn() { return $("//a[@class='login']") }
    get AuthHeader() { return $("//h1[@class='page-heading']") }

    async openApplication() {
        await browser.url("http://automationpractice.com/index.php")
        await browser.maximizeWindow()
    }

    async clickOnSingIn() {
        await this.signInBtn.click()
    }
}
export default new SigninPage()