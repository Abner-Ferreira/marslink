# 🚀 MarsLink

MarsLink é uma aplicação mobile desenvolvida em React Native + Expo para auxiliar a comunicação, monitoramento e gerenciamento de uma missão tripulada em Marte.

O projeto simula um ambiente operacional espacial onde astronautas podem acompanhar o status da missão, gerenciar tarefas, monitorar a saúde da tripulação, visualizar alertas e acionar protocolos de emergência, mesmo em cenários de comunicação com alta latência.

---

## 📖 Sobre o Projeto

A proposta do MarsLink é oferecer uma plataforma centralizada para suporte às operações de uma missão espacial em Marte.

A aplicação foi desenvolvida com foco em:

- Comunicação entre Marte e Terra
- Monitoramento da tripulação
- Gerenciamento de tarefas operacionais
- Registro de eventos da missão
- Protocolos de emergência
- Simulação de comunicação com latência espacial
- Operação offline com sincronização posterior

---

## ✨ Funcionalidades

### 🏠 Dashboard da Missão

- Status geral da missão
- Indicadores operacionais
- Telemetria da nave
- Timeline de eventos
- Última comunicação recebida
- Visão geral da operação

---

### 💬 Comunicação Marte ↔ Terra

- Histórico de mensagens
- Simulação de latência espacial
- Status de envio:
  - Em fila
  - Em trânsito
  - Recebida
  - Confirmada
- Busca de mensagens
- Operação offline
- Sincronização automática quando a conexão retorna

---

### ✅ Gerenciamento de Tarefas

- Lista de atividades da missão
- Filtros por prioridade
- Busca por tarefas
- Detalhamento das atividades
- Responsáveis
- Prazo de execução
- Status operacional

---

### ❤️ Monitoramento da Saúde

- Acompanhamento da tripulação
- Indicadores biomédicos
- Frequência cardíaca
- Oxigenação
- Temperatura corporal
- Pressão arterial
- Gráficos comparativos
- Detalhes individuais de cada astronauta

---

### 🔔 Central de Alertas

- Notificações da missão
- Eventos automáticos
- Alertas críticos
- Alertas do sistema
- Mensagens importantes
- Filtros inteligentes
- Controle de leitura

---

### 🚨 Central de Emergência

- Protocolos críticos
- Registro de incidentes
- Envio de alertas
- Histórico de acionamentos
- Simulação de comunicação com a Terra

---

### 📜 Log da Missão

- Histórico completo de eventos
- Registro operacional
- Timeline navegável
- Auditoria das ações realizadas

---

### 🗺️ Mapa Operacional

- Visualização da base marciana
- Áreas de exploração
- Estruturas da missão
- Pontos de interesse

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- React Native
- Expo
- TypeScript
- Expo Router

### Interface

- React Native StyleSheet
- Expo Linear Gradient
- Expo Vector Icons
- React Native Safe Area Context

### Arquitetura

- Componentização
- Estrutura modular
- Dados simulados
- Navegação por Tabs
- Estados locais

---

## 📁 Estrutura do Projeto

```bash
marslink/
│
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── messages.tsx
│   │   ├── tasks.tsx
│   │   ├── health.tsx
│   │   ├── notifications.tsx
│   │   ├── emergency.tsx
│   │   ├── logs.tsx
│   │   ├── map.tsx
│   │   └── more.tsx
│   │
│   └── _layout.tsx
│
├── components/
│
├── constants/
│   ├── theme.ts
│   └── mission-theme.ts
│
├── data/
│   ├── marslink.ts
│   └── mission-logs.ts
│
└── assets/
```

## 🎨 Identidade Visual

### Cores Principais

```css
Background: #020914
Primary: #F97316
Success: #22C55E
Warning: #EAB308
Danger: #EF4444
Card: #0F172A
White: #FFFFFF
```

### Conceito

O design foi inspirado em:

- Centros de comando espacial
- Sistemas de monitoramento da NASA
- Interfaces de missões tripuladas
- Dashboards operacionais críticos

---

## 📱 Como Executar

### Clonar o projeto

```bash
git clone https://github.com/abner-ferreira/marslink.git
```

### Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

### Executar

```bash
npx expo start
```

### Limpar cache

```bash
npx expo start -c
```

---

## 🎯 Objetivos do Projeto

O MarsLink foi desenvolvido para demonstrar conhecimentos em:

- React Native
- TypeScript
- Expo
- Arquitetura Mobile
- UX/UI
- Componentização
- Gestão de estado
- Navegação
- Simulação de sistemas críticos
- Desenvolvimento de aplicações escaláveis

---

## 🚀 Possíveis Evoluções Futuras

- Integração com Backend
- API REST
- Banco de Dados
- Autenticação
- Comunicação em tempo real
- Push Notifications
- Persistência Offline
- Sincronização Automática
- Dashboard Web Administrativo
- Inteligência Artificial para suporte à missão

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e educacionais.