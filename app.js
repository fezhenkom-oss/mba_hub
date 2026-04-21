// State
const state = {
    view: 'HOOK',
    questions: [
        {
            id: 'bg',
            text: 'Qual o seu background profissional atual?',
            options: [
                { id: 'tech', label: 'Já programo ou atuo na área técnica' },
                { id: 'data', label: 'Analiso dados ou trabalho com ferramentas de BI' },
                { id: 'business', label: 'Sou de negócios (Vendas, Marketing, Logística, RH)' }
            ]
        },
        {
            id: 'goal',
            text: 'Como a IA vai te levar a mais estabilidade e impacto?',
            options: [
                { id: 'automate', label: 'Quero automatizar tarefas chatas e ganhar mais tempo livre' },
                { id: 'build', label: 'Quero construir produtos de IA e ser referência técnica' },
                { id: 'predict', label: 'Quero usar dados para antecipar o mercado e liderar decisões' }
            ]
        },
        {
            id: 'exp',
            text: 'O quão confortável você é com código?',
            options: [
                { id: 'none', label: 'Zero. Nunca programei — e tá tudo bem!' },
                { id: 'basic', label: 'Arranho um pouco de SQL ou scripts básicos' },
                { id: 'adv', label: 'Sou nível avançado, escrevo código com facilidade' }
            ]
        }
    ],
    currentQuestionIndex: 0,
    answers: {}
};

// Product Data
var PRODUCT_DATA = {
    APPAI: {
        badge: 'MBA Inteligência Artificial Aplicada',
        theme: 'theme-appai',
        persona: 'Potencialize sua carreira atual.',
        subtitle: 'Sabemos que a rotina pesa e o mercado muda rápido. Você não precisa aprender a programar para ter as skills mais valorizadas. A IA trabalha para você — sem código, sem estresse.',
        stats: [
            { value: '10 meses', label: 'Flexível — meio período' },
            { value: '100% Sem Código', label: 'Para iniciantes' },
            { value: '4.8/5 Estrelas', label: 'CourseReport · TrustPilot' }
        ],
        features: [
            { emoji: '⚡', title: 'O jeito de trabalhar mudou', desc: 'Esqueça o medo da IA substituir pessoas. Aprenda a usar IA para fazer o trabalho chato por você e ganhe tempo de volta.' },
            { emoji: '🤖', title: 'Agentes virtuais sem código', desc: 'Crie assistentes que preenchem relatórios, leem e-mails e organizam projetos num piscar de olhos com Make, n8n e Zapier.' },
            { emoji: '🤝', title: 'Nós pegamos na sua mão', desc: '80% dos nossos alunos nunca trabalharam com tecnologia antes. Mentoria focada, coaches que se importam com você.' },
            { emoji: '🎓', title: 'Certificação de peso', desc: 'Diploma MEC + Arizona State University + AWS GenAI Foundations. Triple credencial no currículo.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Especialista em Automação (IA)', salary: 'R$ 4.800 – 7.500' },
            { level: 'Pleno', role: 'Analista de Negócios (IA)', salary: 'R$ 8.000 – 14.000' },
            { level: 'Sênior', role: 'AI Champion / Innovation Manager', salary: 'R$ 15.000 – 28.000+' }
        ],
        marketStats: [
            { value: '56%', label: 'prêmio salarial para quem domina IA — PwC 2025' },
            { value: '80%', label: 'dos nossos alunos vêm de áreas não técnicas' }
        ],
        modules: [
            {
                number: 'Módulo 1 · Sprints 1–4',
                title: 'Trabalhando COM a IA (Zero Código)',
                desc: 'Domine ChatGPT, Claude e Gemini. Engenharia de prompts, análise de dados com IA e mapeamento de oportunidades — sem programar.',
                build: '✨ Mapa de oportunidades de IA para a sua empresa'
            },
            {
                number: 'Módulo 2 · Sprints 5–8',
                title: 'Chega de tarefas repetitivas',
                desc: 'Integre sistemas sem código. Planilhas, WhatsApp, CRM — tudo conectado com Make, n8n e Zapier. Automatize enquanto toma café.',
                build: '🤖 Seus primeiros agentes autônomos em funcionamento'
            },
            {
                number: 'Módulo 3 · Sprints 9–12 + ASU + AWS',
                title: 'Torne-se o AI Champion da sua empresa',
                desc: 'Governança de IA (LGPD), liderança de adoção, policy de uso interno. Defesa de projeto para banca + certificados internacionais.',
                build: '🎯 Plano diretor de IA + Certificados ASU e AWS'
            }
        ],
        trustItems: ['MEC nota 5', 'Arizona State University', 'AWS GenAI Foundations', 'Nebius · Nasdaq'],
        hasGuarantee: false,
        guaranteeText: 'Profissionais com skills de IA ganham 56% a mais. Você vai usar o que aprender na semana que vem — PwC AI Jobs Barometer 2025.'
    },
    DA: {
        badge: 'MBA Data Analytics & AI',
        theme: 'theme-da',
        persona: 'O mundo é feito de dados.',
        subtitle: 'Você quer um trabalho mais estratégico e menos mecânico. Não é fácil mudar de carreira — mas os dados trazem a maior estabilidade do mercado. Estaremos do seu lado, do primeiro sprint à sua contratação.',
        stats: [
            { value: '9 meses', label: 'Flexível e dinâmico' },
            { value: '18 projetos', label: 'Portfólio real (Walmart, MercadoLivre)' },
            { value: '4.8/5 Estrelas', label: 'CourseReport · TrustPilot' }
        ],
        features: [
            { emoji: '📊', title: 'Mais do que dashboards', desc: 'Analytics + IA + automação com RPA. Você não será só o "fazedor de gráficos" — você vai liderar as decisões de negócio.' },
            { emoji: '💼', title: '18 projetos com marcas reais', desc: 'Walmart, MercadoLivre, RappiPlus no portfólio. Prova de execução que convence recrutadores e abre portas.' },
            { emoji: '🎯', title: 'Suporte de carreira dedicado', desc: 'Coaches focados em mudar sua mentalidade e te preparar para arrebentar nas entrevistas. Mais de 300 vagas novas por dia no nosso job board.' },
            { emoji: '💸', title: 'Reembolso total em 14 dias', desc: 'Não tem letra miúda. Se nos primeiros 14 dias você sentir que não é para você, devolvemos 100%. Totalmente focado no que é melhor para você.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Analista de BI / Dados', salary: 'R$ 7.300' },
            { level: 'Pleno', role: 'Analista de BI / Dados Pleno', salary: 'R$ 10.250' },
            { level: 'Sênior', role: 'Especialista em BI / IA', salary: 'R$ 18.100' }
        ],
        marketStats: [
            { value: '80%', label: 'dos nossos formandos vêm de fora da área técnica' },
            { value: '56%', label: 'de aumento salarial esperado com IA — PwC 2025' }
        ],
        modules: [
            {
                number: 'Módulo 1 · Sprints 1–6',
                title: 'Analytics Foundations',
                desc: 'Começa com IA e prompt engineering — do zero, sem código. Avança para SQL, Python, KPIs, funil de conversão e cohort. Dados reais do MercadoLivre e Walmart.',
                build: '🛒 Análise de retenção MercadoLivre + Relatório executivo Walmart'
            },
            {
                number: 'Módulo 2 · Sprints 7–13',
                title: 'Profundidade analítica',
                desc: 'Python com Pandas, estatística aplicada, testes de hipótese. Power BI e Tableau — dashboards que convencem diretores. Projeto integrador completo.',
                build: '📊 Dashboard comercial Power BI + Diagnóstico estratégico RappiPlus'
            },
            {
                number: 'Módulo 3 · Sprints 14–18 + ASU + AWS',
                title: 'Automação com IA + Projeto Final',
                desc: 'AI agents autônomos, Webhooks, APIs e RPA com UiPath. As skills que nenhum outro MBA de analytics ensina. Encerra com módulos ASU e AWS Academy.',
                build: '🦾 Bot RPA com UiPath + Solução de IA ponta a ponta'
            }
        ],
        trustItems: ['MEC nota 5', 'Arizona State University', 'AWS Academy', 'Nebius · Nasdaq'],
        hasGuarantee: true,
        guaranteeText: 'Se você cumprir os critérios de elegibilidade e não conseguir um emprego em tecnologia em até 10 meses após a graduação, reembolsamos 100% da mensalidade. Veja os Termos.'
    },
    DSAI: {
        badge: 'MBA Data Science & Inteligência Artificial',
        theme: 'theme-dsai',
        persona: 'Seja o arquiteto do futuro.',
        subtitle: 'Você já entende de tecnologia e quer dar um salto salarial construindo sistemas de IA. Machine Learning, NLP e LLMs — onde estão os maiores salários e os projetos mais gratificantes do mercado.',
        stats: [
            { value: '10 meses', label: 'Mentoria técnica intensiva' },
            { value: '19 projetos', label: 'Portfólio de ML no GitHub' },
            { value: 'AWS ML Cert.', label: 'Inclusa no MBA' }
        ],
        features: [
            { emoji: '🧠', title: 'ML real, do básico ao LLM', desc: 'Supervised, unsupervised, NLP, Computer Vision e LLMs com LangChain + OpenAI API. A jornada técnica completa — sem atalhos.' },
            { emoji: '🌎', title: 'Portfólio global no GitHub', desc: '19 projetos integrados do dataset ao deploy. O portfólio que recrutadores técnicos e tech leads pedem para ver nas entrevistas.' },
            { emoji: '🤝', title: 'Comunidade e empregabilidade', desc: 'Grupos de apoio, +300 vagas diárias no job board exclusivo e treinamento focado para passar em entrevistas técnicas.' },
            { emoji: '💻', title: 'Triple certificação', desc: 'MEC Faculdade Sirius + Arizona State University + AWS Machine Learning Foundations. O passaporte completo.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Data Scientist Júnior', salary: 'R$ 8.500 – 11.000' },
            { level: 'Pleno', role: 'Data Scientist / ML Engineer', salary: 'R$ 13.000 – 17.000' },
            { level: 'Sênior', role: 'Staff Data Scientist / ML Lead', salary: 'R$ 20.000 – 30.000' }
        ],
        marketStats: [
            { value: '4×', label: 'crescimento nas vagas de IA no Brasil de 2021 a 2024 — PwC 2025' },
            { value: '56%', label: 'prêmio salarial para profissionais com IA — PwC 2025' }
        ],
        modules: [
            {
                number: 'Módulo 1 · Sprints 1–7',
                title: 'Fundamentos técnicos sólidos',
                desc: 'Python do zero ao profissional, Pandas, SQL + Python, Git e GitHub desde o início, estatística aplicada e álgebra linear. A base que todo cientista de dados precisa.',
                build: '🐍 Pipeline de dados + análise estatística + projeto integrador'
            },
            {
                number: 'Módulo 2 · Sprints 8–13',
                title: 'Machine Learning core',
                desc: 'Primeiro modelo com Scikit-learn, supervised e unsupervised, feature engineering, gradient boosting, SHAP e LIME. Métricas de negócio e testes A/B reais.',
                build: '🤖 Modelos de classificação, regressão e clustering — portfólio no GitHub'
            },
            {
                number: 'Módulo 3 · Sprints 14–19 + ASU + AWS',
                title: 'Especializações + GenAI + Projeto Final',
                desc: 'Séries temporais, NLP, Computer Vision, LLMs com LangChain e OpenAI API + AWS Bedrock. Módulos internacionais ASU e AWS ML Foundations.',
                build: '🧠 Modelos NLP e CV + Aplicação LLM + Projeto final end-to-end'
            }
        ],
        trustItems: ['MEC nota 5', 'Arizona State University', 'AWS ML Foundations', 'Nebius · Nasdaq'],
        hasGuarantee: true,
        guaranteeText: 'Se você cumprir os critérios de elegibilidade e não conseguir um emprego em tecnologia em até 10 meses após a graduação, reembolsamos 100% da mensalidade. Veja os Termos.'
    }
};

// DOM
var appContainer = document.getElementById('app-container');

// Match Logic
function calculateMatch() {
    var bg = state.answers.bg;
    var goal = state.answers.goal;
    var exp = state.answers.exp;
    if (bg === 'business' || exp === 'none') return 'APPAI';
    if (goal === 'build' || (bg === 'tech' && exp === 'adv') || (goal === 'predict' && bg === 'tech')) return 'DSAI';
    return 'DA';
}

// Compliance text (plain string concat — no template literals)
function getComplianceText() {
    return '<div class="compliance-text">' +
        'I consent to marketing calls and text messages, including those made with an autodialed or artificial voice messages. ' +
        'Message and data rates may apply. Unsubscribe anytime per our Privacy Policy. Consent is not a condition of purchase.<br><br>' +
        "By clicking 'Continue', you agree to TripleTen's " +
        '<a href="https://docs.tripleten.com/legal/confidential.html" target="_blank">Privacy Policy</a> and ' +
        '<a href="https://docs.tripleten.com/legal/terms_of_use.html" target="_blank">Terms Of Use</a>.<br><br>' +
        '<a href="https://docs.tripleten.com/support/employment.html" target="_blank">Refund terms and Employment eligibility</a> based on Outcome highlights.' +
        '</div>';
}

// Reveal page builder
function renderRevealPage(match) {
    var p = PRODUCT_DATA[match];

    var statPills = p.stats.map(function(s) {
        return '<div class="stat-pill"><span class="stat-pill-value">' + s.value + '</span><span class="stat-pill-label">' + s.label + '</span></div>';
    }).join('');

    var featureCards = p.features.map(function(f) {
        return '<div class="feature-card"><span class="feature-emoji">' + f.emoji + '</span><div class="feature-text"><strong>' + f.title + '</strong><p>' + f.desc + '</p></div></div>';
    }).join('');

    var salaryRows = p.salaryRows.map(function(r) {
        return '<div class="salary-row"><div class="salary-level">' + r.level + '</div><div class="salary-role">' + r.role + '</div><div class="salary-value">' + r.salary + '</div></div>';
    }).join('');

    var mktStats = p.marketStats.map(function(s) {
        return '<div class="market-stat"><span class="market-stat-value">' + s.value + '</span><span class="market-stat-label">' + s.label + '</span></div>';
    }).join('');

    var moduleCards = p.modules.map(function(m) {
        return '<div class="module-card"><div class="module-number">' + m.number + '</div><h4 class="module-title">' + m.title + '</h4><p class="module-desc">' + m.desc + '</p><div class="module-build">' + m.build + '</div></div>';
    }).join('');

    var trustBadges = p.trustItems.map(function(t) {
        return '<span class="trust-badge">' + t + '</span>';
    }).join('');

    var guaranteeHtml = '<div class="guarantee-line"><span class="guarantee-icon">🛡️</span><div><strong>O nosso compromisso com você:</strong> ' + p.guaranteeText + '</div></div>';

    var html = '<div class="reveal-page ' + p.theme + '">';

    // HERO
    html += '<div class="reveal-hero">';
    html += '<span class="badge" style="border:1px solid #1A1A1A;background:transparent;color:#1A1A1A;">' + p.badge + '</span>';
    html += '<h1 class="reveal-h1">' + p.persona + '</h1>';
    html += '<p class="subtitle" style="max-width:700px;font-size:18px;">' + p.subtitle + '</p>';
    html += '<div class="stat-pills">' + statPills + '</div>';
    html += '</div>';

    // WHY THIS MBA
    html += '<div class="reveal-section">';
    html += '<h2 class="section-title">Por que essa mudança faz sentido</h2>';
    html += '<div class="features-grid">' + featureCards + '</div>';
    html += '</div>';

    // OUTCOMES
    html += '<div class="reveal-section">';
    html += '<h2 class="section-title">Resultados que trazem paz e estabilidade</h2>';
    html += '<p style="font-size:14px;color:#666;margin-bottom:16px;">Fonte: Robert Half Guia de Salários 2026 · Brasil</p>';
    html += '<div class="market-stats">' + mktStats + '</div>';
    html += '<div class="salary-table">' + salaryRows + '</div>';
    html += '</div>';

    // CURRICULUM
    html += '<div class="reveal-section">';
    html += '<h2 class="section-title">A sua jornada passo a passo</h2>';
    html += '<div class="modules-grid">' + moduleCards + '</div>';
    html += '</div>';

    // TRUST
    html += '<div class="reveal-section trust-section">';
    html += '<h2 class="section-title">Quem endossa a TripleTen</h2>';
    html += '<div class="trust-badges">' + trustBadges + '</div>';
    html += guaranteeHtml;
    html += '</div>';

    // CONTACT FORM
    html += '<div class="reveal-section contact-section">';
    html += '<h2 class="section-title">E aí, qual é o próximo passo?</h2>';
    html += '<p class="subtitle" style="margin-bottom:32px;">Nós temos uma equipe de consultores esperando para tirar todas as suas dúvidas reais, sem jogo de vendas difícil. É só bater um papo.</p>';
    html += '<form id="contact-form" onsubmit="handleContactSubmit(event, \'' + match + '\')">';
    html += '<div class="contact-grid">';
    html += '<div class="form-group"><label>Como gostaria de ser chamado?</label><input type="text" id="cname" required placeholder="Seu nome"></div>';
    html += '<div class="form-group"><label>Seu WhatsApp</label><input type="tel" id="cphone" required placeholder="(11) 90000-0000"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>E-mail oficial</label><input type="email" id="cemail" required placeholder="email@exemplo.com"></div>';
    html += '<div class="form-group"><label>Conta um pouco do seu momento <span style="font-weight:400;color:#666;">(Opcional)</span></label><textarea id="cmessage" placeholder="Quais são suas inseguranças hoje? Qual seu tempo livre para as aulas?" rows="3"></textarea></div>';
    html += '<button type="submit" class="btn-cta">Quero minha consultoria gratuita →</button>';
    html += '</form>';
    html += getComplianceText();
    html += '</div>';

    html += '</div>'; // end reveal-page
    return html;
}

// View Renderer
function renderView() {
    appContainer.innerHTML = '';
    appContainer.className = '';

    var wrapper = document.createElement('div');
    wrapper.className = 'view-state';

    if (state.view === 'HOOK') {
        wrapper.innerHTML =
            '<span class="badge">Sua Vida Tech. Do seu jeito.</span>' +
            '<h1>Sabemos que você quer mais da sua carreira. E nós vamos ajudar.</h1>' +
            '<p class="subtitle" style="margin-bottom:24px;">Construir o futuro não significa estresse. Com 20h/semana e mentoria que se importa com você, levamos você lá.</p>' +
            '<div class="rating-pill"><span class="stars">★★★★★</span> 4.8/5 (2.500+ estudantes e graduados)</div>' +
            '<div class="cards-grid">' +
            '<div class="intent-card" onclick="handleIntentClick(\'business\')"><span class="emoji">🌱</span><h3>Eu quero mais tempo</h3><p>Aprender IA para o dia a dia e fugir de funções repetitivas, sem programar.</p></div>' +
            '<div class="intent-card" onclick="handleIntentClick(\'analyst\')"><span class="emoji">📈</span><h3>Eu quero visão de futuro</h3><p>Descobrir o que os dados querem dizer e ajudar empresas a decidirem melhor.</p></div>' +
            '<div class="intent-card" onclick="handleIntentClick(\'builder\')"><span class="emoji">🏗️</span><h3>Eu quero construir sistemas</h3><p>Sujar as mãos de código, treinar modelos de Machine Learning e criar produtos.</p></div>' +
            '</div>';

    } else if (state.view === 'QUIZ') {
        var q = state.questions[state.currentQuestionIndex];
        var pct = (state.currentQuestionIndex / state.questions.length) * 100;
        var opts = q.options.map(function(o) {
            return '<button class="answer-btn" onclick="handleAnswer(\'' + q.id + '\', \'' + o.id + '\')">' + o.label + '</button>';
        }).join('');
        wrapper.innerHTML =
            '<div class="quiz-container">' +
            '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
            '<p style="color:#666;margin-bottom:12px;font-weight:500;font-size:14px;">Passo ' + (state.currentQuestionIndex + 1) + ' de ' + state.questions.length + '</p>' +
            '<h2 class="question-text">' + q.text + '</h2>' +
            '<div class="answers-grid">' + opts + '</div>' +
            '</div>';

    } else if (state.view === 'GATE') {
        wrapper.innerHTML =
            '<div class="quiz-container">' +
            '<span class="emoji" style="font-size:40px;display:block;margin-bottom:16px;">✨</span>' +
            '<h2 class="question-text">Uau! A gente amou o seu perfil.</h2>' +
            '<p style="color:#666;margin-bottom:32px;line-height:1.6;">Nós temos a jornada exata para o que você está buscando. Coloque seu contato e vamos te mostrar todo o plano personalizado.</p>' +
            '<form id="lead-form" onsubmit="handleGateSubmit(event)">' +
            '<div class="form-group"><label>Primeiro nome</label><input type="text" id="fname" required placeholder="Como podemos te chamar?"></div>' +
            '<div class="form-group"><label>WhatsApp</label><input type="tel" id="fphone" required placeholder="(11) 90000-0000"></div>' +
            '<div class="form-group"><label>E-mail</label><input type="email" id="femail" required placeholder="seu.email@exemplo.com"></div>' +
            '<button type="submit" class="btn-submit">Revelar meu MBA →</button>' +
            '</form>' +
            getComplianceText() +
            '</div>';

    } else if (state.view === 'REVEAL') {
        var match = calculateMatch();
        appContainer.classList.add('reveal-mode');
        document.body.className = PRODUCT_DATA[match].theme;
        wrapper.innerHTML = renderRevealPage(match);
    }

    appContainer.appendChild(wrapper);
}

// Handlers
window.handleIntentClick = function() {
    state.view = 'QUIZ';
    state.currentQuestionIndex = 0;
    renderView();
};

window.handleAnswer = function(qId, aId) {
    state.answers[qId] = aId;
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        renderView();
    } else {
        state.view = 'GATE';
        renderView();
    }
};

window.handleGateSubmit = function(e) {
    e.preventDefault();
    state.view = 'REVEAL';
    renderView();
};

window.handleContactSubmit = function(e, match) {
    e.preventDefault();
    var name = document.getElementById('cname').value;
    alert('Obrigada, ' + name + '! Nossa consultora entra em contato via WhatsApp em breve.');
};

// Init
document.addEventListener('DOMContentLoaded', function() { renderView(); });
