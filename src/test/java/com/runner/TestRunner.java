package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"features"},
				glue={"com.StepDefinition"},
				plugin={"html:target/cucumber-html-report",
						"json:target/cucumber-json","pretty:target/cucumber.json",
						"usage:target/cucumber-usage.json",
						"junit:taget/cucumber-results.xml"})
public class TestRunner {
	
	 

}
