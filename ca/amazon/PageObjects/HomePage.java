package amazon.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver driver;
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how=How.XPATH, using="//span[contains(@class,'nav-line-1') and contains(text(),'Hello,')]")
	public WebElement UserNameLink;
	
	@FindBy(how=How.XPATH, using="//span[contains(text(),'Sign Out')]")
	public WebElement SignOutLink;
	
	@FindBy(how=How.XPATH, using="//input[contains(@id,'twotabsearchtextbox')]")
	public WebElement Searchbox;
	
	@FindBy(how=How.XPATH, using="//div[@id='search']")
	public WebElement SearchResultsPane;
	
	public WebDriver getUserSignOut() 
	{
		UserNameLink.click();
		SignOutLink.click();
		return driver;
	}
	
}
