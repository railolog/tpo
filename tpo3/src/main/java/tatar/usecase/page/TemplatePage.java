package tatar.usecase.page;

import lombok.SneakyThrows;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.Utils;

public class TemplatePage extends Page {
    public TemplatePage(WebDriver driver) {
        super(driver);
    }

    @SneakyThrows
    public void createTemplate(String templateName) {
        Utils.retryingFindClick(driver, By.xpath("//a[contains(text(),'Создать заказ')]"));

        WebElement saveTemplateBtn = Utils.getElementBySelector(
                driver,
                By.xpath("//a[contains(text(),'Сохранить шаблон')]")
        );
        saveTemplateBtn.click();

        WebElement nameInput = Utils.getElementBySelector(
                driver,
                By.xpath("//div[7]/div/div/div/form/div/div/div/input")
        );
        nameInput.clear();
        nameInput.sendKeys(templateName);

        WebElement saveBtn = Utils.getElementBySelector(driver, By.xpath("//form/div[2]/div/a"));
        saveBtn.click();

        driver.get(Utils.BASE_URL);

//        WebElement closeBtn = Utils.getElementBySelector(driver, By.cssSelector(".modal-content > .close > .fa"));
//        closeBtn.click();
    }

    public String getFirstTemplateName() {
        WebElement createOrderBtn = Utils.getElementBySelector(
                driver,
                By.xpath("//a[contains(text(),'Создать заказ')]")
        );

        createOrderBtn.click();
        WebElement templates = Utils.getElementBySelector(driver, By.xpath("//button[contains(.,' Шаблоны заказов')]"));
        templates.click();

        WebElement template = Utils.getElementBySelector(driver, By.xpath("//div[2]/ul/li/div[2]"));
        return template.getText();
    }
}
