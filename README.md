
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

CHARLE QUENTIN PHOTOGRAPHIE
Lien site web: https://charlequentin-photographie.netlify.app

PRESENTATION : 
Charle Quentin photographie, est une application web fictif, dans le cadre de ma formation. Elle propose d'exposer le travaille du photographie par une galerie d'image et invite à choisir parmis diférentes préstations de service. En métant à disposition un formulaire, permettant de le contacter par email et de recevoir une confirmation. Un gestionnaire de contenue y est associé pour pouvoir administrer le site web depuis sont interface.

DEMARAGE EN LOCAL : 
  - Téléchargez les fichiers du code source. Depuis la console de commande, à la racine du dossier source " charlequentin/ " .
  - Entrez la commande: npm start
  ( Mettre à jours le paquet "react-scripts" dans package.json )

UTILISATION : 
Gestionnaire de contenue Strapi :
  Pour accéder au gestionnaire de contenue et administrer le site web. Rendez-vous sur le lien ci-dessus et entrez les identifiants suivant:
  
           lien : https://strapi-data-app.herokuapp.com/admin
           identifiant : alt.z7-1ocjbf7@yopmail.com
           mot de passe : 123456ABcd
           
  Depuis l'onglet Content Manager, choisiez la collection à modifier. 
        - categorie : liste des categories d'images (doit avoir la même ortographe dans le champ "section" des posts.)
        - logo : images utlisé comme logo et font d'écrans.
        - posts : images publié (doit avoir la même ortographe dans le champ "section" que dans categorie.)
        - prestations : prestations publié.
        - social : les liens vers les réseaux sociaux.
        - email : adresse email utilisé pour recevoir les messages formulaires.
        
  Pensez à sauvegarder et publier vos modifications. La mise à jours du site ce fera automatiquement. 
