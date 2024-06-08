package tatar.usecase;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.page.MainPage;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AuthTest {
    static final String EMAIL = "wto78119@ilebi.com";
    static final String WRONG_EMAIL = "hto@ilebi.ya";
    static final String PASSWORD = "Super1337";
    static final String LOGIN = "labitmo";

    @BeforeAll
    public static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void loginTest() {
        WebDriver webDriver = Utils.getDriver();
        MainPage mainPage = new MainPage(webDriver);
        webDriver.get(Utils.BASE_URL);

        mainPage.doLogin(EMAIL, PASSWORD);

        WebElement login = Utils.getElementBySelector(webDriver, By.xpath("//li/a[2]"));
        assertEquals(LOGIN, login.getText());
        webDriver.quit();
    }

    @Test
    void logoutTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);
        webDriver.get(Utils.BASE_URL);

        mainPage.doLogin(EMAIL, PASSWORD);
        mainPage.doLogout();

        WebElement login = Utils.getElementBySelector(webDriver, By.xpath("//li/a"));
        assertTrue(login.getAttribute("class").contains("move_to_login"));
        assertEquals("Вход", login.getText());

        webDriver.quit();
    }

    @Test
    void wrongLoginTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);
        webDriver.get(Utils.BASE_URL);

        mainPage.doShortLogin(WRONG_EMAIL, PASSWORD);

        WebElement login = Utils.getElementBySelector(
                webDriver,
                By.xpath("//form[@class='bigform action_form']/div/div[@class='form-error']/div")
        );

        assertTrue(login.getAttribute("class").contains("error"));
        assertEquals("Неверный e-mail или пароль", login.getText());

        webDriver.quit();
    }
}
