package automationTesting

import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.support.FindBy
import java.util.concurrent.TimeUnit
import org.openqa.selenium.WebElement as WebElement1


class AddProduct {


    fun login(driver: WebDriver)
    {
        driver.findElement(By.xpath("//input[@type='email']")).sendKeys("aishwarya@gmail.com")
        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("abc123")
        driver.findElement(By.xpath("//button[contains(text(),'Log In')]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

    }

    fun addProduct(driver:WebDriver):WebDriver
    {
        driver.findElement(By.xpath("//button[contains(text(),'+Product')]")).click()

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)
       return driver
    }
   fun enterDetails(driver: WebDriver):WebDriver
   {
       driver.findElement(By.xpath("//input[@name='id']")).sendKeys("1")
       driver.findElement(By.xpath("//input[@name='productName']")).sendKeys("Car Insurance")
       driver.findElement(By.xpath("//input[@name='imgUrl']")).sendKeys("https://tinyurl.com/ycgw4ghn\n")
       driver.findElement(By.xpath("//input[@name='productDescription']")).sendKeys("Ensure peace of mind by purchasing a comprehensive Car Insurance policy to pay for repairs to your vehicle and third party liabilities. Make sure that expensive repairs to your vehicle do not dent your pocket.\n")
       driver.switchTo().alert().accept()

       return driver
   }
    fun submit(driver: WebDriver)
    {
        driver.findElement(By.xpath("//button[contains(text(),'Add')]")).click()

       driver.switchTo().alert().accept()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)

    }

}