import { FooterColumns } from "./footer-columns";

export function Footer() {
  return (
    <footer
      className="relative bg-center bg-cover bg-gray-900 text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop")',
      }}
    >
      {/* Decorative dark overlay */}
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative px-4 pt-10 pb-2 sm:px-6 lg:px-8">
        <FooterColumns />
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-[#181d3b] py-6 text-center text-gray-200 text-sm">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© 2024. Perk Group Africa - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
