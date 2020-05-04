package com.StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	@Given("^Open Firefox and start application$")
	public void open_Firefox_and_start_application() throws Throwable {
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
		driver.get("http://www.facebook.com");
	 
	}

	@When("^I enter valid \"(.*?)\" and valid \"(.*?)\"$")
	public void i_enter_valid_and_valid(String uname, String pass) throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(pass);
	    
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	  
		driver.findElement(By.xpath("//input[@id='u_0_b']")).click();
	}
	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable {
	    driver.close();
	}

	


}
