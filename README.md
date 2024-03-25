# SprintSnap
## Présentation du Projet : Solution Simplifiée à la Jira

## Introduction
- **Nom du Projet** : SprintSnap

## Aperçu
- **Objectif** : SprintSnap est un outil de gestion de projet simplifié inspiré de Jira, visant à fournir une solution conviviale et économique pour les petites équipes.
- **Inspiration** : La complexité et le coût des solutions existantes telles que Jira nous ont amenés à créer une alternative plus simple axée sur les fonctionnalités essentielles.

## La Solution : SprintSnap
- **Fonctionnalités Clés** :
  - Authentification des Utilisateurs
  - Création et Gestion de Projets
  - Collaboration et Interaction en Temps Réel
  - Gestion des Tâches
  - Notifications et Dernières Activités

## Technologies Utilisées
- **Stack MERN** :
  - MongoDB
  - Express.js
  - React
  - Node.js
- **JWT pour la Sécurité**
- **Redux pour la Gestion de l'État**
- **Jest & Supertest** pour les Tests

## Défis et Solutions
- **Défis Techniques** :
  - Intégration des fonctionnalités de collaboration en temps réel
  - Garantir la scalabilité et les performances
- **Expériences d'Apprentissage** :
  - Compréhension améliorée de la stack MERN
  - Connaissance approfondie des protocoles de communication en temps réel

## Points de Vente Uniques (USPs)
- **Simplicité & Convivialité** : SprintSnap offre une expérience utilisateur simplifiée par rapport aux alternatives complexes.
- **Collaboration en Temps Réel** : Améliore la productivité en permettant aux membres de l'équipe de collaborer en temps réel.
- **Économique** : SprintSnap propose des fonctionnalités essentielles à une fraction du coût des solutions existantes.

## Améliorations Futures
- **Fonctionnalités Prévues** :
  - Diagramme de Gantt pour les délais de projet
  - Tableau Kanban pour la visualisation des tâches
- **Ouvert aux Retours** : Nous accueillons les retours pour améliorer continuellement SprintSnap et répondre aux besoins des utilisateurs.



 ## Installation:
 Before starting the app you should have:

**Node.js** installed on your machin.
**Git** installed on your machin.

 1. First clone the repository, following this command:

        git clone https://github.com/KHARBAQOssama/SprintSnap-.git
2. Navigate to the server folder 

        cd ./server
3. Install dependencies:

        npm install
4. Navigate to the client folder 

        cd ../clinet
5. Install dependencies:

        npm install
## Configuration:
 Update server/.env file to look like this.

        DB_URL="your-mongodb-url/db-name"
        PORT=3000
        
        MAIL_USERNAME=your mailing email
        MAIL_PASSWORD=the mailing password


  Make sure that you are working in the server directory && Run this command 

      npm run generate:jwt_secret
  two lines will be added to the .env file : 

      JWT_SECRET=9a724f4f6860adq1cf16c70dca4d4381d4acd112dq2157a13a7b0936fd0bdac58c52edkaj134SQuubcc
      JWT_REFRESH=62f13a7dskjc26f58sk2355046ee8szjd698fbHDKf2805d345267f95189ed84a36754c2de349d92332e4

## Running the application:
 To execute the project follow these steps:
 1.navigate to the server directory and run this command : 

      npm run dev
2. use different terminal and navigate to the client directory then run this command :

      npm run dev 


## Running the app on docker
To execute the project on Docker run this command in the root directory:

      docker compose up


## Conclusion
- **Résumé** : SprintSnap simplifie la gestion de projet avec des fonctionnalités essentielles, une collaboration en temps réel et une économie de coûts.
- **Appel à l'Action** : Essayez SprintSnap dès aujourd'hui et rejoignez-nous pour façonner l'avenir de la gestion de projet !
