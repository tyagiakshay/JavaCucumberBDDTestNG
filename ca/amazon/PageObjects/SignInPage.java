package amazon.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {
	WebDriver driver;
	public SignInPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how=How.XPATH, using="//input[contains(@id,'ap_email')]")
	public WebElement emailTextBox;
	
	@FindBy(how=How.XPATH, using="//input[contains(@id,'continue')]")
	public WebElement ContinueButton;
	
	@FindBy(how=How.XPATH, using="//input[contains(@id,'ap_password')]")
	public WebElement passwordTextBox;
	
	@FindBy(how=How.XPATH, using="//span[contains(text(),'Sign-In')]")
	public WebElement SignInButton;
	
	@FindBy(how=How.XPATH, using="//input[contains(@name,'code')]")
	public WebElement OTPBox;
	
	@FindBy(how=How.XPATH, using="//span[contains(text(),'Continue')]")
	public WebElement ContinueWithOTP;
	
	public WebDriver getUserLogin(String email, String password) throws InterruptedException 
	{
		emailTextBox.sendKeys(email);
		ContinueButton.click();
		Thread.sleep(5000);
		passwordTextBox.sendKeys(password);
		SignInButton.click();
		Thread.sleep(20000);
		ContinueWithOTP.click();
		return driver;
	}
	
}
