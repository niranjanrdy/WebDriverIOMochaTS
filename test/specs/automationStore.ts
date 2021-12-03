import testData from '../testdata/signup.json'
import { internet } from "faker"
import signinPage from '../pageobjects/signin.page';
import createaccountPage from '../pageobjects/sign-up/createaccount.page';
import womenPage from '../pageobjects/menu/women.page';
import shoppingcartPage from '../pageobjects/cart/shoppingcart.page';
import addressPage from '../pageobjects/cart/address.page';
import shippingPage from '../pageobjects/cart/shipping.page';
import paymentPage from '../pageobjects/cart/payment.page';
import orderPage from '../pageobjects/cart/order.page';
import myaccountPage from '../pageobjects/myaccount.page';
import personalInfoPage from '../pageobjects/sign-up/personalInfo.page';

describe('To create an account and order an item in my store app', () => {
    it("Signup to the page then add product to the cart and confirm the order", async () => {
        await signinPage.openApplication()
        await signinPage.clickOnSingIn()
        await expect(signinPage.AuthHeader).toHaveTextContaining("AUTHENTICATION")
        await createaccountPage.proceedToCreateAccount(internet.email())
        await expect(createaccountPage.pageHeader).toHaveTextContaining("CREATE AN ACCOUNT")
        await personalInfoPage.clickTitle()
        await personalInfoPage.setFirstAndLastName(testData.names)
        await personalInfoPage.setPassword(internet.password(8))
        await personalInfoPage.selectDateOfBirth(testData.dateOfBirth)
        await personalInfoPage.clickCheck()
        await personalInfoPage.setCompany(testData.company)
        await personalInfoPage.setAddress(testData.address)
        await personalInfoPage.setMobileNumber(testData.mobileNumber)
        await personalInfoPage.setAliasAddress(testData.aliasAdd)
        await personalInfoPage.clickRegister()
        await expect(personalInfoPage.headerElement).toHaveText("MY ACCOUNT")
        await myaccountPage.WomenItem.click()
        await womenPage.addProductToCartFromWomenMenu()
        await expect(womenPage.productAdded).toHaveText("Product successfully added to your shopping cart")
        await womenPage.proceedToCheckOut()
        await expect(shoppingcartPage.shoppingCart).toHaveTextContaining("SHOPPING-CART SUMMARY")
        await shoppingcartPage.proceedToCheckout()
        await expect(addressPage.addressHeader).toHaveText("ADDRESSES")
        await addressPage.proceedToCheckout()
        await expect(shippingPage.shippingPage).toHaveText("SHIPPING")
        await shippingPage.selectTermAndProceedToCheckout()
        await expect(paymentPage.paymentHeader).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD")
        await paymentPage.selectPaymentType()
        await orderPage.clickOnConfirmOrder()
        await expect(orderPage.orderConfirmed).toHaveText("ORDER CONFIRMATION")
    })


})
