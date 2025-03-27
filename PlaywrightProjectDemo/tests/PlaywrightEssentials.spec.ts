/**
 * waits refer to the mechanism that pause your script execution until certain conditions is met.
 * Playwright basical Auto Waits , Playwright wait for certian conditions to be met then it will proceed further
 * 
 * Advantages of auto-wait
 * 1. Flakness of the test execute reduced 
 * 2. Test becomes robust
 * 3. Scripting is simple and fast.
 * 4. Execution is faster.
 * 
 * 
 * Different type of waits in playwright
 * WaitForTimeOut();
 * selector.waitfor()
 * page.waitforurl()
 */


/**
 * Assertions
 * Page Assertions
 * Locator Assertions
 * Generic Assertions
 
 */

// Assert.equal, Assert.isTrue
// expect()
/* Page Assertions 
When ever we validating a condition on the page then those assertions are called as page assertions.
*/
/*
1. TohaveTitle()
2. ToHaveURl()
*/

/**
 * Locator Assertion: These are Validation or Assertion as perform on the HTML Elment (Locator). Expect method use to check for the validation after given interval
 * of Time. 
 * 
 * toBeCheck();
 * toBeVisitlbe();
 * toHaveText();
 * toContainText();
 * toHaveAttribute(name, Value)(name)
 * 
 * await expect(locator(page.locator(""))).<Validation methods>();
 */


/**
 * Generic Assertions : There is no auto wait , 
 * .ToBeTruthy()
 * .toEqual()
 * 
 */


/**
 * Annotations are basical Meta data for the test --
 * DataBase , After the test is executed , Clean Up the resources
 * 1. Test.Describe()
 * 2. BeforeEach
 * 3. BeforeAll
 * 4. step
 * 5. Test
 * 6. AfterEach
 * 7. AfterAll
 * 8. test.slow() : // Max time test can execute 30000,  This increases the thrashhold time of test to 3 times the limit
 * e.g Test timeout : 30000 , 90000
 */

/***
 * Selenium /TestNg
 * BeforeClass
 * BeforeMethod
 * BeforeTest
 * @test
 * BeforeSuite
 * After..
 * 
 * 
 */