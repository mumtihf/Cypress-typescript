import { InventoryPage } from "./pages/inventory_page"
import {LoginPage} from "./pages/login_pages"

let loginPage = new LoginPage()
let inventoryPage = new InventoryPage()
const URL = 'https://www.saucedemo.com/'

it('Complete Checkout Information', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    inventoryPage.checkoutComplete('Mumti','Farisa','15416')
    inventoryPage.assertCheckoutComplete()
})

it('Do Not Complete Checkout Information', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    inventoryPage.checkoutNotComplete('Farisa','15416')
    inventoryPage.assertCheckoutNotComplete()
})
