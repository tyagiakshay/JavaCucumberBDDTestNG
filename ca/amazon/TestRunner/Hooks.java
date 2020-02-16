package amazon.TestRunner;

import org.openqa.selenium.WebDriver;

import amazon.Utility.BrowserUtility;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	WebDriver driver;
	
	@Before
	public WebDriver launchBrowser() throws InterruptedException 
	{
		BrowserUtility.OpenBrowser(driver, "chrome");
		return driver;
	}
	
	@After
	public void closeBrowser() 
	{
		driver.close();
	}

}
