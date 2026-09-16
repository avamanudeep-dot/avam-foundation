import Image from "next/image";
import { Heart } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Membership", href: "#membership" },
  { label: "Clubs", href: "#clubs" },
  { label: "Support", href: "#support" },
  { label: "Our Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon];

export default function Footer() {
  return (
    <footer id="about" className="mt-8 border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div id="contact" className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="AVAM Foundation logo" width={36} height={36} />
            <span className="font-display text-lg font-bold text-brand-green">
              AVAM FOUNDATION
            </span>
          </div>
          <p className="text-xs text-neutral-400">Together for a Better Tomorrow</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-brand-green">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SOCIALS.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-brand-green"
              aria-label="Social link"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2024 AVAM Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Together for a Better Tomorrow
            <Heart size={12} className="fill-brand-green text-brand-green" />
          </p>
        </div>
      </div>
    </footer>
  );
}
