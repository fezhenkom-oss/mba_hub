// State Management
const state = {
    view: 'HOOK', // HOOK, QUIZ, GATE, REVEAL
    questions: [
        {
            id: 'bg',
            text: 'Qual o seu background profissional atual?',
            options: [
                { id: 'tech', label: 'Já trabalho com desenvolvimento ou engenharia de software' },
                { id: 'data', label: 'Trabalho com dados ou análise técnica' },
                { id: 'business', label: 'Sou de negócios/operações (Marketing, Finanças, RH, etc)' }
            ]
        },
        {
            id: 'goal',
            text: 'Qual é o seu principal objetivo com a IA?',
            options: [
                { id: 'automate', label: 'Automatizar processos e tomar decisões estratégicas' },
                { id: 'build', label: 'Construir sistemas do zero (LLMs, Agents, MLOps)' },
                { id: 'predict', label: 'Criar modelos preditivos e análises profundas' }
            ]
        },
        {
            id: 'exp',
            text: 'Você tem experiência com programação?',
            options: [
                { id: 'none', label: 'Nenhuma, nunca escrevi código' },
                { id: 'basic', label: 'Básica, consigo rodar scripts ou faço consultas SQL' },
                { id: 'adv', label: 'Avançada, programo regularmente no meu trabalho' }
            ]
        }
    ],
    currentQuestionIndex: 0,
    answers: {}
};

// DOM Elements
const appContainer = document.getElementById('app-container');

// Core Engine
function initializeApp() {
    renderView();
}

function calculateMatch() {
    const { bg, goal, exp } = state.answers;
    
    // Applied AI: non-technical professionals using AI in their current role (no-code track)
    // Sales playbook: "NÃO quer programar + mesmo cargo = MBA Applied AI"
    if (bg === 'business' || exp === 'none') {
        return 'APPAI';
    }
    
    // DS & AI: technical builders who want to build models and ML systems
    // Sales playbook: "QUER PROGRAMAR + ML/modelos = MBA DS&AI"
    if (goal === 'build' || (bg === 'tech' && exp === 'adv') || (goal === 'predict' && bg === 'tech')) {
        return 'DSAI';
    }
    
    // DA & AI: analytical profiles, career switchers into data roles, BI/dashboard focus
    // Sales playbook: "QUER MUDAR + analytics/dashboards/automação = MBA DA&AI"
    return 'DA';
}

function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
}

// Views
function renderView() {
    appContainer.innerHTML = ''; // Clear DOM
    const wrapper = document.createElement('div');
    wrapper.className = 'view-state';

    switch (state.view) {
        case 'HOOK':
            wrapper.innerHTML = `
                <span class="badge" style="border: 1px solid var(--glass-border); margin-bottom: 2rem;">TripleTen MBA Hub</span>
                <h1>Três MBAs em IA e Dados. Um para cada objetivo de carreira.</h1>
                <p class="subtitle">Descubra qual deles foi feito para onde você quer chegar. Formações práticas com <strong>Diploma MEC</strong> e <strong>Garantia de Emprego</strong>.</p>
                <div class="cards-grid">
                    <div class="intent-card" onclick="handleIntentClick('business')">
                        <span class="emoji">📊</span>
                        <h3>Quero usar IA para negócios</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Automatizar processos, painéis executivos e alavancar resultados (Não precisa programar).</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('engineer')">
                        <span class="emoji">🤖</span>
                        <h3>Quero construir e programar IA</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Treinar modelos, criar sistemas de ML e colocar soluções de IA em produção com código.</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('science')">
                        <span class="emoji">🔬</span>
                        <h3>Quero ser Cientista de Dados</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Usar estatística e machine learning para prever o futuro em grandes bases de dados.</p>
                    </div>
                </div>
            `;
            break;
            
        case 'QUIZ':
            const q = state.questions[state.currentQuestionIndex];
            const progressPct = (state.currentQuestionIndex / state.questions.length) * 100;
            
            let optionsHtml = '';
            q.options.forEach(opt => {
                optionsHtml += `<button class="answer-btn" onclick="handleAnswer('${q.id}', '${opt.id}')">${opt.label}</button>`;
            });

            wrapper.innerHTML = `
                <div class="quiz-container">
                    <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">Mapeando sua trilha (${state.currentQuestionIndex + 1}/${state.questions.length})...</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPct}%"></div>
                    </div>
                    <h2 class="question-text">${q.text}</h2>
                    <div class="answers-grid">
                        ${optionsHtml}
                    </div>
                </div>
            `;
            break;
            
        case 'GATE':
            wrapper.innerHTML = `
                <div class="quiz-container" style="text-align: center;">
                    <span class="emoji" style="font-size: 3rem; display: block; margin-bottom: 1rem;">✅</span>
                    <h2 class="question-text">Análise concluída.</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Encontramos o MBA perfeito para o seu objetivo. Insira seus dados para receber o <strong>Syllabus Completo</strong> e liberar o resultado na tela.</p>
                    
                    <form id="lead-form" onsubmit="handleGateSubmit(event)">
                        <div class="form-group">
                            <label>Seu Nome</label>
                            <input type="text" id="fname" required placeholder="Nome completo">
                        </div>
                        <div class="form-group">
                            <label>Seu WhatsApp</label>
                            <input type="tel" id="fphone" required placeholder="(11) 99999-9999">
                        </div>
                        <div class="form-group">
                            <label>Seu E-mail principal</label>
                            <input type="email" id="femail" required placeholder="seu@email.com">
                        </div>
                        <button type="submit" class="btn-submit">Revelar Meu MBA</button>
                    </form>
                    <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 1rem;">Sem spam. Apenas conteúdo de carreira que transforma.</p>
                </div>
            `;
            break;
            
        case 'REVEAL':
            const match = calculateMatch();
            
            // Re-render ambient background
            const themeMap = { 'DA': 'theme-da', 'DSAI': 'theme-dsai', 'APPAI': 'theme-appai' };
            document.body.className = themeMap[match] || 'theme-da';
            
            if (match === 'DA') {
                wrapper.innerHTML = `
                    <div class="reveal-state theme-da">
                        <span class="badge">MBA Data Analytics & AI</span>
                        <h1 class="reveal-h1">Seu match ideal: <br><span class="highlight">O Executor de Negócios.</span></h1>
                        <p class="subtitle" style="text-align: left; max-width: 800px;">Toda empresa hoje precisa de profissionais que transformem dados em decisões e IA em eficiência operacional. Pessoas que sabem o que perguntar para os dados — e como automatizar o que a resposta pede. Sem precisar virar programador.</p>
                        
                        <ul class="feature-list">
                            <li><span class="emoji">📊</span> <div><strong>Foco em Aplicação Prática</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Analytics aplicada e automação com IA em 9 meses.</span></div></li>
                            <li><span class="emoji">💻</span> <div><strong>18 Projetos Reais</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Crie desde Dashboards Executivos a automações com RPA.</span></div></li>
                            <li><span class="emoji">🏛</span> <div><strong>Diploma Reconhecido pelo MEC</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Validando seu salto de senioridade no mercado.</span></div></li>
                            <li><span class="emoji">🎯</span> <div><strong>Garantia de Emprego (+ R$18.1k Sênior)</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Se não for contratado em 6 meses, devolvemos 100%.</span></div></li>
                        </ul>
                        
                        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                            <button class="btn-submit" style="width: auto;" onclick="alert('Enviando syllabus DA')">Receber Syllabus no WhatsApp</button>
                            <button class="btn-submit" style="width: auto; background: transparent; border: 1px solid var(--glass-border); color: white;" onclick="alert('Agendando DA')">Consultoria Grátis</button>
                        </div>
                    </div>
                `;
            } else if (match === 'APPAI') {
                wrapper.innerHTML = `
                    <div class="reveal-state theme-appai">
                        <span class="badge">MBA Inteligência Artificial Aplicada</span>
                        <h1 class="reveal-h1">Seu match ideal: <br><span class="highlight">O Profissional Potencializado.</span></h1>
                        <p class="subtitle" style="text-align: left; max-width: 800px;">IA não é só para quem programa. É para quem quer produzir mais, decidir melhor e se tornar a referência em IA na sua organização — sem abandonar a carreira que você já tem. Em 10 meses, 8 horas por semana, 100% sem código.</p>
                        
                        <ul class="feature-list">
                            <li><span class="emoji">⚡</span> <div><strong>100% Sem Código</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Do Sprint 1 ao projeto final — feito para profissionais de negócio, sem pré-requisito técnico.</span></div></li>
                            <li><span class="emoji">🤖</span> <div><strong>Construa AI Agents Reais</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Automatize processos e crie agentes com Make, n8n e plataformas no-code. 11 projetos no portfólio.</span></div></li>
                            <li><span class="emoji">🏛</span> <div><strong>Diploma MEC + Certificações ASU & AWS</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Diploma reconhecido + Arizona State University + AWS GenAI Foundations no currículo.</span></div></li>
                            <li><span class="emoji">📈</span> <div><strong>Prêmio Salarial de 56% em IA</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Profissionais com skills de IA ganham 56% a mais — PwC AI Jobs Barometer 2025. Você vai usar isso na semana que vem.</span></div></li>
                        </ul>
                        
                        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                            <button class="btn-submit" style="width: auto;" onclick="alert('Enviando syllabus Applied AI')">Receber Syllabus no WhatsApp</button>
                            <button class="btn-submit" style="width: auto; background: transparent; border: 1px solid var(--glass-border); color: white;" onclick="alert('Agendando Applied AI')">Consultoria Grátis</button>
                        </div>
                    </div>
                `;
            } else if (match === 'DSAI') {
                wrapper.innerHTML = `
                    <div class="reveal-state theme-dsai">
                        <span class="badge">MBA Data Science & IA</span>
                        <h1 class="reveal-h1">Seu match ideal: <br><span class="highlight">O Arquiteto Técnico.</span></h1>
                        <p class="subtitle" style="text-align: left; max-width: 800px;">Ciência de Dados com profundidade estruturada. Entre no mundo preditivo criando modelos estatísticos sofisticados de Deep Learning, Algoritmos Avançados, NLP e Sistemas de Recomendação.</p>
                        
                        <ul class="feature-list">
                            <li><span class="emoji">🔬</span> <div><strong>Data Science Sem Atalhos</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Formação intensiva em Machine Learning Clássico em 10 meses.</span></div></li>
                            <li><span class="emoji">💻</span> <div><strong>22 Projetos Reais</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Prova cabal da sua experiência, do zero a projetos Enterprise.</span></div></li>
                            <li><span class="emoji">🏛</span> <div><strong>Diploma Reconhecido pelo MEC</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">E chancela da TripleTen (Nebius), empresa de tecnologia padrão global.</span></div></li>
                            <li><span class="emoji">🎯</span> <div><strong>Garantia de Emprego (+ R$23k Sênior)</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Vá confiante para o mercado. Se não for contratado(a), 100% de volta.</span></div></li>
                        </ul>
                        
                        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                            <button class="btn-submit" style="width: auto;" onclick="alert('Enviando syllabus DSAI')">Receber Syllabus no WhatsApp</button>
                            <button class="btn-submit" style="width: auto; background: transparent; border: 1px solid var(--glass-border); color: white;" onclick="alert('Agendando DSAI')">Consultoria Grátis</button>
                        </div>
                    </div>
                `;
            }
            break;
    }
    
    appContainer.appendChild(wrapper);
}

// Handlers
window.handleIntentClick = function(intent) {
    state.view = 'QUIZ';
    state.currentQuestionIndex = 0;
    renderView();
};

window.handleAnswer = function(questionId, answerId) {
    state.answers[questionId] = answerId;
    
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

// Start
document.addEventListener('DOMContentLoaded', initializeApp);
