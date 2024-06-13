import Poster from "../../assets/netflix.png";

const About = () => {
  return (
    <main className="min-h-screen bg-cover bg-movie">
      <div className="pt-20 w-[90%] lg:w-[80%] flex flex-col justify-center mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-center text-white lg:mt-20 md:text-4xl">
            ABOUT US
          </h1>
          <p className="mt-5 text-justify text-white md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt
            quidem tempore quibusdam ullam ut dolores in ipsum animi ipsa? Vitae
            inventore mollitia perferendis laborum perspiciatis optio architecto
            voluptatum ea velit dolorem soluta consectetur quia amet, distinctio
            sapiente ut nulla adipisci commodi dolores dignissimos labore sit
            aut! Expedita, sit quos.{" "}
          </p>
        </div>
        <div className="mt-5">
          <form className="flex flex-col items-center md:flex-row">
            <input
              type="text"
              placeholder="email address"
              className="px-4 py-3 md:w-[70%] w-full"
            />
            <button
              type="submit"
              className="px-2 py-3 text-white bg-red-600 w-full md:w-[30%]"
            >
              Send Email &rarr;
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default About;
