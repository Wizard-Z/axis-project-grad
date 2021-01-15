package automationTesting


import org.junit.Before
import org.junit.jupiter.api.Test
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.remote.server.DriverFactory
import org.testng.annotations.BeforeMethod
import java.util.concurrent.TimeUnit


class AdminPanel {

    var addProduct: AddProduct? =null
    var addPartner: AddPartner? =null
    var dashBoard: DashBoard? =null
    @Test
    fun adminPanelTest()
    {
        System.setProperty("webdriver.chrome.driver", "E:\\Zipped file of software\\chromedriver.exe")
        var driver: WebDriver = ChromeDriver()

        driver.get("http://localhost:4000/")
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        addProduct= AddProduct()
        addProduct!!.login(driver)
        addProduct!!.addProduct(driver)
        addProduct!!.enterDetails(driver)
        addProduct!!.submit(driver)


        addPartner =AddPartner()
        addPartner!!.addPartner(driver)
        addPartner!!.enterDetails(driver)

        dashBoard= DashBoard()
        dashBoard!!.dashBoardTest(driver)
          }

    }

