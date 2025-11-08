// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-[var(--text-muted)]">
      © {new Date().getFullYear()} V Films • All rights reserved.
    </footer>
  );
}
