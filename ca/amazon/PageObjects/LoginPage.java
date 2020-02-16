package amazon.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	public LoginPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH, using="//*[contains(text(),'Hello, Sign in')]")
	public WebElement SignInButton;
	
	@FindBy(how=How.XPATH, using="//span[contains(@class,'nav-action-inner')]")
	public WebElement SignInPopUpButton;
	
	public WebDriver clickOnSignInButton()
	{
		SignInButton.click();
		SignInPopUpButton.click();
		return driver;
	}

}
