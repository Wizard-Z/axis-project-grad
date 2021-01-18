package automationTesting

import org.junit.Test
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import java.util.concurrent.TimeUnit

class UserPanel {
    @Test
    fun getQuotes() {
        System.setProperty("webdriver.chrome.driver", "E:\\Zipped file of software\\chromedriver.exe")
        val driver: WebDriver = ChromeDriver()
        driver.get("http://localhost:3000/")
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.findElement(By.xpath("//a[contains(text(),'Show Quotes')][1]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.findElement(By.xpath("//a[contains(text(),'Get Free Quotes')][1]")).click()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)

        driver.findElement(By.xpath("//input[@name='city']")).sendKeys("Delhi")
        driver.findElement(By.xpath("//input[@name='RTO']")).sendKeys("DH01")
        driver.findElement(By.xpath("//input[@name='brandName']")).sendKeys("Hyundai")
        driver.findElement(By.xpath("//input[@name='fuelType']")).sendKeys("Petrol")
        driver.findElement(By.xpath("//input[@name='modelYear']")).sendKeys("2019")
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)


        driver.findElement(By.xpath("//input[@placeholder='Enter Phone Number']")).sendKeys("9876543210")
        driver.findElement(By.xpath("//button[contains(text(),'Get Quotes')]  ")).click()
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS)
        driver.quit()





    }
}

