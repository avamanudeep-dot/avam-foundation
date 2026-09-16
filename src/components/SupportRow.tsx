import { ArrowRight, Award, CheckCircle2, Gift, Heart, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";

const SUPPORT_POINTS = ["Only genuine people", "Verified by our team", "Home enquiry if required"];
const MERIT_ITEMS = [
  { title: "1 Lakh+ Job Placements", desc: "Engineering graduates earning ₹1 lakh+ in government jobs are celebrated." },
  { title: "10th Marks Excellence", desc: "High-achieving government-school students receive priority support." },
  { title: "Other Achievements", desc: "Outstanding service and public achievements are honoured with gifts." },
];

function SectionTitle({ icon: Icon, title, subtitle, tone }: { icon: typeof Heart; title: string; subtitle: string; tone: string }) {
  return <div className="flex items-center gap-3"><span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ${tone}`}><Icon size={22} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-slate-400">AVAM cares</p><h3 className="font-display text-[21px] font-bold leading-tight text-[#093c2c]">{title}</h3><p className="mt-1 text-xs text-slate-500">{subtitle}</p></div></div>;
}

export default function SupportRow() {
  return (
    <section id="support" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <article className="group relative overflow-hidden rounded-[26px] border border-rose-100 bg-[linear-gradient(135deg,#fff_0%,#fff7f8_100%)] p-6 shadow-[0_10px_25px_rgba(56,83,68,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(229,86,117,.16)]">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-rose-100/50" />
          <SectionTitle icon={Heart} title="Support for Families & Children" subtitle="A helping hand, when it matters." tone="bg-rose-100 text-rose-500" />
          <p className="relative mt-5 text-sm leading-relaxed text-slate-600">Single parent child, school fee or any other genuine problem — we will find a donor.</p>
          <ul className="relative mt-5 grid gap-2.5">{SUPPORT_POINTS.map((point) => <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-slate-700"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 size={13} /></span>{point}</li>)}</ul>
          <button className="relative mt-6 flex items-center gap-2 rounded-xl bg-[#0a6b3a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#07572f]">Request Support <ArrowRight size={16} /></button>
        </article>

        <article className="group relative overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#fff5fa_0%,#fff_54%,#fff8df_100%)] p-6 shadow-[0_10px_25px_rgba(56,83,68,.08)] ring-1 ring-pink-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(236,72,153,.16)]">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-amber-100/45" /><div className="absolute right-7 top-7 text-pink-200"><Sparkles size={26} /></div>
          <SectionTitle icon={Gift} title="Special Days & Donations" subtitle="Turn a celebration into kindness." tone="bg-pink-100 text-pink-500" />
          <p className="relative mt-5 max-w-[330px] text-sm leading-relaxed text-slate-600">Celebrate your special day or any occasion by donating food or money. We share every act of kindness on Instagram.</p>
          <div className="relative mt-6 rounded-2xl border border-pink-100 bg-white/75 p-3"><p className="text-xs font-semibold text-pink-600">Make your day meaningful</p><p className="mt-0.5 text-xs text-slate-500">Food drives, gifts and community moments.</p></div>
          <button className="relative mt-5 flex items-center gap-2 rounded-xl bg-[linear-gradient(100deg,#ec4899,#f97316)] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(236,72,153,.25)] transition hover:scale-[1.02]"><InstagramIcon size={17} /> Follow Our Instagram <ArrowRight size={15} /></button>
        </article>

        <article className="group relative overflow-hidden rounded-[26px] border border-amber-100 bg-[linear-gradient(135deg,#fffdf4_0%,#fff_60%,#f5fff5_100%)] p-6 shadow-[0_10px_25px_rgba(56,83,68,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(245,158,11,.16)]">
          <div className="absolute -right-9 -top-9 h-32 w-32 rounded-full bg-amber-100/50" />
          <SectionTitle icon={Award} title="Merit & Recognition" subtitle="Celebrating people who inspire us." tone="bg-amber-100 text-amber-500" />
          <ul className="relative mt-5 space-y-3">{MERIT_ITEMS.map((item, index) => <li key={item.title} className="flex gap-3 rounded-xl bg-white/70 p-2.5 transition group-hover:bg-white"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[11px] font-bold text-amber-600">0{index + 1}</span><div><p className="text-sm font-bold text-[#173c2d]">{item.title}</p><p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.desc}</p></div></li>)}</ul>
        </article>
      </div>
    </section>
  );
}
