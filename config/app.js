/* ==========================================================
   app.js — Portabilidade na Prática 2.0
   Toda a lógica da landing page.
   O pagamento é gerado pelo backend (server.js na VPS).
   NÃO inclua credenciais aqui.
   ========================================================== */

'use strict';

// ----------------------------------------------------------
// ENDPOINT DO BACKEND (VPS)
// ----------------------------------------------------------
const API_URL = 'https://https://agilizza-chat-backend-agilizza-evento-backend.xoduag.easypanel.host//api/checkout';

// ----------------------------------------------------------
// DADOS
// ----------------------------------------------------------
const BENEFITS = [
  { icon: '📈', title: 'Domine a Portabilidade de Crédito',   desc: 'Estratégias avançadas para turbinar suas vendas com portabilidade e sair na frente da concorrência.' },
  { icon: '🔄', title: 'Compra de Dívida na Prática',         desc: 'Técnicas reais para capturar e converter operações de compra de dívida com mais eficiência e margem.' },
  { icon: '🏛️', title: 'Crescimento em SIAPE e INSS',         desc: 'Estratégias específicas para servidores públicos e aposentados — o segmento mais lucrativo do consignado.' },
  { icon: '💡', title: 'Conteúdo 100% Prático',               desc: 'Sem teoria vaga. Tudo que for apresentado é aplicável desde o primeiro dia de trabalho.' },
  { icon: '🤝', title: 'Networking de Alto Nível',             desc: 'Esteja na mesma sala que os maiores players do mercado de crédito consignado do sul do Brasil.' },
  { icon: '🚀', title: 'Vantagem Competitiva Real',            desc: 'Quem estiver nesse evento vai sair na frente. Simples assim. O mercado não espera e as vagas tampouco.' },
];

const SPEAKERS = [
  { initials: 'RM', name: 'Ricardo Matos',   company: 'Agilizza Promotora',  city: 'Florianópolis - SC', desc: 'Especialista em portabilidade de crédito consignado com mais de 15 anos no mercado. Responsável por operações superiores a R$ 50M/ano.' },
  { initials: 'CA', name: 'Carla Andrade',   company: 'Grupo Crédito Sul',   city: 'Porto Alegre - RS',  desc: 'Referência nacional em compra de dívida e refinanciamento INSS. Formou mais de 500 correspondentes em todo o Brasil.' },
  { initials: 'FO', name: 'Felipe Oliveira', company: 'SIAPE Experts',       city: 'Brasília - DF',      desc: 'Autoridade em crédito SIAPE e estratégias para servidores públicos. Criador de metodologias de conversão aplicadas por grandes redes.' },
  { initials: 'ML', name: 'Mariana Lima',    company: 'Top Corban Network',  city: 'Curitiba - PR',      desc: 'Gestora de equipes comerciais de alta performance no segmento consignado. Especialista em recrutamento e treinamento de corbans.' },
];

const AUDIENCE = [
  'Correspondentes Bancários (Corbans)',
  'Promotoras de Crédito',
  'Equipes Comerciais de Consignado',
  'Vendedores INSS e SIAPE',
  'Gestores de Produção',
  'Empresários do Setor Financeiro',
  'Consultores de Crédito',
  'Representantes de Bancos',
];

const FAQS = [
  { q: 'O evento é presencial?',                        a: 'Sim, o evento é 100% presencial no Majestic Palace Hotel, em Florianópolis - SC. Não haverá transmissão online.' },
  { q: 'O que está incluso no ingresso?',                a: 'Acesso ao evento completo, coffee break, material de apoio digital e certificado de participação.' },
  { q: 'Como funciona o ingresso de Parceiro Agilizza?', a: 'O valor diferenciado é exclusivo para parceiros Agilizza com produção ativa. Após a inscrição, nossa equipe fará a validação. Em caso de inelegibilidade, você será notificado.' },
  { q: 'Quantas vagas restam disponíveis?',              a: 'O evento tem capacidade máxima de 120 pessoas. As vagas são limitadas e não haverá venda na porta.' },
  { q: 'Posso transferir meu ingresso?',                 a: 'Sim, mediante solicitação até 7 dias antes do evento e análise da equipe Agilizza.' },
  { q: 'Qual a política de cancelamento?',               a: 'Cancelamentos com até 15 dias de antecedência têm reembolso integral. Dentro desse prazo, o valor é revertido em crédito para próximos eventos.' },
];

// ----------------------------------------------------------
// RENDER — BENEFÍCIOS
// ----------------------------------------------------------
function renderBenefits() {
  const grid = document.getElementById('benefits-grid');
  if (!grid) return;
  grid.innerHTML = BENEFITS.map((b, i) => `
    <div class="benefit-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="benefit-icon">${b.icon}</div>
      <div class="benefit-title">${b.title}</div>
      <div class="benefit-desc">${b.desc}</div>
    </div>
  `).join('');
}

// ----------------------------------------------------------
// RENDER — PALESTRANTES
// ----------------------------------------------------------
function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  if (!grid) return;
  grid.innerHTML = SPEAKERS.map((s, i) => `
    <div class="speaker-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="speaker-avatar">${s.initials}</div>
      <div class="speaker-name">${s.name}</div>
      <div class="speaker-co">${s.company}</div>
      <div class="speaker-city">📍 ${s.city}</div>
      <div class="speaker-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ----------------------------------------------------------
// RENDER — PÚBLICO-ALVO
// ----------------------------------------------------------
function renderAudience() {
  const grid = document.getElementById('audience-grid');
  if (!grid) return;
  grid.innerHTML = AUDIENCE.map((a, i) => `
    <div class="audience-item reveal" style="transition-delay:${i * 0.07}s">
      <div class="audience-check">✓</div>
      <span class="audience-label">${a}</span>
    </div>
  `).join('');
}

// ----------------------------------------------------------
// RENDER — FAQ
// ----------------------------------------------------------
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item reveal" style="transition-delay:${i * 0.07}s">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        ${f.q}
        <span class="faq-icon" id="faq-icon-${i}">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const answer = document.getElementById('faq-answer-' + i);
  const icon   = document.getElementById('faq-icon-' + i);
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    icon.classList.add('open');
  }
}

// ----------------------------------------------------------
// COUNTDOWN
// ----------------------------------------------------------
function startCountdown() {
  const target = new Date('2026-05-30T09:00:00').getTime();

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(function(u) {
        var el = document.getElementById('cd-' + u);
        if (el) el.textContent = '00';
      });
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    var elD = document.getElementById('cd-days');
    var elH = document.getElementById('cd-hours');
    var elM = document.getElementById('cd-minutes');
    var elS = document.getElementById('cd-seconds');

    if (elD) elD.textContent = String(d).padStart(2, '0');
    if (elH) elH.textContent = String(h).padStart(2, '0');
    if (elM) elM.textContent = String(m).padStart(2, '0');
    if (elS) elS.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function animateSpots() {
  var fill = document.getElementById('spots-fill');
  var label = document.querySelector('.spots-label');
  if (!fill) return;

  fetch('https://https://agilizza-chat-backend-agilizza-evento-backend.xoduag.easypanel.host//api/vagas')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var vendas = data.garantidas; // Removido o "78 +" para refletir apenas o BD real
      var total = data.total || 120;
      var restantes = total - vendas;

      if (restantes < 0) restantes = 0; 
      
      var porcentagem = (vendas / total) * 100;

      if (label) {
        label.innerHTML = '<span><strong>' + vendas + ' vagas</strong> já garantidas</span>' +
                          '<span style="color:var(--pink-light)">' + restantes + ' restantes</span>';
      }

      // Anima a barra
      setTimeout(function() { fill.style.width = porcentagem + '%'; }, 400);
    })
    .catch(function(err) {
      console.error('Erro ao buscar vagas do servidor:', err);
      // Se der erro de rede, mantemos a barra no padrão visual
      setTimeout(function() { fill.style.width = '65%'; }, 400);
    });
}
function initReveal() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

// ----------------------------------------------------------
// HELPERS DE NAVEGAÇÃO
// ----------------------------------------------------------
function scrollToForm() {
  var el = document.getElementById('inscricao');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function selectTicket(type) {
  selectTicketRadio(type);
  scrollToForm();
}

// ----------------------------------------------------------
// SELEÇÃO DE INGRESSO NO FORMULÁRIO
// ----------------------------------------------------------
function selectTicketRadio(type) {
  ['geral', 'parceiro'].forEach(function(t) {
    var radio = document.getElementById('radio-' + t);
    var dot   = document.getElementById('dot-' + t);
    if (radio) radio.classList.toggle('selected', t === type);
    if (dot)   dot.classList.toggle('active', t === type);
  });
  var input = document.getElementById('selected-ticket');
  if (input) input.value = type;
  var warning = document.getElementById('partner-warning');
  if (warning) warning.style.display = type === 'parceiro' ? 'block' : 'none';
}

// ----------------------------------------------------------
// CAMPO CÓDIGO PARCEIRO
// ----------------------------------------------------------
function togglePartnerField() {
  var wrap    = document.getElementById('partner-code-wrap');
  var checked = document.getElementById('is-partner').checked;
  if (wrap) wrap.style.display = checked ? 'block' : 'none';
}

// ----------------------------------------------------------
// INICIALIZAÇÃO GERAL + SUBMIT DO FORMULÁRIO
// (um único DOMContentLoaded agrupa tudo)
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {

  // ---- Renderiza seções dinâmicas ----
  renderBenefits();
  renderSpeakers();
  renderAudience();
  renderFAQ();
  startCountdown();
  animateSpots();
  setTimeout(initReveal, 150);

  // Estado inicial: ingresso parceiro selecionado
  selectTicketRadio('parceiro');

  // ---- Formulário de compra ----
  var form = document.getElementById('purchase-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var btn     = document.getElementById('submit-btn');
    var errorEl = document.getElementById('form-error');
    errorEl.style.display = 'none';

    // Coleta dados
    var name        = document.getElementById('f-name').value.trim();
    var whatsapp    = document.getElementById('f-whatsapp').value.trim();
    var email       = document.getElementById('f-email').value.trim();
    var company     = document.getElementById('f-company').value.trim();
    var city        = document.getElementById('f-city').value.trim();
    var ticket      = document.getElementById('selected-ticket').value;
    var isPartner   = document.getElementById('is-partner').checked;
    var codeEl      = document.getElementById('f-code');
    var partnerCode = codeEl ? codeEl.value.trim() : '';

    // Validação básica
    if (!name || !whatsapp || !email || !company || !city) {
      errorEl.textContent   = 'Por favor, preencha todos os campos obrigatórios.';
      errorEl.style.display = 'block';
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      errorEl.textContent   = 'E-mail inválido.';
      errorEl.style.display = 'block';
      return;
    }

    btn.disabled    = true;
    btn.textContent = '⏳ Processando...';

    // POST para a VPS (server.js) — credenciais ficam apenas no .env da VPS
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        whatsapp: whatsapp,
        email: email,
        company: company,
        city: city,
        ticket: ticket,
        isPartner: isPartner,
        partnerCode: partnerCode
      })
    })
    .then(function(res) {
      return res.json().then(function(data) {
        if (!res.ok) throw new Error(data.message || 'Erro ao processar inscrição.');
        return data;
      });
    })
    .then(function(data) {
      // Redireciona para link de pagamento Asaas
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }
      // Fallback: tela de sucesso
      document.getElementById('form-area').style.display   = 'none';
      document.getElementById('success-area').style.display = 'block';
    })
    .catch(function(err) {
      errorEl.textContent   = err.message || 'Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.';
      errorEl.style.display = 'block';
      btn.disabled    = false;
      btn.textContent = '🎟️ Confirmar Inscrição';
    });

  }); // fim form.addEventListener

}); // fim DOMContentLoaded