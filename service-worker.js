// Service Worker — Concursos-Policiais
// Versão: atualizada automaticamente a cada deploy

const CACHE_NAME = 'concursos-policiais-v3';

const ASSETS_TO_CACHE = [
  '/Foco-na-Policia/',
  '/Foco-na-Policia/index.html',
  '/Foco-na-Policia/css/styles.css',
  '/Foco-na-Policia/js/app.js',
  '/Foco-na-Policia/data/add_questions.js',
  '/Foco-na-Policia/data/edital.js',
  '/Foco-na-Policia/data/lei_seca.js',
  '/Foco-na-Policia/data/lei_seca_extra.js',
  '/Foco-na-Policia/data/lei_seca_premium.js',
  '/Foco-na-Policia/data/lei_seca_premium_2.js',
  '/Foco-na-Policia/data/lei_seca_premium_3.js',
  '/Foco-na-Policia/data/lei_seca_premium_4.js',
  '/Foco-na-Policia/data/lei_seca_premium_5.js',
  '/Foco-na-Policia/data/lei_seca_premium_6.js',
  '/Foco-na-Policia/data/lei_seca_premium_7.js',
  '/Foco-na-Policia/data/lei_seca_premium_8.js',
  '/Foco-na-Policia/data/lei_seca_premium_9.js',
  '/Foco-na-Policia/data/lei_seca_premium_10.js',
  '/Foco-na-Policia/data/lei_seca_premium_11.js',
  '/Foco-na-Policia/data/lei_seca_premium_12.js',
  '/Foco-na-Policia/data/lei_seca_premium_13.js',
  '/Foco-na-Policia/data/lei_seca_premium_14.js',
  '/Foco-na-Policia/data/lei_seca_premium_15.js',
  '/Foco-na-Policia/data/lei_seca_premium_16.js',
  '/Foco-na-Policia/data/lei_seca_premium_18.js',
  '/Foco-na-Policia/data/lei_seca_premium_19.js',
  '/Foco-na-Policia/data/lei_seca_premium_20.js',
  '/Foco-na-Policia/data/questions_administrativo.js',
  '/Foco-na-Policia/data/questions_constitucional.js',
  '/Foco-na-Policia/data/questions_dh.js',
  '/Foco-na-Policia/data/questions_etica.js',
  '/Foco-na-Policia/data/questions_extra_legislacao.js',
  '/Foco-na-Policia/data/questions_extra_lep.js',
  '/Foco-na-Policia/data/questions_historia.js',
  '/Foco-na-Policia/data/questions_legislacao.js',
  '/Foco-na-Policia/data/questions_lep.js',
  '/Foco-na-Policia/data/questions_penal.js',
  '/Foco-na-Policia/data/questions_portugues.js',
  '/Foco-na-Policia/data/questions_premium.js',
  '/Foco-na-Policia/data/questions_premium_2.js',
  '/Foco-na-Policia/data/questions_premium_3.js',
  '/Foco-na-Policia/data/questions_premium_4.js',
  '/Foco-na-Policia/data/questions_premium_5.js',
  '/Foco-na-Policia/data/questions_premium_6.js',
  '/Foco-na-Policia/data/questions_premium_7.js',
  '/Foco-na-Policia/data/questions_premium_8.js',
  '/Foco-na-Policia/data/questions_premium_9.js',
  '/Foco-na-Policia/data/questions_premium_10.js',
  '/Foco-na-Policia/data/questions_premium_11.js',
  '/Foco-na-Policia/data/questions_premium_12.js',
  '/Foco-na-Policia/data/questions_premium_13.js',
  '/Foco-na-Policia/data/questions_premium_14.js',
  '/Foco-na-Policia/data/questions_premium_15.js',
  '/Foco-na-Policia/data/questions_premium_16.js',
  '/Foco-na-Policia/FlashCards/1 - Lei Penal no Tempo.png',
  '/Foco-na-Policia/FlashCards/10 - Princípios do Direito Penal.png',
  '/Foco-na-Policia/FlashCards/11 - Direito Penal.png',
  '/Foco-na-Policia/FlashCards/12 - LEP (Direitos e Deveres).png',
  '/Foco-na-Policia/FlashCards/13 - LEP (Estabelecimentos Penais e Regimes).png',
  '/Foco-na-Policia/FlashCards/14 - Estatuto e Regime Penitênciário do RN.png',
  '/Foco-na-Policia/FlashCards/15 - Inquério Policial, Conceitos e Características.png',
  '/Foco-na-Policia/FlashCards/2 - Excludente de Ilicitude.png',
  '/Foco-na-Policia/FlashCards/3 - Dolo e Culpa.png',
  '/Foco-na-Policia/FlashCards/4 -Concurso de Crimes e de Pessoas.png',
  '/Foco-na-Policia/FlashCards/5 - Inputabilidade Penal e Erro de Tipo.png',
  '/Foco-na-Policia/FlashCards/6 - Lei Penal no Tempo 2.png',
  '/Foco-na-Policia/FlashCards/7 - Lei Penal no Espaço e Territorialidade.png',
  '/Foco-na-Policia/FlashCards/8 - Crime (Conceitos e Classificações).png',
  '/Foco-na-Policia/FlashCards/9 - O Crime (Inter Criminis e Condições).png',
  '/Foco-na-Policia/icon-512.png',
  '/Foco-na-Policia/manifest.json'
];

// Instala e faz cache de todos os assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      return self.skipWaiting(); // Ativa imediatamente sem esperar fechar o app
    })
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim(); // Controla todas as abas abertas imediatamente
    })
  );
});

// Estratégia: Network First (sempre tenta buscar versão nova, fallback para cache)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Se conseguiu da rede, atualiza o cache
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se não tem internet, usa o cache
        return caches.match(event.request);
      })
  );
});
