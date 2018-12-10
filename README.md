# HTML

Linguagem de marcação que tem as seguintes responsabilidades: 

- Conteúdo;
- Semântico (tags);
- Estrutura


- `<h1>` - heading 1 - 6. 

* Usamos o h1 para definir títulos.
Usado nos primórdios da internet, para escrever textos cientifícos. 
Na maioria dos sites, recomenda-se usar até o h3 

- `<a>` - Link (a - anchor)
Usamos ele para definir a navegação do usuário.
Se você tem um texto que você deseja que o usuário clique nele.
E ele vá para outro lugar você pode usar essa tag junto com o 
atributo `href`

# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual

# ATALHOS DO VISUAL STUDIO CODE

Ctrl + B = Fecha a aba das pastas e arquivos
Seleciona um trecho da tag e aperta os comandos CTRL + D para selecionar itens correspondentes.

# ATALHO NAVEGADOR 
CTRL + R ou CTRL + F5 = Recarrega a página e apaga o cache

# PROPRIEDADE INHERIT

# PROPRIEDADE FLOAT

Quando o float é aplicado acontecem duas coisas

- Criação de um novo contexto;

- nunca esconde um conteúdo que fica sobreposto;

- o conteúdo definem o width e o height;

# A REGRA OVERFLOW: HIDDEN

- Recalcula o contexto;
- esconder o conteúdo que extravasam a altura e a largura definida. Se ele não encontrar largura e altura definidos ele vai buscar no contexto do float;

# PADDING 

- Preenchimento interno, ou respiro interno, como chamam os designers

Maneira 1 => padding com 4 valores distintos

/* padding: top right bottom left */

Maneira 2 => padding com 2 valores distintos

/* padding: top/bottom right/left */

Maneira 3 => padding com 3 valores distintos

/* padding: top right/left bottom */

Maneira 4 => padding com 1 único valor

/* padding: top/right/bottom/left */

# DISPLAY

Display: inline
- Deixa os elementos lado a lado
- elementos inline não possuem width e height
- `tag <a>` tem comportamento inline por padrão

Display: block
- não deixa elementos na mesma linha;
- elementos de bloco (display: block) podem definir largura e altura

Display: inline-block

- Possui o que há de melhor nos dois mundos :D
- Deixa os elementos ficarem lado a lado
- Podemos definir uma largura e altura para o elemento

# LINE-HEIGHT

- A propriedade line-height pode ser usada para centralizar um
texto dentro de um botão verticalmente, bastando apenas defini-lá
com o mesmo valor da altura;

# Propriedade position

position: absolute

- cria um novo contexto;
- o que define a largura e a altura é o novo conteúdo
- top/bottom representam o eixo x
- left/right representam o eixo y 
- top/bottom/left/right mover em relação à página


# EMMET 

comando `bgc:transparent` quando uso o CTRL + D sobre o commando
o VSCode exibe a propriedade CSS

# VERTICAL-ALIGN

Usado para alinhar verticalmente dois elementos com display: inline-block