import { ArrowRight, Cloud, Globe2, Star, Users } from "lucide-react";
import type { ComponentType } from "react";

const CLUBS: { name: string; price: string; note?: string; icon: ComponentType<{ size?: number; className?: string }>; iconBg: string; accent: string; top: string }[] = [
  { name: "AVAM Galaxy Club", price: "₹1,029", note: "New member: one-time donation ₹365", icon: PlanetIcon, iconBg: "bg-violet-50", accent: "text-violet-500", top: "bg-violet-500" },
  { name: "AVAM Universe Club", price: "₹516", icon: PlanetIcon, iconBg: "bg-blue-50", accent: "text-blue-500", top: "bg-blue-500" },
  { name: "AVAM Earth Club", price: "₹372", icon: Globe2, iconBg: "bg-emerald-50", accent: "text-emerald-500", top: "bg-emerald-500" },
  { name: "AVAM Sky Club", price: "₹264", icon: Cloud, iconBg: "bg-sky-50", accent: "text-sky-500", top: "bg-sky-500" },
  { name: "AVAM Star Club", price: "₹129", icon: Star, iconBg: "bg-amber-50", accent: "text-amber-500", top: "bg-amber-500" },
];

export default function Clubs() {
  return (
    <section id="clubs" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-pale text-brand-green"><Users size={20} /></span><div><h2 className="font-display text-2xl font-bold text-[#093c2c]">Our Clubs</h2><p className="text-xs text-slate-500">Choose a club and be part of a bigger impact.</p></div></div>
        <button className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-2 text-sm font-semibold text-brand-green hover:border-brand-green">Join a Club</button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CLUBS.map(({ name, price, note, icon: Icon, iconBg, accent, top }) => (
          <div key={name} className="group relative flex min-h-[236px] flex-col items-center overflow-hidden rounded-2xl border border-slate-100 bg-white px-4 pb-4 pt-5 text-center shadow-[0_5px_14px_rgba(34,68,47,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_22px_rgba(34,68,47,.13)]">
            <span className={`absolute inset-x-0 top-0 h-1 ${top}`} />
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${accent}`}><Icon size={25} /></span>
            <h3 className="mt-3 text-sm font-bold text-[#18382b]">{name}</h3>
            <p className="mt-1 text-[23px] font-bold tracking-tight text-[#093c2c]">{price}<span className="ml-0.5 text-[11px] font-medium tracking-normal text-slate-400">/month</span></p>
            <p className="mt-1 min-h-[28px] text-[10px] leading-tight text-slate-400">{note}</p>
            <button className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-lg border border-brand-green px-4 py-2 text-xs font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white">Join Now <ArrowRight size={14} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlanetIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.85" /><ellipse cx="12" cy="12" rx="10" ry="3.2" stroke="currentColor" strokeWidth="1.6" transform="rotate(-18 12 12)" /></svg>;
}
