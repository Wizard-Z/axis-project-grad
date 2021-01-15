package automationTesting

import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import java.util.concurrent.TimeUnit

class DashBoard{
    fun dashBoardTest(driver:WebDriver)
    {
        driver.findElement(By.xpath("//button[contains(text(),'Dashboard')][1]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.findElement(By.xpath("//button[contains(text(),'Requests')]")).click()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)
        driver.findElement(By.xpath("//button[contains(text(),'Status')]")).click()

        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)
        driver.findElement(By.xpath("//button[contains(text(),'Profile')]")).click()
        driver.findElement(By.xpath("//button[contains(text(),'Log Out')]")).click()

    }
}