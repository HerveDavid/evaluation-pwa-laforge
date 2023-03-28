'use client'

function showInAppInstallPromotion() {
  console.log("Promote to install pwa!")
}

function hideInAppInstallPromotion() {
  console.log("Hide pwa install promotion")
}

export default function Browser() {
  
  // Variable pour la récupération utilisateur
  let deferredPrompt;

  // Promotion de l'installation d'une pwa
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInAppInstallPromotion();
  });
  
  // Récupération des données d'installation
  const installPwa = async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt.');
    } else if (outcome === 'dismissed') {
      console.log('User dismissed the install prompt');
    }
  }

  // Détection du lancement de la pwa par un utilisateur
  window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone';
    }
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);

    // Détection d'un changement de navigateur
    const standalone = window.matchMedia('(display-mode: standalone)')
    standalone.addEventListener(event => {
          if (event.matches) {
             // Depuis un navigateur vers un mobile
          } else {
             // Depuis un mobile vers un navigateur
          }
      });
  });
  
  // Vérification si la pwa est installée
  window.addEventListener('appinstalled', () => {

    hideInAppInstallPromotion();

    console.log('INSTALL: Success');
  });
  

  return (
    <>
      <h1>Comme une application mobile!</h1>
      <p>Vous pouvez utiliser ce site comme une application mobile, il vous suffit simplement de clicker sur le bouton en-dessous !</p>

      <button onclick={installPwa}>Installation d'une PWA</button>
    
      <h2>Si l'installation ne s'effectue pas suivre le lien "Navigateurs Compatibilités"</h2>
    
      <h1>Avantages</h1>
      <p>Le site installé en pwa est comme une application mobile, ceci offre l'avantage d'utiliser le site en hors-ligne,
    de profiter de la géolocalisation, des payements facilités (face-id) et de beaucoup d'autres fonctionnalités propre au mobile !</p>
    
      <h1>Navigateurs Compatibilités</h1>
      <p>Seulement les navigateurs Chrome et Safarie permettent cette usage du site en mobile (pwa)</p>
    
    </>
  )
}