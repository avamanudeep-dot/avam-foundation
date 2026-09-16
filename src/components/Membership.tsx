import Image from "next/image";
import { ArrowRight, CheckCircle2, Infinity as InfinityIcon, User } from "lucide-react";

const FIELDS = [
  "Name & Surname",
  "Gothram",
  "Mandal",
  "District",
  "Village",
  "House No.",
  "Nearby Landmark",
  "AVAM Foundation Card",
];

export default function Membership() {
  return (
    <section id="membership" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[26px] border border-emerald-100 bg-white p-6 shadow-[0_10px_25px_rgba(37,84,55,.08)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white shadow-sm">
                <User size={20} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-[#093c2c]">Membership</h2>
                <p className="text-sm text-slate-500">
                  Be a part of AVAM Foundation
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e7f3e3] px-3 py-1.5 text-xs font-semibold text-brand-green">
              <InfinityIcon size={14} />
              Unlimited Access
            </span>
          </div>

          <p className="mt-5 max-w-[470px] text-sm leading-relaxed text-slate-600">
            Create your membership with complete details and get your AVAM
            Foundation Card. Only one number should be logged in.
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <li key={field} className="flex items-center gap-2 text-sm text-neutral-700">
                <CheckCircle2 size={16} className="shrink-0 text-brand-green" />
                {field}
              </li>
            ))}
          </ul>

          <button className="mt-6 flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-light">
            Register for Membership
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-[26px] border border-emerald-50 bg-[linear-gradient(135deg,#edf6ea_0%,#fff_65%)] p-6 sm:p-10">
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border-[20px] border-emerald-100/70" />
          <MembershipCard />
        </div>
      </div>
    </section>
  );
}

function MembershipCard() {
  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute -right-6 -top-8 hidden text-right font-display text-sm italic leading-tight text-brand-green/60 sm:block">
        People
        <br />
        Support
        <br />
        Opportunity
        <br />
        Change
      </div>

      <div className="relative overflow-hidden rounded-[22px] bg-white p-6 shadow-[0_18px_30px_rgba(19,70,39,.18)] ring-1 ring-emerald-100">
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-green-pale" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-green/10" />

        <div className="relative flex items-center gap-2 border-b border-emerald-50 pb-4">
          <Image src="/images/logo.svg" alt="" width={28} height={28} />
          <div>
            <p className="font-display text-lg font-bold text-brand-green">
              AVAM FOUNDATION
            </p>
            <p className="text-[10px] uppercase tracking-wide text-neutral-400">
              Together for a Better Tomorrow
            </p>
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f4ee] text-neutral-400">
              <User size={26} />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-neutral-400">
                Member Name
              </p>
              <p className="text-sm font-semibold text-neutral-800">XXXXXXX</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-neutral-400">
                Membership ID
              </p>
              <p className="text-sm font-semibold text-neutral-800">
                AVAM123456
              </p>
            </div>
          </div>
          <div className="text-center"><QrCode /><p className="mt-1 text-[8px] font-bold uppercase tracking-[.12em] text-slate-400">Scan to verify</p></div>
        </div>

        <div className="relative mt-5 flex items-center gap-2 rounded-lg bg-[#eff8ed] px-3 py-2 text-xs font-semibold text-brand-green">
          <CheckCircle2 size={14} />
          Your Support Creates Real Change
        </div>
      </div>
    </div>
  );
}

function QrCode() {
  const finder = (row: number, col: number) => {
    const inTopLeft = row < 7 && col < 7;
    const inTopRight = row < 7 && col > 13;
    const inBottomLeft = row > 13 && col < 7;
    const r = row % 7;
    const c = col % 7;
    if (inTopLeft || inTopRight || inBottomLeft) return r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
    return null;
  };
  return (
    <svg width="78" height="78" viewBox="0 0 105 105" className="shrink-0 rounded-lg bg-[#151515] p-2 shadow-sm" aria-label="Membership verification QR code">
      <rect width="105" height="105" rx="5" fill="#151515" />
      {Array.from({ length: 21 }).map((_, row) =>
        Array.from({ length: 21 }).map((_, col) => {
          const marker = finder(row, col);
          const on = marker ?? ((row * 17 + col * 11 + row * col) % 7 < 3);
          if (!on) return null;
          return (
            <rect
              key={`${row}-${col}`}
              x={4 + col * 4.6}
              y={4 + row * 4.6}
              width="4.2"
              height="4.2"
              fill="#ffffff"
            />
          );
        })
      )}
    </svg>
  );
}
