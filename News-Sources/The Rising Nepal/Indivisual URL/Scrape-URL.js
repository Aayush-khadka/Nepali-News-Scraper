const puppeteer = require("puppeteer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function scrapeUrl(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log(`Navigating to: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const article = await page.evaluate(() => {
    const paragraphs = document.querySelectorAll(".blog-details p");
    return Array.from(paragraphs)
      .map((p) => p.textContent.trim())
      .join("\n");
  });

  const title = await page.evaluate(() => {
    const articleTitle = document.querySelector(
      ".col-lg-12.text-center.mb-4 h1"
    );

    return articleTitle ? articleTitle.textContent.trim() : "Title Not Found";
  });

  const articelImg = await page.evaluate(() => {
    const img = document.querySelector(".blog-banner img");
    return img ? img.src : "No Image Found";
  });
  const publishedTime = await page.evaluate(() => {
    const publishedTime = document.querySelector(".mr-3.font-size-16 ");

    return publishedTime
      ? publishedTime.textContent.trim()
      : "No Published Time Found";
  });

  const author = await page.evaluate(() => {
    const articleAuthor = document.querySelector(
      ".col-12.d-flex.align-items-center.share-inline-block.mb-4 span.mr-3.text-black.fw-medium.ml-2.font-size-16"
    );

    return articleAuthor
      ? articleAuthor.textContent.trim()
      : "Unable to Find the author";
  });
  const authorLink = await page.evaluate(() => {
    const articleAuthorLink = document.querySelector(
      ".col-12.d-flex.align-items-center.share-inline-block.mb-4 a.d-flex.align-items-center "
    );

    return articleAuthorLink
      ? articleAuthorLink.href
      : "Unable to Find the author Link";
  });

  console.log("Article Image: ", articelImg);
  console.log("Published Time: ", publishedTime);
  console.log("Name of the Author:", author);
  console.log("Link to the Author:", authorLink);
  console.log("Title:", title);
  console.log("Article:", article);

  await browser.close();
}

rl.question("Enter the URL to scrape: ", (url) => {
  scrapeUrl(url)
    .then(() => {
      console.log("Scraping completed!");
      rl.close();
    })
    .catch((err) => {
      console.error("Error during scraping:", err);
      rl.close();
    });
});
