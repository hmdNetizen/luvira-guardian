"use client";

export default function LoginButton() {
  return (
    <a
      href="/auth/login"
      className="w-full text-center inline-block px-6 py-3 bg-[#3bcaca] hover:bg-[#2db8b8] text-white font-medium rounded-2xl text-[15px] tracking-[-0.01em] transition-all duration-200 hover:shadow-lg hover:shadow-[#3bcaca]/30 hover:-translate-y-px active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#3bcaca]/50"
    >
      Sign in with Auth0
    </a>
  );
}
