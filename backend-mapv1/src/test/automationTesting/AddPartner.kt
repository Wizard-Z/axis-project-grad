package automationTesting



import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.support.FindBy
import java.util.concurrent.TimeUnit


class AddPartner {

    fun addPartner (driver: WebDriver){
        driver.findElement(By.xpath("//button[contains(text(),'+Partner')]")).click()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)



    }
    fun enterDetails(driver: WebDriver)
    {
        driver.findElement(By.xpath("//input[@name='name']")).sendKeys("BHARTI AXSA")
        driver.findElement(By.xpath("//input[@name='logo']")).sendKeys("https://tinyurl.com/ydgvjpgx")
        driver.findElement(By.xpath("//input[@name='description']")).sendKeys("Claim Service of the Year Award. Buy New/Renew Car, Health & Bike Insurance Online Now. Get Comprehensive Insurance Solutions by Bharti AXA. 27Lacs+ Claim Settled.\n\n")
        driver.findElement(By.xpath("//input[@name='insuranceType']")).sendKeys("CarInsurance")
        driver.findElement(By.xpath("//input[@name='endPoints']")).sendKeys("http://localhost:8089/motor-bhartiAxa/quotes")
        driver.findElement(By.xpath("//textarea[@name='feilds']")).sendKeys("{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"*City is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\",\"validation\":{\"required\":\"*RTO is mandatory\" } }, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"*Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"*Fuel type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"*Model Year is mandatory\" } } ,{ \"label\":\"Phone Number\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"phoneNumber\", \"placeholder\":\"Enter Phone Number\" }]}")

        driver.findElement(By.xpath("//input[@value='Pretty']")).click()

        driver.findElement(By.xpath("//textarea[@name='requestBody']")).sendKeys("{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}")
        driver.findElement(By.xpath("//button[contains(text(),'Add')]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.switchTo().alert().accept()

      }
}

