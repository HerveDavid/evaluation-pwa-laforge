'use client'


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
  installButton.addEventListener('click', async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt.');
    } else if (outcome === 'dismissed') {
      console.log('User dismissed the install prompt');
    }
  });

  // Détection du lancement de la pwa par un utilisateur
  window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone';
    }
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);

    // Détection d'un changement de navigateur
    window.matchMedia('(display-mode: standalone)')
      .addListener(event => {
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
    </>
  )
}