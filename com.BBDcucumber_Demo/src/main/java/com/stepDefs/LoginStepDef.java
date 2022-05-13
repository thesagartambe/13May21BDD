package com.stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.*;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class LoginStepDef {
	WebDriver driver;
	@Before	
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "D:/chromedriver.exe");
		driver = new ChromeDriver();
		
	}
	@Before	("@register")
	public void setup1() {
		System.setProperty("webdriver.chrome.driver", "D:/chromedriver.exe");
		driver = new ChromeDriver();
		
	}
	
	@After
	public void tearDown()
	{
		driver.close();
	}
	
	
	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
		driver.get("file:///D:/JBK/SELENIUM/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html");
		
	    
	}

	@When("^user enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
	    
	    
	}

	@When("^user enters password$") 
	public void user_enters_password() throws Throwable {
		driver.findElement(By.id("password")).sendKeys("123456");	    
	    
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	    
	}

	@Then("^user will be on dashboard page$")
	public void user_will_be_on_dashboard_page() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "JavaByKiran | Dashboard");
	      
	    
	}

	@Then("^user should see JBK logo$")
	public void user_should_see_JBK_logo() throws Throwable {
		WebElement logo=driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());
	    
	    
	}
	     
	    
	}

