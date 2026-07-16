import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Ghabriel Calado — Backend & Inteligência Artificial",
  description:
    "Portfólio de Ghabriel Calado: desenvolvimento backend, inteligência artificial, machine learning e produtos digitais.",
  keywords: [
    "Ghabriel Calado",
    "Desenvolvedor Backend",
    "Inteligência Artificial",
    "Machine Learning",
    "Python",
    "RAG",
    "Maceió",
  ],
  authors: [{ name: "Ghabriel Soares Calado Lins" }],
  creator: "Ghabriel Calado",
  openGraph: {
    title: "Ghabriel Calado — Backend & IA",
    description: "Engenharia que transforma complexidade em produto.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
