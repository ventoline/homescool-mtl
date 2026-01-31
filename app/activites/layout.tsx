
export const metadata = {
  title: "Activites pour Homeschooling - école a la maison - Montréal",
  description:
    "Liste de services pour homscoolers à domicile à Montréal.",
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
