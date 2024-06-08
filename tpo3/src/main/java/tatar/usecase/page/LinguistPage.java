package tatar.usecase.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.Utils;

public class LinguistPage extends Page{
    public LinguistPage(WebDriver driver) {
        super(driver);
    }

    public void checkText(String text) {
        WebElement textArea = Utils.getElementBySelector(driver, By.xpath("//textarea"));
        textArea.clear();
        textArea.sendKeys(text);

        WebElement checkBtn = Utils.getElementBySelector(driver, By.xpath("//button[contains(.,'Проверить текст')]"));
        checkBtn.click();
    }
}
