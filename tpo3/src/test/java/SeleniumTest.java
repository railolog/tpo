import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import tatar.usecase.Utils;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SeleniumTest {
    @BeforeAll
    static void prepareDrivers() {
        Utils.prepareDrivers();
    }

    @Test
    void testDriver() {
        this.executeWithCapabilities(Utils.getDriver());
    }

    private void executeWithCapabilities(WebDriver driver) {
        driver.get(Utils.BASE_URL);
        String title = driver.getTitle();
        assertEquals("Адвего. Биржа копирайтинга, контента, фриланса", title);
        driver.quit();
    }
}
