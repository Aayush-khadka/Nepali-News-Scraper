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
    const paragraphs = document.querySelectorAll(
      ".subscribe--wrapperx section.story-section p"
    );
    return Array.from(paragraphs)
      .map((p) => p.textContent.trim())
      .join("\n");
  });

  const author = await page.evaluate(() => {
    const findAuthor = document.querySelector(
      ".page-detail--content.clearfix H5.text-capitalize a"
    );

    if (findAuthor) {
      return {
        authorName: findAuthor.textContent.trim(),
        authorlink: findAuthor.href,
      };
    } else {
      return {
        authorName: null,
        authorlink: null,
      };
    }
  });

  const articleTitle = await page.evaluate(() => {
    const title = document.querySelector(".col-sm-8 h1");
    return title ? title.textContent.trim() : "No Title Found";
  });

  const tag = await page.evaluate(() => {
    const articleTag = document.querySelector(".col-sm-8 h4");
    return articleTag ? articleTag.textContent.trim() : "No Tag Found";
  });

  const subArticleTitle = await page.evaluate(() => {
    const title = document.querySelector(".title-sub");
    return title ? title.textContent.trim() : "No Sub-Title Found";
  });

  const publishedTimes = await page.evaluate(() => {
    const publishedTimes = document.querySelectorAll(".updated-time");
    return Array.from(publishedTimes).map((time) => time.textContent.trim());
  });

  const articleImg = await page.evaluate(() => {
    const img = document.querySelector(".col-sm-8 img.img-responsive");
    return img ? img.src : "No Image Found";
  });

  console.log("Article Title:", articleTitle);
  console.log("Sub-Title:", subArticleTitle);
  console.log("Author Name:", author.authorName);
  console.log("Author Link:", author.authorlink);
  console.log("Published Time:", publishedTimes[0] || "Not Available");
  console.log("Updated Time:", publishedTimes[1] || "Not Available");
  console.log("Updated Place:", publishedTimes[2] || "Not Available");
  console.log("Tag:", tag);
  console.log("Article Image:", articleImg);
  console.log("\nArticle Content:\n", article);

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
