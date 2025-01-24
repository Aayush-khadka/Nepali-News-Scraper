Here's an improved version of your text for readability, structure, and clarity:

---

# Nepali News Scraper

A JavaScript-based web scraping tool powered by **Puppeteer**. This tool extracts news articles from popular Nepali news sources, allowing users to retrieve the latest articles across categories such as finance, sports, politics, art & culture, and the valley. Users can also scrape individual articles by providing the article URL from supported sites.

---

## Features

- Retrieve news articles by category from supported sites.
- Scrape individual articles with a specific URL.
- Data includes metadata such as title, subtitle, author, publication date, and content.
---

## Supported News Sources

- **[The Kathmandu Post](https://kathmandupost.com)**
- **[Rising Nepal](https://risingnepaldaily.com)** 

---

## Planned News Sources

The following sources are in the pipeline for support:

- **[Onlinekhabar English](https://english.onlinekhabar.com)**  
- **[Nepali Times](https://nepalitimes.com)**  
- **[The Himalayan Times](https://www.thehimalayantimes.com)**  
- **[MyRepublica](https://myrepublica.nagariknetwork.com)**   
- **[New Spotlight Magazine](https://www.spotlightnepal.com)**  
- **[Nepal Press](https://english.nepalpress.com)**  
- **[Enewspolar](https://enewspolar.com)**  
- **[Khabarhub](https://english.khabarhub.com)**  
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aayush-khadka/Nepali-News-Scraper.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Nepali-News-Scraper
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Example Output

The following is a sample of the structured data output from a scraped article:

```json
{
  "title": "Article Title",
  "subtitle": "Article Subtitle",
  "authorName": "Author Name",
  "authorProfileLink": "https://kathmandupost.com/authors/author-name",
  "articleLink": "https://kathmandupost.com/politics/2023/10/10/example-article",
  "articleImage": "https://kathmandupost.com/images/example-image.jpg",
  "publishedTime": "2023-10-10T12:00:00",
  "updatedTime": "2023-10-10T14:00:00",
  "updatedPlace": "Kathmandu",
  "articleText": "Full text of the article...",
  "articleType": "category"
}
```

---

## Disclaimer

This project is developed for **educational purposes only**. The developer is not responsible for any misuse of the tool. Please adhere to the terms of service of the websites being scraped and use the tool responsibly.

---

## Contact

For any issues or feedback, feel free to reach out:

- **GitHub Issues**: [Submit Issues](https://github.com/Aayush-khadka/Nepali-News-Scraper/issues)  
- **Email**: [khadkaaayush90@gmail.com](mailto:khadkaaayush90@gmail.com)  

--- 

