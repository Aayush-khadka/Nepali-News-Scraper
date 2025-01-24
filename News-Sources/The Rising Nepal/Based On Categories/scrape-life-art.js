const puppeteer = require("puppeteer");
(async () => {
  const url = "https://risingnepaldaily.com/categories/life-and-art";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const links = await page.evaluate(() => {
    const articleLinks = document.querySelectorAll(
      ".blog-box-layout11.mb-5.w-100 div.item-img a"
    );

    return Array.from(articleLinks).map((link) => link.href);
  });

  console.log("Number of links: ", links.length);

  for (let i = 0; i < links.length; i++) {
    const articleUrl = links[i];

    const newPage = await browser.newPage();
    await newPage.goto(articleUrl, { waitUntil: "domcontentloaded" });

    const article = await newPage.evaluate(() => {
      const paragraphs = document.querySelectorAll(".blog-details p");
      return Array.from(paragraphs)
        .map((p) => p.textContent.trim())
        .join("\n");
    });

    const title = await newPage.evaluate(() => {
      const articleTitle = document.querySelector(
        ".col-lg-12.text-center.mb-4 h1"
      );

      return articleTitle ? articleTitle.textContent.trim() : "Title Not Found";
    });

    const articelImg = await newPage.evaluate(() => {
      const img = document.querySelector(".blog-banner img");
      return img ? img.src : "No Image Found";
    });
    const publishedTime = await newPage.evaluate(() => {
      const publishedTime = document.querySelector(".mr-3.font-size-16 ");

      return publishedTime
        ? publishedTime.textContent.trim()
        : "No Published Time Found";
    });

    const author = await newPage.evaluate(() => {
      const articleAuthor = document.querySelector(
        ".col-12.d-flex.align-items-center.share-inline-block.mb-4 span.mr-3.text-black.fw-medium.ml-2.font-size-16"
      );

      return articleAuthor
        ? articleAuthor.textContent.trim()
        : "Unable to Find the author";
    });
    const authorLink = await newPage.evaluate(() => {
      const articleAuthorLink = document.querySelector(
        ".col-12.d-flex.align-items-center.share-inline-block.mb-4 a.d-flex.align-items-center "
      );

      return articleAuthorLink
        ? articleAuthorLink.href
        : "Unable to Find the author Link";
    });
    console.log(`Article ${i + 1} content: `);

    console.log("Link:", links[i]);
    console.log("Article Image: ", articelImg);
    console.log("Published Time: ", publishedTime);
    console.log("Name of the Author:", author);
    console.log("Link to the Author:", authorLink);
    console.log("Title:", title);
    console.log("Article:", article);
    console.log("Caterory/Tag: Life and Art");

    console.log(
      "======================================================================="
    );
  }
})();
