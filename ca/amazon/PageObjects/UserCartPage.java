package amazon.PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class UserCartPage {
	
	WebDriver driver;
	public UserCartPage	(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	private String productTitle = "";
	
	By deleteItem = By.xpath("//span[@class='a-size-medium sc-product-title' and contains(text(),'"+productTitle+"')]/../../../../following-sibling::div[@class='a-row sc-action-links']//input[@value='Delete']");
	
	@FindAll(@FindBy(how=How.XPATH, using="//span[@class='a-size-medium sc-product-title']"))
	public List<WebElement> cartProductsList;
	
	public WebElement deleteProduct = driver.findElement(deleteItem);
	

}
