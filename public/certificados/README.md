# Certificados

## Como adicionar seus certificados

Adicione seus arquivos **PDF** e **imagens** aqui.

### Passos:

1. **Adicione o PDF do certificado**
   - Copie o arquivo `.pdf` para esta pasta
   - Exemplo: `react-fundamentals.pdf`

2. **Adicione a imagem do certificado**
   - Copie a imagem `.jpg` ou `.png` para esta pasta
   - Exemplo: `react-fundamentals.jpg`

3. **Atualize o array CERTIFICATES** em `src/pages/Certificados.jsx`
   ```jsx
   const CERTIFICATES = [
     {
       id: 1,
       title: "Seu Certificado",
       file: "react-fundamentals.pdf", // O PDF para download
       image: "/Guimcv1/certificados/react-fundamentals.jpg", // A imagem
       issuer: "Instituição",
     },
   ];
   ```

### Importantes:

- O nome do arquivo PDF e da imagem devem corresponder
- Recomenda-se usar imagens `.jpg` de boa qualidade
- As imagens serão exibidas com efeito GlareHover
- Ao clicar em qualquer lugar do card, faz o download do PDF automaticamente
