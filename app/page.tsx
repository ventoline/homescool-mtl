import Hero from "@/components/listicle/Hero";
import CentreList from "@/components/listicle/CentreList";
import MapList from "@/components/MapList";
import OutLinks from "@/components/OutLinks";
import MapboxMap from "@/components/map/MapboxMap";
//import PageAnalytics from "@/components/AnalyticsPage"
import AdUnit from "@/components/AdBlock";
import Image from "next/image";
import { useData } from "@/components/DataProvider";
import Link from "next/link";

("use-client");

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-4  mt-0">
      <Hero title="Centres de Homeschooling" />
      <section className="grid">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr] p-3">
          <div>
            {" "}
            <p>
              {" "}
              <span className="text-gray-500">
                Pratiquer l’école à la maison peut être exigeant pour une
                famille. Heureusement il existe des centres à Montréal de
                structure et de philosophie variées offrant de nombreuses bonnes
                raisons de rejoindre un groupe d'entraide. Vous souhaitez
                peut-être passer du temps avec des familles
              </span>{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-500">
                partageant une philosophie éducative similaire, vous faire des
                amis pour vous et vos enfants, enrichir les opportunités
                éducatives de votre enfant ou tout simplement partager des
                moments conviviaux avec d'autres familles pratiquant
                l'instruction à domicile. Quelle que soit votre motivation,
                rejoindre un groupe d'entraide présente de nombreux avantages,
                tant pour les parents que pour les enfants a toutes les étapes
                de leur éducation.
              </span>{" "}
            </p>
            <br />
            <p></p>
            <p>
              <span className="text-gray-500">
                {" "}
                Trouver le bon centre dans le paysage Montréalais constamment en
                mouvement n'est pas toujours mince affaire.
              </span>{" "}
            </p>
            <p>
              <span className="text-gray-500">
                Le centre ou CO-OP ont une service, une structures, et
                philosophie propre à chacune.
              </span>
            </p>
            <h2>
              Retrouve ici les principaux centres avec les infos pour contacter
              et rejoindre une structure et des familles partageant les valeurs
              proches.
            </h2>
          </div>
          <div className="bg-black">
            {" "}
            <Image
              className="h-50 min-w-full min-h-full object-cover"
              src="/images/children-engaged-with-book_500.jpg"
              alt="Homeschooling community in Montreal"
              width={250}
              height={250}
            />
          </div>
        </div>
        {/*  <div className="grid gap-4 md:grid-cols-[1fr_auto]" ><Image
  src="/images/children-engaged-with-book_500.jpg"
  alt="Homeschooling community in Montreal"
  width={250}
  height={250}
/></div> */}
      </section>

      {/* Ads placeholder */}
      <div className="my-2 text-center">
        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <AdUnit slot="1453151522143278" />
          {/*      <span className="text-gray-500"><i>Votre annonce ici</i></span>
           */}{" "}
        </div>
      </div>

      <section className="grid" /*  className="grid lg:grid-cols-2 gap-10" */>
        <MapList filter={"centre"} />
      </section>

      {/*  Listicles */}
      <section className="grid lg:grid-cols-2 gap-10">
        {/* <CentreList centres={centres} />
        <MapboxMap centres={centres} /> */}
      </section>

      {/* Related links */}
      <section className="mt-16 w-1/2 float-left">
        <h2 className="text-2xl font-bold mb-4">Voir aussi</h2>

        <OutLinks />
      </section>
      {/* contact */}
      <section className="my-2 text-center w-1/2 float-right mt-20">
        <div className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
          <span className=" contact-box text-gray-300">
            Une question? Ajouter votre centre ici? reporter un glitch? <br />
            <u>
              <Link href="mailto:leclubelectro@gmail.com">Contactez-nous</Link>
            </u>
          </span>
        </div>
      </section>
    </main>
  );
}
