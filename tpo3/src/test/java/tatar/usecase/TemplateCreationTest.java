package tatar.usecase;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import tatar.usecase.page.MainPage;
import tatar.usecase.page.TemplatePage;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TemplateCreationTest {
    static final String EMAIL = "wto78119@ilebi.com";
    static final String PASSWORD = "Super1337";
    static final String TEMPLATE_NAME = "Тестовый шаблон";

    @BeforeAll
    public static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void createTest() {
        WebDriver webDriver = Utils.getDriver();

        MainPage mainPage = new MainPage(webDriver);
        TemplatePage templatePage = new TemplatePage(webDriver);
        webDriver.get(Utils.BASE_URL);

        mainPage.doLogin(EMAIL, PASSWORD);
        templatePage.createTemplate(TEMPLATE_NAME);

        assertEquals(TEMPLATE_NAME, templatePage.getFirstTemplateName());

        webDriver.quit();
    }
}
