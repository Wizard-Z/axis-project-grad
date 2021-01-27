package automationTesting



import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.support.ui.Select
import java.util.concurrent.TimeUnit


class Partner {

    fun addPartner(driver: WebDriver){
        driver.findElement(By.xpath("//button[contains(text(),'+Partner')]")).click()
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS)



    }
    fun enterDetails(driver: WebDriver)
    {
        val partnerName = Select(driver.findElement(By.xpath("//select[@name='name']")))
        partnerName.selectByVisibleText("RELIANCE")

        driver.findElement(By.xpath("//input[@name='logo']")).sendKeys("https://tinyurl.com/yxhw4f8o")
        driver.findElement(By.xpath("//input[@name='description']")).sendKeys("Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.")
        val insuranceType = Select(driver.findElement(By.xpath("//select[@name='insuranceType']")))
        insuranceType.selectByVisibleText("Home Insurance")

        driver.findElement(By.xpath("//input[@name='endPoints']")).sendKeys("http://localhost:8089/home-reliance/quotes/")
      //  driver.findElement(By.xpath("//textarea[@name='feilds']")).sendKeys("{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"*City is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\",\"validation\":{\"required\":\"*RTO is mandatory\" } }, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"*Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"*Fuel type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"*Model Year is mandatory\" } } ,{ \"label\":\"Phone Number\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"phoneNumber\", \"placeholder\":\"Enter Phone Number\" }]}")
        val uploadElement = driver.findElement(By.xpath("//input[@type='file']"))

        uploadElement.sendKeys("C:\\Users\\SHRUTI\\Desktop\\testCsv.csv")

        driver.findElement(By.xpath("//input[@value='Pretty']")).click()

        driver.findElement(By.xpath("//textarea[@name='requestBody']")).sendKeys("{\"k1\":\"city\",\"k2\":\"residentType\",\"k3\":\"propertyType\",\"k4\":\"marketValue\",\"k5\":\"phoneNumber\",\"k6\":\"email\"}")
        driver.findElement(By.xpath("//button[contains(text(),'Add')]")).click()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

        driver.switchTo().alert().accept()

      }
}

