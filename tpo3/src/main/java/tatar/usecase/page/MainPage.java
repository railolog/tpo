package tatar.usecase.page;

import lombok.SneakyThrows;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tatar.usecase.Utils;

public class MainPage extends Page {
    public MainPage(WebDriver driver) {
        super(driver);
    }

    @SneakyThrows
    public void doLogin(String email, String password) {
        WebElement loginButton = Utils.getElementBySelector(driver, By.xpath("//a[contains(text(),'Вход')]"));
        loginButton.click();

        WebElement emailInput = Utils.getElementBySelector(driver, By.xpath("//div[4]/input"));
        WebElement passwordInput = Utils.getElementBySelector(driver, By.xpath("//div[5]/input"));
        WebElement authButton = Utils.getElementBySelector(driver, By.xpath("//a[contains(text(),'Войти')]"));

        emailInput.click();
        Thread.sleep(500);
        emailInput.sendKeys(email);

        passwordInput.click();
        Thread.sleep(500);
        passwordInput.sendKeys(password);

        Thread.sleep(300);
        authButton.click();

        Thread.sleep(40000);
//        while (true) {
//            try {
//                WebElement iframe = Utils.getElementBySelector(driver, By.xpath("//iframe[@role='presentation']"));
//                driver.switchTo().frame(iframe);
//                System.out.println(driver.getTitle());
//                WebElement element = Utils.getElementBySelector(driver, By.xpath(".//div[@class='recaptcha-checkbox-border' and @style='display: none;']"));
//                driver.switchTo().parentFrame();
//
//                System.out.println(element.getAttribute("style"));
//                break;
//            } catch (TimeoutException | NoSuchElementException ignored) {
//                driver.switchTo().parentFrame();
//            }
//        }
        authButton.click();
    }

    public void doLogout() {
        WebElement profile = Utils.getElementBySelector(driver, By.xpath("//li/a[2]"));
        profile.click();

        WebElement logout = Utils.getElementBySelector(driver, By.xpath("//a[contains(text(),'Выход')]"));
        logout.click();
    }

    public void doSearchWithMinPrice(Integer price) {
        WebElement minPrice = Utils.getElementBySelector(driver, By.xpath("(//input[@name='f2'])[2]"));
        minPrice.clear();
        minPrice.sendKeys(price.toString());

        WebElement searchBtn = Utils.getElementBySelector(driver, By.xpath("(//a[contains(text(),'Искать')])[2]"));
        searchBtn.click();
    }

    public void goToProfile() {
        Utils.retryingFindClick(driver, By.xpath("//a[contains(text(),'labitmo')]"));
        Utils.retryingFindClick(driver, By.xpath("//a[contains(text(),'Профиль')]"));
        Utils.retryingFindClick(driver, By.xpath("(//a[contains(text(),'Редактировать данные')])[2]"));
    }

    public void doShortLogin(String email, String password) {
        WebElement loginButton = Utils.getElementBySelector(driver, By.xpath("//a[contains(text(),'Вход')]"));
        loginButton.click();

        WebElement emailInput = Utils.getElementBySelector(driver, By.xpath("//div[4]/input"));
        WebElement passwordInput = Utils.getElementBySelector(driver, By.xpath("//div[5]/input"));
        WebElement authButton = Utils.getElementBySelector(driver, By.xpath("//a[contains(text(),'Войти')]"));
        WebElement rememberBtn = Utils.getElementBySelector(driver, By.xpath("//div[6]/div/label"));

        emailInput.click();
        emailInput.sendKeys(email);

        passwordInput.click();
        passwordInput.sendKeys(password);

        rememberBtn.click();

        authButton.click();
    }

    public void goToCheckText() {
        WebElement btn = Utils.getElementBySelector(
                driver,
                By.xpath("//a[contains(text(),'Проверить качество текста')]")
        );

        btn.click();
    }
}
