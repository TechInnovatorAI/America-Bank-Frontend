"use client";
import Image from 'next/image';
import Link from 'next/link';
import TopRightImage from "@/public/assets/card/assets-images-site-hp-assets-super-highlights-enterprise-en-special-olympics-ent_shl_bmh_champs_5963738_722_gc.webp";

const cards = [
    {
        image: "/assets/box/1.webp",
        title: "Intro APR offer",
        color: "text-red",
        description: "With the BankAmericard credit card, get a 0% intro APR offer for 18 billing cycles, plus no annual fee.",
        link: "/intro",
        letter: "Apply now"
    },
    {
        image: "/assets/box/2.webp",
        title: "$300 checking cash offer",
        color: "text-red",
        description: "Earn a $300 bonus when new checking ustomers open an eligible checking account and make qualifying diret deposits.",
        link: "/offer",
        letter: "See offer details"
    },
    {
        image: "/assets/box/3.webp",
        title: "Custom mobile alerts",
        color: "text-red",
        description: "With our Mobile Banking app alerts, prioritize what you see based on what matters most to you.",
        link: "/get-app",
        letter: "Get the app"
    },
    {
        image: "/assets/box/4.webp",
        title: "Solutions built around you",
        color: "text-blue",
        description: "At Merrill, we provide the tools, people and know-how to help you pursue your financial goals.",
        link: "/get-started",
        letter: "Get started"
    }
]

const topBox = {
    title: "NEW CHECKING OFFER",
    subtitle: "Open a checking account",
    description: "<b>Earn a $300 cash offer</b> when you open a new eligible checking accoount and make qualifying direct deposits.",
    link: "/see-offer",
    letter: "See offer details"
}

const Form2 =() => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row mb-8">
        {/* Left Part */}
        <div className="flex w-[50vw]">
          {/* Left Part */}
          <div className="w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-2">{topBox.title}</h2>
            <h2 className="text-xl font-semibold mb-2">{topBox.subtitle}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: topBox.description }}></p>
            <Link href={topBox.link} className="text-blue-600 hover:underline">
              {topBox.letter} &rarr;
            </Link>
          </div>
          {/* Right Part */}
          <div className="w-1/2 p-4">
            <Image
              src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-icons-shl_offer_art_6819646_e.svg"
              alt="Top Right Image"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Right Part */}
        <div className="w-[50vw] md:w-1/2 p-4">
          <Image
            src={TopRightImage.src}
            alt="Top Right Image"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
            <div className="p-4">
              <h3 className={`font-semibold text-lg mb-2 ${card.color}`}>{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link href={card.link} className="text-blue-600 hover:underline">
                {card.letter} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form2;
