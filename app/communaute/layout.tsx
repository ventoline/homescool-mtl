
export const metadata = {
  title: "Aide et communaute Homeschooling - école a la maison - Montréal",
  description:
    "Liste de ressources et d'entraide pour les familles pratiquant l'école a la maison à Montréal.",
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
