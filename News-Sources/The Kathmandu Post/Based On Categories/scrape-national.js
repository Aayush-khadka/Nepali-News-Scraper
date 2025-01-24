const puppeteer = require("puppeteer");

(async () => {
  const url = "https://kathmandupost.com/national";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const links = await page.evaluate(() => {
    const articleLinks = document.querySelectorAll(
      ".block--morenews article.article-image div.image.image-sm.image-220.pull-right a"
    );
    return Array.from(articleLinks).map((link) => link.href);
  });

  console.log("Total links found:", links.length);

  for (let i = 0; i < links.length; i++) {
    const articleUrl = links[i];

    const newPage = await browser.newPage();
    await newPage.goto(articleUrl, { waitUntil: "domcontentloaded" });

    const article = await newPage.evaluate(() => {
      const paragraphs = document.querySelectorAll(
        ".subscribe--wrapperx section.story-section p"
      );
      return Array.from(paragraphs)
        .map((p) => p.textContent.trim())
        .join("\n");
    });

    const author = await newPage.evaluate(() => {
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

    const articleTitle = await newPage.evaluate(() => {
      const title = document.querySelector(".col-sm-8 h1");
      return title.textContent.trim();
    });

    const tag = await newPage.evaluate(() => {
      const articleTag = document.querySelector(".col-sm-8  h4");
      return articleTag.textContent.trim();
    });

    const subArticleTitle = await newPage.evaluate(() => {
      const title = document.querySelector(".title-sub");
      return title.textContent.trim();
    });

    const publishedTimes = await newPage.evaluate(() => {
      const publishedTimes = document.querySelectorAll(".updated-time");
      return Array.from(publishedTimes).map((time) => time.textContent.trim());
    });

    const articelImg = await newPage.evaluate(() => {
      const img = document.querySelector(".col-sm-8 img.img-responsive");
      return img ? img.src : "No Image Found";
    });

    console.log(`Article ${i + 1} Content:`);

    console.log(links[i]);
    console.log("Article Image:", articelImg);
    console.log("title: ", articleTitle);
    console.log("Sub-title:", subArticleTitle);
    console.log("Name of the author:", author.authorName);
    console.log("Link to the Author:", author.authorlink);
    console.log("published Time: ", publishedTimes[0]);
    console.log("Updated Time:", publishedTimes[1]);
    console.log("Updated Place:", publishedTimes[2]);
    console.log("Tag:", tag);
    console.log("General Tag: national");

    console.log(article);

    console.log(
      "============================================================================================"
    );

    await newPage.close();
  }

  await browser.close();
})();
