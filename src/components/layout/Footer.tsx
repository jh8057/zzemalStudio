import Link from "next/link";
import Image from "next/image";
import { STUDIO, URLS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Image
              src="/icons/darlyIcon.png"
              alt="스튜디오 달리"
              width={120}
              height={30}
              className="h-5 w-auto mb-6 invert"
            />
            <p className="text-sm text-foreground/60 leading-relaxed">
              {STUDIO.tagline}
            </p>
            <div className="flex gap-5 mt-8 items-center">
              <a
                href={URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/icons/instaIcon.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href={URLS.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/icons/kakaoChIcon.png"
                  alt="카카오톡 채널"
                  width={48}
                  height={48}
                  className="rounded-md"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="leading-relaxed">{STUDIO.address}</li>
              <li>
                <a
                  href={`tel:${STUDIO.phone}`}
                  className="hover:text-foreground transition-colors duration-300"
                >
                  {STUDIO.phone}
                </a>
              </li>
              <li>{STUDIO.consultingHours}</li>
              <li className="pt-2 text-foreground/70 font-medium">
                {STUDIO.bank.name} {STUDIO.bank.account}
                <br />
                <span className="font-normal text-foreground/50">{STUDIO.bank.holder}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center text-xs uppercase tracking-[0.2em] text-foreground/30">
          &copy; {new Date().getFullYear()} {STUDIO.nameEn}
        </div>
      </div>
    </footer>
  );
}
