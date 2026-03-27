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
    
    // AI & ML logic
    if (goal === 'build' || (bg === 'tech' && exp === 'adv') || (exp === 'adv' && goal !== 'automate')) {
        return 'AIML';
    }
    
    // DA & AI logic
    if (goal === 'automate' || bg === 'business' || exp === 'none') {
        if (goal === 'predict' && bg !== 'business') return 'DSAI';
        return 'DA';
    }
    
    // DS & AI logic (Default for analytical profiles)
    return 'DSAI';
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
                        <h3>Quero construir Sistemas de IA</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Treinar modelos, criar AI Agents e colocar inteligência artificial em produção.</p>
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
            document.body.className = \`theme-\${match.toLowerCase()}\`;
            
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
            } else if (match === 'AIML') {
                wrapper.innerHTML = `
                    <div class="reveal-state theme-aiml">
                        <span class="badge">MBA AI & Machine Learning</span>
                        <h1 class="reveal-h1">Seu match ideal: <br><span class="highlight">O Engenheiro de IA.</span></h1>
                        <p class="subtitle" style="text-align: left; max-width: 800px;">Para quem quer construir os sistemas de IA — não apenas usá-los. Você aprenderá a construir LLMs, implementar AI Agents (LangGraph/CrewAI) e levar sistemas avançados para produção.</p>
                        
                        <ul class="feature-list">
                            <li><span class="emoji">🤖</span> <div><strong>Engenharia End-to-End</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Treinamento intensivo de 10 meses em MLOps e Agents.</span></div></li>
                            <li><span class="emoji">💻</span> <div><strong>20 Projetos Reais</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Sistemas RAG, chatbots e pipelines MLOps escaláveis.</span></div></li>
                            <li><span class="emoji">🌍</span> <div><strong>Perfil Global & Certificações AWS</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Aprovado pelo MEC e com até 2 AWS ML selos no currículo.</span></div></li>
                            <li><span class="emoji">🎯</span> <div><strong>Garantia de Emprego (+ R$27.1k Sênior)</strong><br><span style="color: var(--text-secondary); font-size: 0.9rem;">Mercado internacional buscando o que você aprenderá conosco.</span></div></li>
                        </ul>
                        
                        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                            <button class="btn-submit" style="width: auto;" onclick="alert('Enviando syllabus AIML')">Receber Syllabus no WhatsApp</button>
                            <button class="btn-submit" style="width: auto; background: transparent; border: 1px solid var(--glass-border); color: white;" onclick="alert('Agendando AIML')">Consultoria Grátis</button>
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
