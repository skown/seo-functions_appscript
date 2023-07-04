# SEO Functions AppScript

SEO Functions AppScript is a collection of Google Apps Scripts developed to streamline and enhance SEO tasks. These scripts interact with various Google APIs, including the Google Search Console and SERP API, to extract relevant SEO data like URL inspection and performance data, as well as related search terms from Google SERPs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

With this collection of scripts, you can:

- Pull data directly from Google Search Console's Inspect URL API.
- Retrieve performance data from Google Search Console.
- Extract related search data from Google SERPs using the SERP API.

## Installation

To use these scripts:

1. Clone or download this repository to your local machine.
2. Open your Google Sheets document.
3. Click on `Extensions` > `Apps Script`.
4. Delete any code in the script editor and replace it with the contents of the scripts from this repository.
5. Click `File` > `Save` to save the AppScript.

## Usage

After installation, you can use the custom formulas provided by these scripts to pull SEO-related data:

- `INSPECT_URL("your-url")`: Use this function to inspect a specific URL using the Google Search Console's Inspect URL API.
- `GSC_PERFORMANCE("your-property", "yyyy-mm-dd", "yyyy-mm-dd")`: Use this function to retrieve performance data from Google Search Console for a specific property within a specific date range.
- `SERP_RELATED_SEARCHES("your-search-term")`: Use this function to get related search data from Google SERPs for a specific search term.

## Contributing

Contributions to this project are welcome. If you find a bug or have a suggestion for improvement, please open an issue to discuss it or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
