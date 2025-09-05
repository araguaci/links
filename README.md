# 📄 Organizador de Favoritos com Tema de Alta Performance

```markdown
# 🚀 Organizador de Favoritos

Um organizador de links moderno com tema de alta performance, PWA instalável, formulário de adição e integração com Google Sheets.

![Preview](screenshots/preview.png)

## ✨ Recursos

- ✅ **Tema de alta performance** com cores "Asfalto Noturno", "Listra Vencedora" e "Vermelho Combustível"
- ✅ **Interface responsiva** com cards em 3 colunas
- ✅ **Busca instantânea** por nome, descrição ou URL
- ✅ **PWA Instalável** (funciona offline)
- ✅ **Formulário web** para adicionar novos links
- ✅ **Integração com Google Sheets** para atualização automática
- ✅ **Notificações push** para feedback do usuário
- ✅ **Sistema de autenticação** para proteger o formulário
- ✅ **Atualização automática** do conteúdo
```

## 📦 Estrutura do Projeto

```
favoritos-app/
├── index.html           # Página principal
├── form.html            # Formulário para adicionar links
├── login.html           # Página de login
├── manifest.json        # Configuração PWA
├── sw.js                # Service Worker para notificações
├── data/
│   └── favoritos.json   # Dados locais (alternativa)
├── assets/
│   ├── css/
│   │   └── style.css    # Estilos principais
│   └── js/
│       ├── app.js       # Lógica principal
│       ├── form.js      # Lógica do formulário
│       ├── auth.js      # Autenticação
│       └── notifications.js # Notificações push
└── icons/               # Ícones para PWA
```

## 🚀 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/favoritos-app.git
cd favoritos-app
```

### 2. Configure a Integração com Google Sheets

1. Crie uma planilha no Google Sheets com as colunas:
   - `nome` (Nome do link)
   - `url` (URL completa)
   - `tema` (Categoria)
   - `descricao` (Descrição)
   - `icone` (Classe Font Awesome)
   - `cor` (Cor hexadecimal)
   - `iconecategoria` (Ícone da categoria)

2. Publique a planilha:
   - Arquivo → Publicar na web
   - Escolha "Toda a planilha"
   - Formato: JSON
   - Clique em "Publicar"

3. Atualize a URL no `assets/js/app.js`:
```javascript
const SPREADSHEET_ID = 'sua_planilha_id_aqui';
```

### 3. Configure a Autenticação

1. Crie um arquivo `credentials.json` com as credenciais do Google Cloud
2. Atualize a chave secreta em `auth.js`:
```javascript
const SECRET_KEY = 'sua_chave_secreta_aqui';
```

### 4. Hospede o Projeto

Escolha uma das opções abaixo:

#### GitHub Pages
```bash
# Crie um repositório no GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/favoritos-app.git
git push -u origin main

# Habilite GitHub Pages em Settings > Pages
```

#### Netlify
1. Acesse [netlify.com](https://www.netlify.com/)
2. Arraste e solte a pasta do projeto
3. O site será implantado automaticamente

#### Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Guia do Usuário

### 🔹 Como Acessar

1. Abra o site no navegador
2. O PWA será detectado automaticamente
3. Para instalar:
   - Chrome: Clique no ícone de instalação na barra de endereços
   - Safari: Compartilhar → "Adicionar à Tela de Início"

### 🔹 Como Navegar

- **Busca**: Use a barra de pesquisa para encontrar links rapidamente
- **Categorias**: Os links são organizados em cards por tema
- **Links**: Clique em qualquer link para abrir em nova aba

### 🔹 Como Adicionar Novos Links

1. Acesse `form.html`
2. Faça login com suas credenciais
3. Preencha o formulário:
   - Nome do link
   - URL completa
   - Categoria
   - Descrição (opcional)
   - Ícone (classe Font Awesome)
   - Cor (selecionável)
4. Clique em "Salvar Link"

### 🔹 Como Editar Links Existente

Atualmente, a edição é feita diretamente na planilha do Google Sheets:
1. Abra a planilha do Google Sheets
2. Edite as células conforme necessário
3. As alterações serão refletidas no site em até 5 minutos

## ⚙️ Configuração Avançada

### Personalizar o Tema

Edite as variáveis no `assets/css/style.css`:

```css
:root {
  --vermelho-combustivel: #cc0000;     /* Ações primárias */
  --listra-vencedora: #f0f0f0;         /* Texto principal */
  --asfalto-noturno: #1a1a1a;          /* Fundo */
  --cromo-reluzente: #b0b0b0;          /* Texto secundário */
  --vapor-de-pista: #505050;           /* Borda e detalhes */
}
```

### Adicionar Novas Categorias

Atualize a lista no `form.html`:

```html
<select id="tema" name="tema" required>
  <option value="">Selecione uma categoria</option>
  <option value="DEVTOOLS">DEVTOOLS</option>
  <option value="Infraestrutura & Cloud">Infraestrutura & Cloud</option>
  <!-- Adicione novas opções aqui -->
</select>
```

## 🔐 Segurança

- 🔒 **Autenticação JWT** para proteger o formulário
- 🛡️ **Rate limiting** para prevenir ataques de força bruta
- 🔐 **HTTPS obrigatório** para conexões seguras
- 📦 **Dados offline** protegidos no localStorage

## 🔄 Atualizações Automáticas

O sistema verifica atualizações a cada 5 minutos:

```javascript
// Em assets/js/app.js
setInterval(carregarDados, 5 * 60 * 1000);
```

## 📱 PWA (Progressive Web App)

### Recursos do PWA

- ✅ **Instalável** como aplicativo nativo
- ✅ **Funciona offline** (com cache)
- ✅ **Notificações push**
- ✅ **Atalhos** para ações rápidas
- ✅ **Modo tela cheia**

### Verificação de Instalação

```javascript
// Detecta se está instalado como PWA
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('App instalado');
}
```

## 📬 Suporte

Para suporte, abra uma issue no repositório ou entre em contato:

- **Email**: artesdosul@proton.me
- **GitHub**: [github.com/araguaci/links](https://github.com/araguaci/links)

---

## 📜 Licença

MIT © 2025 @araguaci

Este projeto é gratuito e de código aberto.
```

## 📌 Instruções Adicionais

1. **Para desenvolvedores**: 
   - Use `npm run dev` para modo de desenvolvimento
   - Os arquivos estão minificados para produção

2. **Backup**:
   - Os dados são armazenados no Google Sheets
   - Faça backup periódico da planilha

3. **Performance**:
   - O site é otimizado para carregamento rápido
   - Imagens são carregadas sob demanda

4. **Acessibilidade**:
   - Contraste WCAG AA ou superior
   - Suporte a leitores de tela
   - Navegação por teclado

Este README fornece todas as instruções necessárias para configurar, usar e manter o organizador de favoritos.
