# Nepali News Scraper

A JavaScript-based web scraping tool using **Puppeteer** to scrape news articles from various Nepali news sources. Currently, the scraper supports **The Kathmandu Post**, with plans to expand to other sources like **The Himalayan Times**, **Rising Nepal**, and more. The tool allows users to scrape the latest articles based on categories such as finance, sports, politics, art-culture, valley, etc. Additionally, users can specify a particular news URL to scrape.

## Supported News Sources

- **[The Kathmandu Post](#the-kathmandu-post-details)**
- **[Annapurna Post](#annapurna-post-details)** _(Planned)_
- **[Rising Nepal](#rising-nepal-details)** _(Planned)_
- **[Onlinekhabar English](#onlinekhabar-english-details)** _(Planned)_
- **[Nepali Times](#nepali-times-details)** _(Planned)_
- **[The Himalayan Times](#the-himalayan-times-details)** _(Planned)_
- **[MyRepublica](#myrepublica-details)** _(Planned)_
- **[HimalPress (English)](#himalpress-english-details)** _(Planned)_
- **[New Spotlight Magazine](#new-spotlight-magazine-details)** _(Planned)_
- **[Nepal Press (English)](#nepal-press-english-details)** _(Planned)_
- **[Enewspolar](#enewspolar-details)** _(Planned)_
- **[Khabarhub (English)](#khabarhub-english-details)** _(Planned)_
- **More coming soon!**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aayush-khadka/Nepali-News-Scraper.git
   ```
2. Navigate to the directory:
   ```bash
   cd Nepali-News-Scraper
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## The Kathmandu Post Details

### Scraping Overview

This scraper automates the extraction of articles from **The Kathmandu Post**, starting with the **Valley** category. By modifying the URL, it can scrape other sections like Finance, Sports, and Politics.

#### Steps for Scraping

1. **Launch Puppeteer**  
   Open a browser instance and navigate to the desired category page.

   ```javascript
   const puppeteer = require("puppeteer");

   (async () => {
     const url = "https://kathmandupost.com/valley";
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await page.goto(url, { waitUntil: "domcontentloaded" });
   })();
   ```

2. **Extract Article Links**  
   Gather all article links from the page using CSS selectors.

   ```javascript
   const links = await page.evaluate(() => {
     const articleLinks = document.querySelectorAll(
       ".block--morenews article.article-image div.image.image-sm.image-220.pull-right a"
     );
     return Array.from(articleLinks).map((link) => link.href);
   });

   console.log("Total links found:", links.length);
   ```

3. **Scrape Individual Articles**  
   For each link, extract key details such as title, author, publication time, and article content.

4. **Output the Data**  
   Each article is scraped and logged with the following details:

```javascript
{
  title: "Article Title",
  subtitle: "Article Subtitle",
  authorName: "Author Name",
  authorProfileLink: "https://kathmandupost.com/authors/author-name",
  articleLink: "https://kathmandupost.com/politics/2023/10/10/example-article",
  articleImage: "https://kathmandupost.com/images/example-image.jpg",
  publishedTime: "2023-10-10T12:00:00",
  updatedTime: "2023-10-10T14:00:00",
  updatedPlace: "Kathmandu",
  articleText: "Full text of the article...",
  articleType: "Politics"
}
```

---

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **GitHub Issues**: [Issues Page](https://github.com/Aayush-khadka/Nepali-News-Scraper/issues)
- **Email**: khadkaaayush90@gmail.com
