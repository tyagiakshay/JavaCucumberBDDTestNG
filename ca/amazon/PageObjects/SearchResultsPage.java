package amazon.PageObjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SearchResultsPage {
	WebDriver driver;
	public SearchResultsPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH, using="//span[contains(text(),'ERB 19451 Americana Vent Cap Style Hard Hat with Mega Ratchet, White')]")
	public WebElement ProductLink;
	
	@FindAll(@FindBy(how=How.XPATH, using="//div[@class='s-result-list s-search-results sg-row']/div//img"))
	public List<WebElement> productSearchResultsList;

}
