package amazon.PageObjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SelectedProductPage {
	WebDriver driver;
	public SelectedProductPage	(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH, using="//input[contains(@placeholder,'Type your question or keyword')]")
	public WebElement keywordSearchBar;
	
	@FindBy(how=How.XPATH,using="//span[contains(text(),'Customer Reviews') and contains(@class,'askSearchResultsHeader')]")
	public WebElement customerReviewLink;
	
	@FindAll(@FindBy(how=How.XPATH, using="//div[contains(@cel_widget_id,'ask-swdp-results-desktop')]/div[contains(@class,'askSearchResultsActive')]/div"))
	public List<WebElement> commentSearchResults;
	
	@FindBy(how=How.XPATH,using="//input[@id='add-to-cart-button']")
	public WebElement AddToCart;
	
	@FindBy(how=How.XPATH, using="//span[@id='attach-sidesheet-view-cart-button-announce']")
	public WebElement sidesheetCartButton;
	
	
}
