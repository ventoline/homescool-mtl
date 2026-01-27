// app/ressources/layout.tsx
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
