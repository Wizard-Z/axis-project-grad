package automationTesting


import org.junit.jupiter.api.Test
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import java.util.concurrent.TimeUnit


class AdminPanel {

    var product: Product? =null
    var partner: Partner? =null
    var dashBoard: DashBoard? =null
    @Test
    fun adminPanelTest()
    {
        System.setProperty("webdriver.chrome.driver", "E:\\Zipped file of software\\chromedriver.exe")
        var driver: WebDriver = ChromeDriver()

        driver.get("http://localhost:4000/")
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)
        driver.manage().window().maximize();
        product= Product()
        product!!.login(driver)
        product!!.addProduct(driver)
        product!!.enterDetails(driver)
       // product!!.submit(driver)


        partner =Partner()
        partner!!.addPartner(driver)
        partner!!.enterDetails(driver)

        dashBoard= DashBoard()
        dashBoard!!.dashBoardTest(driver)
          }

    }

