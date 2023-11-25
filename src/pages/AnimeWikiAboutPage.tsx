import NavbarMenu from "../components/NavbarMenu";
import Footer from "../components/Footer";
import { Card } from "@nextui-org/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function AnimeWikiAboutPage() {
  return (
    <>
      <NavbarMenu />
      <Card className=" p-10 rounded-lgsm:max-w-[300px] md:max-w-[600px] lg:max-w-[800px] m-auto mt-10">
        <h1 className="text-purple-700 text-4xl font-bold mb-4">
          About AnimeWiki
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          AnimeWiki is a cutting-edge web application designed to be the
          ultimate destination for anime enthusiasts, providing a comprehensive
          and user-friendly platform to explore the vast world of anime.
          Developed using React, the application seamlessly integrates modern
          technologies and libraries to deliver an immersive experience for
          users.
        </p>
        <h1 className="text-purple-700 text-3xl font-bold mb-4">
          Key Features
        </h1>
        <ul className="text-gray-800 text-lg leading-relaxed mb-4">
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Intuitive User Interface</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            Built with "@nextui-org/react," AnimeWiki boasts a sleek and
            intuitive user interface that ensures a seamless and enjoyable
            navigation experience.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>TailwindCSS Integration</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            Leveraging the power of "@types/tailwindcss" and "tailwindcss," the
            application incorporates a responsive and visually appealing design,
            adapting to various screen sizes and devices.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Data Fetching with Axios</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            Utilizing "axios," AnimeWiki effortlessly retrieves and displays
            anime information, ensuring that users have access to the latest and
            most accurate data.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Dynamic Routing</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            Powered by "react-router-dom," the application provides dynamic
            routing capabilities, allowing users to easily navigate between
            different sections and explore a vast array of anime content.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Real-time Updates with Firebase</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            "Firebase" integration enables real-time updates, ensuring that
            users receive the latest information and notifications promptly.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Iconography with React Icons</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            The application employs "react-icons" to enhance its visual appeal,
            incorporating a variety of icons that contribute to a vibrant and
            engaging user experience.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Carousel Display with React Slick</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            "react-slick" and "slick-carousel" come together to create
            captivating image carousels, showcasing featured anime series and
            characters in a visually appealing manner.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Toast Notifications</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            Enhancing user feedback, "react-toastify" is integrated to provide
            informative and non-intrusive toast notifications.
          </p>
          <li className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>Class Utility with Clsx</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-2">
            "clsx" simplifies class management, streamlining the styling process
            and ensuring a consistent and polished look throughout the
            application.
          </p>
          <li className="flex items-center mb-4">
            <IoMdCheckmarkCircleOutline className="text-green-400 h-6 w-6 m-2" />
            <p>TailwindCSS Enhancements</p>
          </li>
          <p className="text-gray-600 text-sm ml-8 mb-4">
            Additional tailwindcss plugins such as "tailwind-merge" and
            "tailwindcss-animate" contribute to a more dynamic and animated user
            interface.
          </p>
        </ul>
        <h1 className="text-purple-700 text-3xl font-bold mb-4">
          Development Stack
        </h1>
        <p className="text-justify mb-5 text-lg">
          AnimeWiki is built upon a robust development stack, utilizing the
          following dependencies:
        </p>
        <p className="mb-3 text-lg font-bold">Dependencies:</p>
        <ul className="list-inside list-disc mb-5">
          <li>React</li>
          <li>React DOM</li>
          <li>Firebase</li>
          <li>Axios</li>
          <li>Clsx</li>
          <li>React Icons</li>
          <li>React Router DOM</li>
          <li>React Slick</li>
          <li>React Toastify</li>
          <li>Slick Carousel</li>
          <li>Tailwind Merge</li>
          <li>TailwindCSS Animate</li>
        </ul>
        <p bold className="mb-3 text-lg">
          DevDependencies:
        </p>
        <ul className="list-inside list-disc mb-5">
          <li>TypeScript</li>
          <li>Vite</li>
          <li>@vitejs/plugin-react</li>
          <li>ESLint</li>
          <li>TypeScript ESLint</li>
          <li>React Hooks ESLint Plugin</li>
          <li>React Refresh ESLint Plugin</li>
          <li>Autoprefixer</li>
          <li>PostCSS</li>
        </ul>
        <p className="text-justify mb-5 text-lg">
          AnimeWiki is a testament to the synergy of cutting-edge technologies,
          providing users with an unparalleled platform to explore, discover,
          and immerse themselves in the captivating world of anime.
        </p>
      </Card>

      <Footer />
    </>
  );
}
