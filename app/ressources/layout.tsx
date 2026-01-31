
export const metadata = {
  title: "Ressources pour Homeschooling - école a la maison - Montréal",
  description:
    "Liste de liens utiles de  l'école a la maison Quebec.",
}

 
 export default function RessourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4">
      {children}
    </section>
  );
}
