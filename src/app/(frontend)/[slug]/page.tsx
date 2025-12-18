export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0D1B2A] mb-6">
          {slug}
        </h1>
        <p className="text-lg text-[#4A4A4A]">
          Página dinâmica para: /{slug}
        </p>
      </div>
    </div>
  );
}