package tatar.usecase;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.page.MainPage;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class SearchTest {
    static final String EMAIL = "wto78119@ilebi.com";
    static final String PASSWORD = "Super1337";
    static final int PRICE = 100;

    @BeforeAll
    public static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void searchOkTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);

        webDriver.get(Utils.BASE_URL);

        mainPage.doLogin(EMAIL, PASSWORD);
        mainPage.doSearchWithMinPrice(PRICE);

        WebElement firstPrice = Utils.getElementBySelector(webDriver, By.xpath("//td/div"));

        assertTrue(Double.parseDouble(firstPrice.getText().split("\\s")[0]) > PRICE);

        webDriver.quit();
    }

    @Test
    void searchShouldAuthTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);

        webDriver.get(Utils.BASE_URL);
        mainPage.doSearchWithMinPrice(PRICE);

        WebElement loginForm = Utils.getElementBySelector(webDriver, By.xpath("//form/div/div"));

        assertTrue(loginForm.isDisplayed());

        webDriver.quit();
    }
}
