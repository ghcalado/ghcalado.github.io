import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghcalado.github.io"),
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
    title: "Ghabriel Calado — IA aplicada & Backend",
    description: "Código que pensa. Produto que funciona.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${basePath}/avatar-ghabriel.jpeg`, width: 1254, height: 1254, alt: "Avatar de Ghabriel Calado" }],
  },
  icons: {
    icon: `${basePath}/avatar-ghabriel.jpeg`,
    shortcut: `${basePath}/avatar-ghabriel.jpeg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
