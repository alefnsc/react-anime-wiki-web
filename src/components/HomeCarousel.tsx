import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCarousel() {
  return (
    <>
      <Slider
        autoplay={true}
        autoplaySpeed={5000}
        dots={true}
        centerMode={false}
        centerPadding="0"
        pauseOnDotsHover={false}
        pauseOnFocus={false}
        pauseOnHover={false}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div>
          <img
            src="https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/Banner%20para%20Twitch%20M%C3%BAsica%20de%20Anime%20Violeta%20Azul-escuro.png?v=1700850893037"
            alt="Welcome Banner"
          />

          <h1 className=" text-center font-bold text-bold sm:text-xl md:text2xl lg:text-3xl">
            Welcome to AnimeWIKI!
          </h1>
          <p className=" text-center outline-black sm:text-md md:text-lg lg:text-xl">
            A global application where you can share and find your favorite
            characters.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/Banner%20para%20Twitch%20de%20Podcast%20Estilo%20Anime%20em%20Vermelho%2C%20Preto%20e%20Branco%20(1).png?v=1700851342529"
            alt="Info Banner"
          />

          <h1 className=" text-center text-gray-900 font-bold text-bold sm:text-xl md:text2xl lg:text-3xl">
            Make the difference!
          </h1>
          <p className=" text-center text-gray-900 sm:text-md md:text-lg lg:text-xl">
            Global community for sharing your beloved characters directly from
            one fan to another.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/Banner%20para%20Twitch%20de%20Podcast%20Estilo%20Anime%20em%20Vermelho%2C%20Preto%20e%20Branco.png?v=1700850893648"
            alt="Warning Banner"
          />

          <h1 className=" text-center font-bold sm:text-xl md:text2xl lg:text-3xl">
            Watchout!
          </h1>
          <p className=" text-center sm:text-md md:text-lg lg:text-xl">
            If you delete any character, you can't undone this.
          </p>
        </div>
      </Slider>
    </>
  );
}
