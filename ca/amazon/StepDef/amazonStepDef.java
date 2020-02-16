package amazon.StepDef;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import amazon.PageObjects.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class amazonStepDef extends BaseClass {

	WebDriver driver;

	/*public amazonStepDef(WebDriver driver) 
	{
		this.driver = driver;
	}*/
	
	@Given("^verify user is logged out of Amazon$")
	public void verify_user_is_logged_out_of_Amazon() throws Throwable {
		driver.get("https://www.amazon.ca/?action=sign-out");
		Assert.assertTrue(objLoginPage.SignInButton.isDisplayed(), "User is not logged out.");
	}

	@When("^user navigate to url \"([^\"]*)\"$")
	public void user_navigate_to_url(String arg1) throws Throwable {
		driver.get("https://www.amazon.ca/?action=sign-out");
	}

	@When("^\"([^\"]*)\" is displayed$")
	public void is_displayed(String arg1) throws Throwable {

	}

	@Then("^user clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_button(String arg1) throws Throwable {

	}

	@Then("^user SignIn with credentials$")
	public void user_SignIn_with_credentials() throws Throwable {

	}

	@Then("^user Sign Out from Account$")
	public void user_Sign_Out_from_Account() throws Throwable {

	}

	@Given("user get Sign In to {string}")
	public void user_get_Sign_In_to(String string) {
	}

	@When("user type {string} in {string}")
	public void user_type_in(String string, String string2) {
	}

	@Then("search results appear related to {string}")
	public void search_results_appear_related_to(String string) {
	}

	@Then("user clicks on {string} hard hat")
	public void user_clicks_on_hard_hat(String string) {
	}

	@Then("user lookup customer reviews of product using search criteria {string}")
	public void user_lookup_customer_reviews_of_product_using_search_criteria(String string) {
	}

	@Then("user will see results filtered by search criteria")
	public void user_will_see_results_filtered_by_search_criteria() {
	}

	@Then("user add {string} item in shopping cart")
	public void user_add_item_in_shopping_cart(String string) {
	}

	@Then("user verify {string}item is prsent in shopping cart")
	public void user_verify_item_is_prsent_in_shopping_cart(String string) {
	}

	@Then("user delete {string} item from shopping cart")
	public void user_delete_item_from_shopping_cart(String string) {
	}

	@Then("user verify item {string} got deleted from cart successfully")
	public void user_verify_item_got_deleted_from_cart_successfully(String string) {
	}
}
