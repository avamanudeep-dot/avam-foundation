import Image from "next/image";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";

const STATS = [
  { icon: Users, label: "Stronger\nCommunities" },
  { icon: Heart, label: "Brighter\nFutures" },
  { icon: Leaf, label: "Real\nImpact" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(105deg,#fffdf7_0%,#f7faf4_48%,#e7f0e3_100%)]">
      <div className="hero-leaf hero-leaf-left" />
      <div className="hero-leaf hero-leaf-mid" />
      <div className="mx-auto grid min-h-[430px] max-w-7xl grid-cols-1 items-center px-4 py-10 sm:px-6 lg:grid-cols-[1.18fr_.82fr] lg:px-8 lg:py-0">
        <div className="relative z-10 py-5 lg:py-10">
          <p className="mb-3 text-[11px] font-bold tracking-[0.23em] text-brand-green">PEOPLE · SUPPORT · OPPORTUNITY</p>
          <h1 className="font-display text-4xl font-bold leading-[.98] text-[#073c2c] sm:text-5xl lg:text-[54px]">Together for a<br /><span className="text-[#075a31]">Better Tomorrow</span></h1>
          <p className="mt-3 max-w-[510px] text-[13px] leading-relaxed text-slate-600 sm:text-sm">AVAM Foundation is a community-driven initiative to support education, families, and individuals in need. Join us to create opportunities and bring positive change to society.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#membership" className="flex items-center gap-2 rounded-md bg-[#006a35] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-light">Become a Member <ArrowRight size={16} /></a>
            <a href="#support" className="flex items-center gap-2 rounded-md border border-[#0e6b3b] bg-white px-5 py-2.5 text-xs font-semibold text-[#075a31] transition-colors hover:border-brand-green hover:text-brand-green">Support a Cause</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-5">{STATS.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#deefda] text-brand-green"><Icon size={17} /></span><span className="whitespace-pre-line text-xs font-medium text-slate-700">{label}</span></div>)}</div>
        </div>
        <div className="relative mx-auto hidden h-full min-h-[430px] w-full max-w-none overflow-visible lg:block">
          <div className="absolute left-[-58px] top-[62px] z-10 -rotate-6 font-display text-[22px] italic leading-[.9] text-[#073d49]">Small<br />Support<br />Big Change</div>
          <div className="absolute inset-y-0 right-[-90px] w-[660px] overflow-hidden rounded-bl-[46%]"><Image src="/images/hero-girl-generated.png" alt="A smiling child supported by AVAM Foundation" fill sizes="660px" className="object-cover object-[74%_center]" priority /></div>
          <div className="absolute bottom-5 right-[-28px] z-10 max-w-[205px] -rotate-[16deg] bg-[#e6f2df]/95 px-7 py-5 text-[12px] font-medium leading-relaxed text-[#063d31] shadow-sm">&ldquo;A stronger society is built by compassionate people.&rdquo;<span className="mt-1 block text-[11px] font-semibold text-brand-green">— AVAM Foundation</span></div>
        </div>
      </div>
    </section>
  );
}
