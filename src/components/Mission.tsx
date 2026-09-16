import { GraduationCap, Heart, Star, Users } from "lucide-react";

const POINTS = [
  { icon: GraduationCap, label: "Education\nSupport" },
  { icon: Users, label: "Community\nEmpowerment" },
  { icon: Heart, label: "Help in\nNeed" },
  { icon: Star, label: "Recognition\n& Encouragement" },
];

export default function Mission() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 rounded-2xl border border-emerald-100 bg-[#f1f8ef] px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3 lg:max-w-[420px]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14723e] text-white"><Star size={19} /></span>
          <div><h2 className="font-display text-xl font-bold text-[#093c2c]">Our Mission</h2><p className="mt-1 text-xs leading-relaxed text-slate-600">To support education, families and individuals in need, and create opportunities for a better and brighter tomorrow.</p></div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:gap-x-8">
          {POINTS.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-2.5 lg:flex-col lg:gap-1.5 lg:text-center"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#14723e] shadow-sm"><Icon size={18} /></span><span className="whitespace-pre-line text-xs font-semibold leading-tight text-[#234334]">{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
