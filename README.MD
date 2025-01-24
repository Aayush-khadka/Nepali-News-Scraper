# Nepali News Scraper

A JavaScript-powered web scraping tool leveraging **Puppeteer** to extract news articles from popular Nepali news sources. This tool enables users to retrieve the latest articles across categories such as finance, sports, politics, art & culture, and valley. Additionally, it allows targeted scraping of individual articles by simply providing the URL of articles of supported sites.

## Supported News Sources

- **[The Kathmandu Post](#the-kathmandu-post-details)**
- **[Rising Nepal](#rising-nepal-details)** 

## News Sources Planned for Support
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

## Sample Scraped Data Structure

Below is an example of the data extracted from a scraped article:

```Console
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
  articleType: "category"
}


## Disclaimer

This project is intended for **educational purposes only**. The developer is not responsible for any misuse of this tool. Please use it responsibly and respect the terms of service of the websites being scraped.

---

## Contact

- **GitHub Issues**: [Issues Page](https://github.com/Aayush-khadka/Nepali-News-Scraper/issues)
- **Email**: khadkaaayush90@gmail.com
