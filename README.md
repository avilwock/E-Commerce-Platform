# E-Commerce-Platform

## Table of Contents ![License](https://img.shields.io/badge/license-MIT%20license-blue)

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Future Implementations](#future-implementations)
- [Access](#access)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description

Internet retail, also known as **e-commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Future Implementations

* Create a buyer database

## Access

To access this site, please visit: https://github.com/avilwock/E-Commerce-Platform

## Installation

To install this, open the integrated terminal, type in npm install

Open Mysql and source the schema (must have mysql installed)

Seed the data by typing node seeds/index.js

## Usage

Once installation is complete, connect to the server by typing in node server, and then opening insomnia. Type in http://localhost:3001/api, followed by whatever section, either categories, products, or tags, you wish to access. To access a specific record, type in a slash after the section, and then add the number related to the records information
ex: http://localhost:3001/api/categories/1.

To retreive information, select get in the dropdown menu to the left of the url.

To add information, select post in the dropdown menu. If you wish to add information, it must be presented in the proper format into the json body section.

To update information, select put in the dropdown menu, and use type in the section you wish to update, for the specific id of the item in that section.

To delete information, select the id number for the section you wish to delete.

## Credits

With thanks to:

Logan Garland, Coding Bootcamp, University of Irvine California

## Questions

For any questions, please contact: avilwock@gmail.com

## License

MIT License