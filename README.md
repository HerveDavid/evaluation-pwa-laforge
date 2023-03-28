# evaluation-pwa-laforge

David Herve

## Questions sur Workbox
 
### 1) liste des fonctionnalités offertes

Workbox est un ensemble de librairies qui a pour but de faciliter l'utilisation du cache à travers des services workers.
La liste des fonctionnalités de workbox sont : 
- precache
- event driven Api
- running time
- isolation d'un service worker
- cdn

La liste des modules est sur le lien suivant :
https://developer.chrome.com/docs/workbox/modules/


### 2) Méthodes de cache et utilisations possibles

Les méthodes cache possible avec workbox sont :
- cache only: une utilisation de cache par défaut, le cache est déjà pré-configuré comme une page hors-ligne par défaut
- network only : une utilisation où seulement compte un usage en ligne, comme par exemple une page d'un utilisateur active avec ses ressources
- cache first : une utilisation où les fichiers du cache changent peu, comme les polices d'écritures
- network first : une utilisation où la dernière mise à jour compte mais dans un usage hors-ligne, comme pour les ressources d'un SSR (NextJs)
- stale while revalidate : une utilisation où la mise à jour ne compte pas mais dont son chargement doit être le plus court, comme un fichier css


### 3) uses cases à intégrer dans le projet doctoliberal

Dans le projet doctoliberal les cas d'usages à intégrer sont :
- network first pour obtenir la dernière mise à jour des disponibilités d'un patient
- cache only pour garder un cache par défaut et pré-configuré
- stale while revalidate pour obtenir les coordonnées d'un médecin rapidement
 
## Page d'incitation à l'installation de PWA
 
### 1 ) Créer un composant (React / Vue / angular / HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA

- navigateur nécessaire
- compatibilité du device
- capacités supplémentaires, etc...

#### 2 ) Expliquer en quoi il serait interessant de mettre en place une telle page

Les utilisateurs utilisent des smartphones et des navigateurs diffèrents. 
La pluralité des devices nécessite donc de guider le mieux possible l'utilisateur afin de lui faire installer la pwa dans son smartphone.
Plus l'utilisateur reste sur l'application, plus l'application est rentable. 
De plus, les comptes utilisateurs tentent à être multi-plateformes, ce qui oblige donc à rediriger les utilisateurs pour dans meilleur installation et intégration dans leurs devices.