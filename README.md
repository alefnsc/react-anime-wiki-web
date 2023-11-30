# AnimeWiki Frontend Documentation

[Vercel Deployment](https://react-anime-wiki-web.vercel.app/)

## Overview

The AnimeWiki project is a full-stack application that allows users to explore anime and character information. The project comprises both frontend and backend components, utilizing a variety of libraries and technologies.

[View Backend Repository](https://github.com/alefnsc/react-anime-wiki-api)

[CodeUp 180D Challenge - View Progress](https://github.com/alefnsc/CodeUp-180D/blob/main/180-days-of-code/log.md)

### Dependencies

- **@nextui-org/react:** ^2.2.9
- **@types/tailwindcss:** ^3.1.0
- **axios:** ^1.6.2
- **clsx:** ^2.0.0
- **firebase:** ^10.6.0
- **react:** ^18.2.0
- **react-dom:** ^18.2.0
- **react-icons:** ^4.12.0
- **react-router-dom:** ^6.19.0
- **react-slick:** ^0.29.0
- **react-toastify:** ^9.1.3
- **slick-carousel:** ^1.8.1
- **tailwind-merge:** ^2.0.0
- **tailwindcss-animate:** ^1.0.7

### DevDependencies

- **@types/node:** ^20.9.2
- **@types/react:** ^18.2.37
- **@types/react-dom:** ^18.2.15
- **@types/react-slick:** ^0.23.12
- **@typescript-eslint/eslint-plugin:** ^6.10.0
- **@typescript-eslint/parser:** ^6.10.0
- **@vitejs/plugin-react:** ^4.2.0
- **autoprefixer:** ^10.4.16
- **eslint:** ^8.53.0
- **eslint-plugin-react-hooks:** ^4.6.0
- **eslint-plugin-react-refresh:** ^0.4.4
- **postcss:** ^8.4.31
- **tailwindcss:** ^3.3.5
- **typescript:** ^5.2.2
- **vite:** ^5.0.0

## Pages

- **AnimeWikiHomePage:** A simple page with a carousel, and footer.
  ![HomePage](assets/home-desktop.png)

- **AnimeWikiViewAllPage:** A gallery which display imported characters, their photos, and anime information. Provide the ability to update or delete characters, and search by keyword of any attribute.
  ![ViewAllPage](assets/view-all-desktop.png)

- **AnimeWikiImportPage:** A create form that gives the ability to upload character photo, input its attributes, and select or create a new anime information to associate with character.

![ImportPage](assets/import-desktop.png)

- **AnimeWikiUpdatePage:** An update form which provide the ability to update exclusevely the character attributes.

![UpdatePage](assets/update-desktop.png)

- **AnimeWikiAboutPage:** An overview page of the technologies/stacks used on the application.

![AboutPage](assets/about-desktop.png)

## Components

The frontend is integrated with the [AnimeWiki API](https://github.com/alefnsc/react-anime-wiki-api), providing a seamless user experience. Notable features and fixes include:

- **NavbarMenuUI:** a navbar with search included, and mobile responsiveness to minimize/maximize based on screen size.

- **HomeCarousel:** a banner carousel tha display different images and texts along time.

- **CardContainer:** a container to wrap CharacterCard renderizations.

- **CharacterCard:** a card to wrap Character information.

- **DeleteCardModal:** a modal that appear upon delete button click.

- **UpdateForm:** a form with the functionality to update character information.

- **InfoCardModal:** a abstract modal used to both creation and update actions.

- **Footer:** a simple footer that displays copyright info in all pages.

- **ImportForm:** a form with the functionality to create character information, upload photos, and create/select animes.

## How to Run Locally

To run the project locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start` or `npm run dev` for development.

## Contact

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
