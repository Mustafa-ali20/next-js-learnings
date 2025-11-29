import Link from "next/link";


export default async function NewsArticle({
  params,
  searchParams
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
  return (
    <div>
      <h1>News Article Id</h1>
      <p>reading in {lang}</p>

      <div>
        <div className="flex gap-4 mt-4">
          <Link
            href={`/article/${articleId}?lang=en`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            English
          </Link>
          <Link
            href={`/article/${articleId}?lang=es`}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Spanish
          </Link>
          <Link
            href={`/article/${articleId}?lang=fr`}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          >
            French
          </Link>
        </div>
      </div>
    </div>
  );
}
