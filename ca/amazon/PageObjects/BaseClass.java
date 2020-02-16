package amazon.PageObjects;

import org.openqa.selenium.WebDriver;

public class BaseClass {
	WebDriver driver;
	public HomePage objHomePage = new HomePage(driver);
	public LoginPage objLoginPage = new LoginPage(driver);
	public SearchResultsPage objSearchResultsPage = new SearchResultsPage(driver);
	public SelectedProductPage objSelectedProductPage = new SelectedProductPage(driver);
	public SignInPage objSignInPage = new SignInPage(driver);
	public UserCartPage objUserCartPage = new UserCartPage(driver);
}
