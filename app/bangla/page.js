import newspapers from "../../data/newspapers";
import NewsCard from "../../components/ui/NewsCard";

export const metadata = {
  title: "Bangla News Papers | NewsBird",
  description: "Explore the latest headlines from top Bengali newspapers and digital media.",
};

export default function BanglaPage() {
  const banglaPapers = newspapers.bangla;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 animate-in">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
          Bangla <span className="text-emerald-600 dark:text-emerald-400">News Papers</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
          Stay connected with the heartbeat of Bengal through our curated list of daily journals.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {banglaPapers.map((paper, index) => (
          <div key={paper.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-up">
            <NewsCard newspaper={paper} />
          </div>
        ))}
      </div>
    </div>
  );
}
