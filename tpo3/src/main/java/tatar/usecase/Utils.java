package tatar.usecase;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utils {
    public static final String EMAIL = "wto78119@ilebi.com";

    public static final String CHROME_SYSTEM_PROPERTY_NAME = "webdriver.chrome.driver";
    public static final String CHROME_SYSTEM_PROPERTY_PATH = "drivers/chromedriver";
    public static final String FIREFOX_SYSTEM_PROPERTY_NAME = "webdriver.gecko.driver";
    public static final String FIREFOX_SYSTEM_PROPERTY_PATH = "drivers/geckodriver";
    public static final String BASE_URL = "https://advego.com/";

    public static WebDriver getDriver() {
        try {
            List<String> properties = Files.readAllLines(Paths.get("advego.properties"));
            for (String property : properties) {
                if (property.startsWith("WEB_DRIVER")) {
                    switch (property.toLowerCase().split("=")[1]) {
                        case "chrome":
                            return getChromeDriver();
                        case "firefox":
                            return getFirefoxDriver();
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        throw new RuntimeException("Web driver is not specified");
    }

    private static ChromeDriver getChromeDriver() {
        if (!System.getProperties().containsKey(CHROME_SYSTEM_PROPERTY_NAME)) {
            throw new RuntimeException("Chrome driver not set properly");
        }
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        ChromeDriver driver = new ChromeDriver(options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        return driver;
    }

    private static FirefoxDriver getFirefoxDriver() {
        if (!System.getProperties().containsKey(FIREFOX_SYSTEM_PROPERTY_NAME)) {
            throw new RuntimeException("Firefox driver not set properly");
        }

        File pathBinary = new File("/Applications/Firefox.app/Contents/MacOS/firefox");
        FirefoxBinary firefoxBinary = new FirefoxBinary(pathBinary);
        FirefoxOptions options = new FirefoxOptions();
        options.setBinary(firefoxBinary);
        FirefoxDriver driver = new FirefoxDriver(options);

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        return driver;
    }

    public static void prepareDrivers() {
        System.setProperty(CHROME_SYSTEM_PROPERTY_NAME, CHROME_SYSTEM_PROPERTY_PATH);
        System.setProperty(FIREFOX_SYSTEM_PROPERTY_NAME, FIREFOX_SYSTEM_PROPERTY_PATH);
    }

    public static void retryingFindClick(WebDriver driver, By selector) {
        int attempts = 0;
        while (attempts < 2) {
            try {
                getElementBySelector(driver, selector).click();
                break;
            } catch (StaleElementReferenceException ignored) {

            }
            attempts++;
        }
    }

    public static WebElement getElementBySelector(WebDriver driver, By selector) {
        WebDriverWait driverWait = new WebDriverWait(driver, 10);
        return driverWait.until(ExpectedConditions.visibilityOfElementLocated(selector));
    }

    public static WebElement getElementBySelector(WebDriver driver, By selector, long timeout) {
        WebDriverWait driverWait = new WebDriverWait(driver, timeout);
        return driverWait.until(ExpectedConditions.visibilityOfElementLocated(selector));
    }

    public static void waitUntilPageLoads(WebDriver driver, long timeout) {
        WebDriverWait waitDriver = new WebDriverWait(driver, timeout);
        waitDriver.until(webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));
    }
}
