package automationTesting

import org.junit.Test
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.support.ui.ExpectedConditions
import org.openqa.selenium.support.ui.WebDriverWait
import java.util.concurrent.TimeUnit


class UserPanel {
    @Test
    fun getQuotes() {
        System.setProperty("webdriver.chrome.driver", "E:\\Zipped file of software\\chromedriver.exe")
        val driver: WebDriver = ChromeDriver()
        driver.get("http://localhost:3000/")
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.findElement(By.xpath("//div[@class='col-lg-4']/h2[contains(text(),'Home Insurance')]//ancestor::div[@class='col-lg-4']//following-sibling::p/a[contains(text(),'Show Quotes')]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

      //  driver.findElement(By.xpath("//div[contains(text(),'RELIANCE')]/ancestor::div[@class='card-body']//following-sibling::p/a[contains(text(),'Get Free Quotes')]")).click()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)
        val wait = WebDriverWait(driver, 5)
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[contains(text(),'RELIANCE')]/ancestor::div[@class='card-body']//following-sibling::p/a[contains(text(),'Get Free Quotes')]"))).click()
        driver.findElement(By.xpath("//input[@name='city']")).sendKeys("Delhi")
        driver.findElement(By.xpath("//input[@name='residentType']")).sendKeys("owner")
        driver.findElement(By.xpath("//input[@name='propertyType']")).sendKeys("flat")
        driver.findElement(By.xpath("//input[@name='marketValue']")).sendKeys("1000000")
        driver.findElement(By.xpath("//input[@name='phoneNumber']")).sendKeys("9111430292")
        driver.findElement(By.xpath("//input[@name='email']")).sendKeys("aish@gmail.com")

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)


        driver.findElement(By.xpath("//button[contains(text(),'Get Quotes')]  ")).click()
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS)
        driver.findElement(By.xpath("//button[contains(text(),'Compare Quotes')]  ")).click()







    }
}

