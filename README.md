# Portfólio — Ghabriel Calado

Portfólio pessoal estático desenvolvido com Next.js, TypeScript e CSS. O projeto foi preparado para publicação automática no GitHub Pages.

## Executar localmente

Requer Node.js 22 ou mais recente.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicar no GitHub Pages

1. Crie um repositório chamado `ghcalado.github.io`.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. No GitHub, acesse **Settings → Pages**.
4. Em **Source**, selecione **GitHub Actions**.
5. Aguarde o workflow **Deploy portfolio to GitHub Pages** terminar.

O endereço final será `https://ghcalado.github.io`.

O workflow também aceita outro nome de repositório. Nesse caso, o site será publicado em `https://ghcalado.github.io/nome-do-repositorio/` e os caminhos serão ajustados automaticamente.

## Atualizar o site

Edite o conteúdo em `app/page.tsx` e os estilos em `app/globals.css`. Depois:

```bash
git add .
git commit -m "Atualiza portfólio"
git push
```

Cada push na branch `main` publica uma nova versão automaticamente.
