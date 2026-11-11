/*  1. Constantes  */
const URL_GEOCODIFICACAO = "https://geocoding-api.open-meteo.com/v1/search";
const URL_PREVISAO = "https://api.open-meteo.com/v1/forecast";
const CHAVE_FAVORITOS = "cidadesFavoritas";

// Códigos WMO retornados pela API -> descrição legível
// Consulte a lista completa em https://open-meteo.com/en/docs (seção "WMO Weather interpretation codes")
const DESCRICOES_CLIMA = {
  0: "Céu limpo",
  1: "Predominantemente limpo",
  2: "Parcialmente nublado",
  3: "Nublado",
  // TODO: complete com os demais códigos (45, 48, 51, 61, 63, 65, 80, 95...)
};

/* ---------- 2. Estado da aplicação ---------- */
let cidadeSelecionada = null; // objeto da cidade atual (nome, país, latitude, longitude, id...)
let favoritas = [];           // array de cidades favoritas

/* ---------- 3. Elementos do DOM ---------- */
const formBusca = document.getElementById("form-busca");
const campoCidade = document.getElementById("campo-cidade");
const areaMensagem = document.getElementById("mensagem");
const listaResultados = document.getElementById("lista-resultados");
const painelAtual = document.getElementById("painel-atual");
const listaPrevisao = document.getElementById("lista-previsao");
const listaFavoritas = document.getElementById("lista-favoritas");

/* ---------- 4. Mensagens de estado ---------- */
// tipo: "carregando" | "sucesso" | "erro"
function mostrarMensagem(texto, tipo) {
  // TODO: preencher areaMensagem com o texto
  // TODO: aplicar a classe "visivel" e a classe do tipo (carregando, sucesso, erro)
}

function limparMensagem() {
  // TODO: esconder a área de mensagem
}

/* ---------- 5. Pesquisa de cidades (1ª requisição) ---------- */
async function pesquisarCidades(nome) {
  // TODO: montar a URL com o nome (use encodeURIComponent), count, language=pt e format=json
  // TODO: usar fetch() e aguardar a resposta (await)
  // TODO: verificar response.ok; se falso, lançar um erro (throw new Error)
  // TODO: converter com response.json()
  // TODO: retornar o array data.results (pode ser undefined quando não há resultados!)
}

function exibirResultados(cidades) {
  // TODO: limpar listaResultados
  // TODO: para cada cidade, criar um <li> com nome, estado (admin1) e país
  // TODO: incluir um botão "Ver clima" que chama selecionarCidade(cidade)
}

/* ---------- 6. Consulta do clima (2ª requisição) ---------- */
async function consultarClima(cidade) {
  // TODO: montar a URL com latitude, longitude, current, daily, timezone=auto e forecast_days=5
  //       (confira os nomes dos parâmetros na documentação da Open-Meteo)
  // TODO: usar fetch(), verificar response.ok e converter para JSON
  // TODO: retornar os dados
}

function exibirClimaAtual(cidade, dados) {
  // TODO: limpar painelAtual
  // TODO: mostrar cidade e país, temperatura, descrição, vento, sensação térmica e umidade
  // TODO: se um campo não existir, mostrar "Indisponível" (nunca inventar valores)
}

function exibirPrevisao(dados) {
  // TODO: limpar listaPrevisao
  // TODO: para cada dia, criar um cartão (classe "cartao") com data, descrição,
  //       temperatura mínima e máxima e probabilidade de chuva
}

function descreverClima(codigo) {
  // TODO: retornar DESCRICOES_CLIMA[codigo] ou um texto padrão se o código não existir
}

/* ---------- 7. Fluxo principal ---------- */
async function buscarCidade(evento) {
  evento.preventDefault();
  const nome = campoCidade.value.trim();

  // TODO: se nome estiver vazio, mostrar mensagem de erro e parar (return)
  // TODO: mostrar mensagem "Buscando cidades..." (carregando)
  // TODO: try { chamar pesquisarCidades } catch { mostrar erro } finally { limpar carregamento }
  // TODO: se não houver resultados, mostrar "Nenhuma cidade encontrada"
  // TODO: caso contrário, chamar exibirResultados
}

async function selecionarCidade(cidade) {
  // TODO: guardar a cidade em cidadeSelecionada
  // TODO: limpar painelAtual e listaPrevisao (para não misturar dados da cidade anterior)
  // TODO: mostrar mensagem "Carregando clima..."
  // TODO: try { await consultarClima; exibirClimaAtual; exibirPrevisao } catch { erro } finally { ... }
  // TODO: exibir um botão "Adicionar aos favoritos" para esta cidade
}

/* ---------- 8. Favoritas ---------- */
function carregarFavoritas() {
  // TODO: ler o localStorage com CHAVE_FAVORITOS
  // TODO: usar JSON.parse dentro de try/catch (dados podem estar ausentes ou inválidos)
  // TODO: garantir que o resultado seja um array; senão, usar []
}

function salvarFavoritas() {
  // TODO: gravar o array favoritas no localStorage com JSON.stringify
}

function adicionarFavorita(cidade) {
  // TODO: verificar duplicidade (por id ou latitude + longitude)
  // TODO: se não for duplicada, adicionar ao array, salvar e atualizar a lista
}

function removerFavorita(cidade) {
  // TODO: remover do array, salvar e atualizar a lista
}

function exibirFavoritas() {
  // TODO: limpar listaFavoritas
  // TODO: se não houver favoritas, mostrar mensagem de lista vazia
  // TODO: para cada favorita, criar <li> com nome, país, botão "Ver clima" e botão "Remover"
}

/* ---------- 9. Inicialização ---------- */
formBusca.addEventListener("submit", buscarCidade);

favoritas = carregarFavoritas();
exibirFavoritas();