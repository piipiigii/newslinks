import newspapers from "../data/newspapers";
import NewsCard from "../components/ui/NewsCard";

export default function Home() {
  const assamesePapers = newspapers.assamese;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 animate-in">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-600 dark:text-zinc-400 mb-4 tracking-tight">
          Assamese <span className="text-emerald-600 dark:text-emerald-400">News Papers</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
          Your direct access to the most trusted Assamese daily journals and digital portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {assamesePapers.map((paper, index) => (
          <div key={paper.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-up">
            <NewsCard newspaper={paper} />
          </div>
        ))}
      </div>
    </div>
  );
}
