package tatar.usecase;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.page.MainPage;
import tatar.usecase.page.ProfileDataPage;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ProfileDataTest {
    static final String EMAIL = "wto78119@ilebi.com";
    static final String PASSWORD = "Super1337";
    static final int PRICE = -32;

    @BeforeAll
    public static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void changeInfoCorrectTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);
        ProfileDataPage profileDataPage = new ProfileDataPage(webDriver);

        webDriver.get(Utils.BASE_URL);

        mainPage.doLogin(EMAIL, PASSWORD);
        mainPage.goToProfile();

        profileDataPage.setPrice(PRICE);

        WebElement msg = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='msg']/div/div/div"));

        assertTrue(msg.getAttribute("class").contains("noerror"));
        assertEquals(
                "Личные данные сохранены",
                msg.getText()
        );

        webDriver.quit();
    }
}
