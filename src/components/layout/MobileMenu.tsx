"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, URLS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background border-l border-border flex flex-col"
          >
            <div className="flex justify-end p-8">
              <button
                onClick={onClose}
                aria-label="메뉴 닫기"
                className="text-muted hover:text-foreground transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="py-4 text-sm tracking-wide text-foreground/50 hover:text-foreground border-b border-border transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto p-8 flex gap-5 items-center">
              <a
                href={URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/icons/instaIcon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href={URLS.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/icons/kakaoChIcon.png"
                  alt="카카오톡 채널"
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
