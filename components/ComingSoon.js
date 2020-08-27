const ComingSoon = () => {
  return (
    <div className="m-0 p-0 fixed md:w-full w-5/12 h-full overflow-auto bg-white flex items-center justify-center md:shadow-bottom shadow-right">
      <div className="md:mt-4 p-4 text-center">
        <img
          className="animate-bounce mx-auto"
          src="images/logo.png"
          alt="La 71eme de couverture"
          width="64"
          height="64"
        ></img>
        <h1 className="mt-10 font-serif md:text-2xl text-4xl leading-tight text-gray-900">
          La 7<sup>ème</sup> de Couverture
        </h1>
        <p className="font-sans md:text-md text-lg pt-2">
          arrive bientôt à Lyon...
        </p>
        <a
          href="https://github.com/Kazay/7couverture"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 my-8 rounded-full inline-block"
          target="_blank"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
