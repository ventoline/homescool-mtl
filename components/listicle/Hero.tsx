
export default function Hero({ title =  'Ressources Homeschooling'}: { title?: string }) {

  return (
/*        <section className="mb-12 text-center">
 */        <section className="hero text-center bg-red-500 relative left-1/2 right-1/2 top-1/2 pt-10 -ml-[50vw] -mr-[50vw] w-screen">

      <h1 className=" font-display text-4xl font-bold text-yellow-500 mb-4">
      {title}  <br/>école à la maison - Montréal
      </h1>
      <h3 className="text-lg text-gray-700 max-w-2xl mx-auto">
       Liste, ressources et adresses utiles de l'école à la maison a Montreal.
      </h3>
    </section>
  )
}
