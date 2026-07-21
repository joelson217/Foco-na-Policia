// Service Worker — Concursos-Policiais
// Versão: atualizada automaticamente a cada deploy

const CACHE_NAME = 'concursos-policiais-v' + Date.now();

const ASSETS_TO_CACHE = [
  '/Concursos-Policiais/',
  '/Concursos-Policiais/index.html',
  '/Concursos-Policiais/css/styles.css',
  '/Concursos-Policiais/js/app.js',
  '/Concursos-Policiais/data/add_questions.js',
  '/Concursos-Policiais/data/edital.js',
  '/Concursos-Policiais/data/lei_seca.js',
  '/Concursos-Policiais/data/lei_seca_extra.js',
  '/Concursos-Policiais/data/questions_administrativo.js',
  '/Concursos-Policiais/data/questions_constitucional.js',
  '/Concursos-Policiais/data/questions_dh.js',
  '/Concursos-Policiais/data/questions_etica.js',
  '/Concursos-Policiais/data/questions_extra_legislacao.js',
  '/Concursos-Policiais/data/questions_extra_lep.js',
  '/Concursos-Policiais/data/questions_historia.js',
  '/Concursos-Policiais/data/questions_legislacao.js',
  '/Concursos-Policiais/data/questions_lep.js',
  '/Concursos-Policiais/data/questions_penal.js',
  '/Concursos-Policiais/data/questions_portugues.js',
  '/Concursos-Policiais/icon-512.png',
  '/Concursos-Policiais/manifest.json'
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
