package tatar.usecase;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.page.LinguistPage;
import tatar.usecase.page.MainPage;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CheckGrammarTest {
    static final String SUPER_TEXT = "Супер текст";

    @BeforeAll
    public static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void checkGrammarTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);
        LinguistPage linguistPage = new LinguistPage(webDriver);

        webDriver.get(Utils.BASE_URL);

        mainPage.goToCheckText();
        linguistPage.checkText(SUPER_TEXT);

        WebElement result = Utils.getElementBySelector(
                webDriver,
                By.xpath("//div/div[3]/div/div/div/div/div")
        );

        assertTrue(result.getAttribute("class").contains("checkResultTitle"));
        assertEquals("100.00Оценка текста", result.getText());

        webDriver.quit();
    }
}
