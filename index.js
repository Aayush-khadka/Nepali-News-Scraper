const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("https://kathmandupost.com");

  const grabData = await page.evaluate(() => {
    const article = document.querySelector(
      ".col-xs-12.col-md-5.grid-second.divider-right.order-1--sm article"
    );

    if (article) {
      const textContent = article.innerText;

      const linkTag = article.querySelector("a");
      const link = linkTag ? linkTag.href : null;

      return { textContent, link };
    }

    return null;
  });

  if (grabData) {
    console.log("Text Content:", grabData.textContent);
    console.log("Link:", grabData.link);
  } else {
    console.log("No article found.");
  }

  await browser.close();
})();
