package tatar.usecase.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.Utils;

public class ProfileDataPage extends Page {
    public ProfileDataPage(WebDriver driver) {
        super(driver);
    }

    public void setPrice(Integer price) {
        WebElement aboutMe = Utils.getElementBySelector(driver, By.xpath("//span[2]/input"));
        aboutMe.clear();
        aboutMe.sendKeys(price.toString());

        WebElement saveBtn = Utils.getElementBySelector(driver, By.xpath("//a[contains(@href, '/user/edit/')]"));
        saveBtn.click();
    }
}
