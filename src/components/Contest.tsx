import { ArrowRight, Gift } from "lucide-react";

export default function Contest() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-rose-50 p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white">
            <Gift size={20} />
          </span>
          <div>
            <h3 className="text-base font-bold text-rose-600 sm:text-lg">
              Contest / Gifts
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Share your self introduction and be a part of our contests and
              gift programs.
            </p>
          </div>
        </div>
        <button className="flex shrink-0 items-center gap-2 rounded-full border border-rose-400 bg-white px-6 py-3 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-500 hover:text-white">
          Participate Now
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
