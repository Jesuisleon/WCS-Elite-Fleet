CREATE TABLE
    `owner` (
        `id` int NOT NULL AUTO_INCREMENT,
        `entreprise` varchar(45) NOT NULL,
        `email` varchar(255) NOT NULL,
        `ville` varchar(100) NOT NULL,
        `estValide` TINYINT,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `Mail`(`email`)
    );

CREATE TABLE
    `reservation` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_vehicule` int NOT NULL,
        `id_utlisateur` int NOT NULL,
        `locationDebut` DATE NOT NULL,
        `locationFin` DATE NOT NULL,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `NumeroPermis` VARCHAR(45) NOT NULL,
        `nom` varchar(45) NOT NULL,
        `prenom` varchar(45) NOT NULL,
        `dateNaissance` date NOT NULL,
        `ville` varchar(100) NOT NULL,
        `email` varchar(255) NOT NULL,
        `estAdmin` TINYINT(1),
        `avatar` text,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `Mail`(`email`)
    );

CREATE TABLE
    `vehicule` (
        `id` int NOT NULL AUTO_INCREMENT,
        `marque` varchar(45) NOT NULL,
        `modele` varchar(45) NOT NULL,
        `type` varchar(45) NOT NULL,
        `annee` int NOT NULL,
        `couleur` varchar(45) NOT NULL,
        `places` int NOT NULL,
        `kilometrage` INT NOT NULL,
        `ville` varchar(100) NOT NULL,
        `prix` int NOT NULL,
        `id_loueur` int NOT NULL,
        `estDisponible` TINYINT(1) NOT NULL,
        `entretienDateDebut` DATE,
        `entretienDateFin` DATE,
        `estValide` tinyint(1) NOT NULL,
        `compagnieAssurance` varchar(45) NOT NULL,
        `numeroAssurance` varchar(45) NOT NULL,
        `image` JSON,
        PRIMARY KEY (`id`)
    );

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idVehicule` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE;

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idUser` FOREIGN KEY (`id_utlisateur`) REFERENCES `user` (`id`) ON DELETE CASCADE;

ALTER TABLE `vehicule`
ADD
    CONSTRAINT `idOwnerVehicule` FOREIGN KEY (`id_loueur`) REFERENCES `owner` (`id`) ON DELETE CASCADE;

/* Owner*/

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        1,
        'Chatanet',
        'chatanet-toulouse@chatanet.com',
        'Toulouse',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        2,
        'Cianni Automobiles',
        'cianni-toulouse@cianni.net',
        'Toulouse',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        3,
        'Garage Lebreton',
        'concessionLebreton@lebreton.fr',
        'Clermont-Ferrand',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        4,
        'JME Auto',
        'jmeparis@jme.net',
        'Paris',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

/* User*/

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        1,
        '12564345678',
        'Admin',
        'Admin',
        '2000-01-01',
        'Toulouse',
        'root@root.com',
        1,
        'https://lh3.google.com/u/0/d/1mRV7A_O5DJa35t3HjdLwi3kZNu9M0G7R=w1920-h997-iv1',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        2,
        '12345678',
        'Bonno',
        'Ben',
        '2009-11-12',
        'Toulouse',
        'ben@mail.com',
        0,
        '	https://storage.googleapis.com/quest_editor_uploads/1jg9aSLS1kWbidkYjb46E0qFI1MjyooE.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        3,
        '123456348',
        'IlEstLeon',
        'Leon',
        '2006-12-12',
        'Clermont-Ferrand',
        'leonidas@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/WNxhr6uqNnvtAOqJXRPLaQQnGagkJA7y.jpeg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        4,
        '1234098098',
        'Cha',
        'Charline',
        '2009-12-12',
        'Paris',
        'chathechat@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/ENtTM2KEj7bxKH6qvWCqSOSqL2ENJsPg.jpeg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        5,
        '128907678',
        'Faz',
        'Lukas',
        '2008-12-12',
        'Paris',
        'thefaz@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/gOPHvMtJE6oqJWROOlEWGDUOylLEayPt.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        6,
        '127635678',
        'Dclos',
        'Laurent',
        '2000-12-12',
        'Toulouse',
        'ldc@wcs.com',
        0,
        '	https://storage.googleapis.com/quest_editor_uploads/wDfIgA0PUKfjarbNKPCGJoy8zxflOz9v.jpg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        7,
        '1238098678',
        'Gigi',
        'Ghislain',
        '2007-09-12',
        'Clermont-Ferrand',
        'gigi@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/tsbPqJCPtAYDqnB1sedOyv5hpAxmTHgT.jpg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        8,
        '12309878',
        'Grillrs',
        'Jo',
        '2007-12-23',
        'Paris',
        'jogrls@wcs.com',
        0,
        'https://www.gravatar.com/avatar/53134?d=monsterid&s=300',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        9,
        '198745678',
        'Malig brds',
        'Anaïs',
        '2009-09-12',
        'Toulouse',
        'ben@wcs.com',
        0,
        'https://www.gravatar.com/avatar/56329?d=identicon&s=300',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        10,
        '12367878',
        'Bidn',
        'Joe',
        '2004-07-12',
        'Paris',
        'potus@wcs.com',
        0,
        'https://i1.wp.com/dedipic.com/wp-content/uploads/2019/11/avatar_JoeBiden.png?resize=720%2C720&ssl=1',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        11,
        '98345678',
        'Mcron',
        'Manu',
        '2001-06-12',
        'Clermont-Ferrand',
        'themanu@wcs.com',
        0,
        'https://assets-decodeurs.lemonde.fr/assets-legacy/pol/avantlevote/macron.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

/* Vehicule*/

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        1,
        'Aixam',
        'Coupé GTI',
        'Thermique',
        2020,
        'jaune',
        2,
        16294,
        'Clermont-Ferrand',
        24,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607713/VoituresEliteFleet/AIXAM-Coup-GTI-Vision-rif-10153494-20191025230506.7082030015_vweorp.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607470/VoituresEliteFleet/aixam_hua5le.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607794/VoituresEliteFleet/slide_evocompteur_kwrojo.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607877/VoituresEliteFleet/4_j40vkg.png\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        2,
        'Chatenet',
        'CH40',
        'Thermique',
        2020,
        'gris',
        2,
        16294,
        'Clermont-Ferrand',
        12,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600094/VoituresEliteFleet/ch46-gamme-site-grise01_vka8cv.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600113/VoituresEliteFleet/COFFRE_s6ixit.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600109/VoituresEliteFleet/neuve-chatenet-ch40-9-1200x600_pmvfqj.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673608613/VoituresEliteFleet/chatenet-ch40-junior-gris_6de0e1e8-4049-4206-82d0-61de75731f8a_efeoww.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        3,
        'Ligier',
        'Microcar M.CROSS',
        'Thermique',
        2019,
        'bleu',
        2,
        22223,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600173/VoituresEliteFleet/2282_wjfsnv.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600175/VoituresEliteFleet/2281_ejpkip.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600178/VoituresEliteFleet/2280_nrc5b1.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673608805/VoituresEliteFleet/2_tabqzt.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        4,
        'Ligier',
        'JS50 Sport',
        'Thermique',
        2021,
        'gris',
        2,
        10255,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673609187/VoituresEliteFleet/JS50_Sport_Ultimate_my18_f0smun.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600248/VoituresEliteFleet/JS50-Young-Gris-Graphite-1_bgwf2x.jpg\",\"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673609346/VoituresEliteFleet/Extra_Ligier-JS60-Sport-Ultimate_840px_Configurator-Dashboard_CarPlay-1_bw3wak.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673609490/VoituresEliteFleet/007-87_zl2rlr.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        5,
        'Ligier',
        'JS50 Sport',
        'Thermique',
        2021,
        'rouge',
        2,
        1055,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627T3',
        '{
  "image1": "https://www.ligier.fr/wp-content/uploads/2020/11/Ligier-JS50-Sport-Young-rouge-566x400.png",
  "image2": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673600347/VoituresEliteFleet/JS50_Sport_Young_3-4_AR_wxfnp4.jpg",
  "image3": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673610139/VoituresEliteFleet/JS50-Young-INTER-JS50-YOUNG-Kit-multimedia-Carplay-Android-Auto-Pack-HiFi-2.0-1_uba2wz.jpg",
  "image4": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673610355/VoituresEliteFleet/sport_utlimate_galeria_02_qr4yzg.png"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        6,
        'Aixam',
        'Minauto',
        'Thermique',
        2022,
        'blanc',
        2,
        4568,
        'Paris',
        5,
        4,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B62234T3',
        '{
  "image1": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673610929/VoituresEliteFleet/9926315286_1_nmupya.jpg",
  "image2": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673610695/VoituresEliteFleet/mu13m2_VLGUV53BFC3227577_01_hd_ejgg4f.jpg",
  "image3": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673611250/VoituresEliteFleet/slide_interieur-minauto_s3z3y6.jpg",
  "image4": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673611689/VoituresEliteFleet/IMG201803261714251jpg_5bc06a590cb5c_gy64oh.jpg"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        7,
        'Chatenet',
        'CH46',
        'Thermique',
        2022,
        'rouge',
        2,
        6874,
        'Toulouse',
        8,
        1,
        1,
        NULL,
        NULL,
        1,
        'Matmut',
        'FKJHR789',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607291/VoituresEliteFleet/ch40-sportline_0_b32dok.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673607091/VoituresEliteFleet/img-20200220-145251_pgbmwu.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673599945/VoituresEliteFleet/comment-assurer-une-voiture-sans-permis_cyw9a5.webp\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673599953/VoituresEliteFleet/Mon_projet_cyo1ax.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        8,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'vert',
        2,
        6854,
        'Paris',
        50,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{
  "image1": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673611966/VoituresEliteFleet/renault-twizy-by-oakley-design_1_eiadkf.jpg",
  "image2": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673611867/VoituresEliteFleet/renault-twizy-by-oakley-design-2012-10_k3rou5.jpg",
  "image3": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673612096/VoituresEliteFleet/renault-twizy-rs-f1-oakley-design-2_ggxjbj.jpg",
  "image4": "https://res.cloudinary.com/dhudn6li6/image/upload/v1673612179/VoituresEliteFleet/twizy-f1_1_vu7gfs.jpg"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        11,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'noir',
        2,
        685,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612281/VoituresEliteFleet/RENAULT-TWIZY-00_xq3cxv.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612280/VoituresEliteFleet/25000000430vo02144107_medium_zl8x6i.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612434/VoituresEliteFleet/NodNZy_6_PP6PEpLXDh4DPo1_ZAFIszv1rHVwNfZoB16s4JxWKgywkkapw_klqadd.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612613/Hackaton%202/S7-comparatif-citroen-ami-vs-renault-twizy-45-une-guerre-sans-merci-et-sans-permis-655578_urovid.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        12,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'bleu',
        2,
        8754,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613127/Hackaton%202/renault-twizy-renault-twizy-bleu_8689418413_gbmo3n.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612930/Hackaton%202/S1-renault-twizy-le-coleoptere-branche-salon-caradisiac-electrique-hybride-2021-677376_cnokn7.jpg\",\"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613127/Hackaton%202/renault-twizy-renault-twizy-bleu_8689418413_gbmo3n.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612930/Hackaton%202/S1-renault-twizy-le-coleoptere-branche-salon-caradisiac-electrique-hybride-2021-677376_cnokn7.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        13,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'rouge',
        2,
        8254,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613233/Hackaton%202/renault-twizy-13kw-apan_e6twb2.png\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613268/Hackaton%202/Renault-Twizy-2012_iyxhdo.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673612613/Hackaton%202/S7-comparatif-citroen-ami-vs-renault-twizy-45-une-guerre-sans-merci-et-sans-permis-655578_urovid.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601082/VoituresEliteFleet/depositphotos_545814914-stock-photo-tula-russia-january-30-2022_okcq6d.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        14,
        'Citroën',
        'AMI',
        'Electrique',
        2021,
        'gris',
        2,
        564,
        'Clermont-Ferrand',
        4,
        3,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T9873',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613399/VoituresEliteFleet/essai-citroen-ami-00004_nwtauh.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613477/VoituresEliteFleet/S1-essai-video-citroen-ami-que-vaut-l-electrique-a-6-000-eur-640507_gwtnyo.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613523/VoituresEliteFleet/cl-21_zhiesm.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613550/VoituresEliteFleet/S1-essai-video-citroen-ami-que-vaut-l-electrique-a-6-000-eur-640498_jtqv8h.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        15,
        'Citroën',
        'AMI',
        'Electrique',
        2021,
        'rouge',
        2,
        5646,
        'Clermont-Ferrand',
        5,
        3,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T98ZE73',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613786/VoituresEliteFleet/ami_one_10_ys2fag.jpg\",\"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613844/VoituresEliteFleet/4162b1772eae07d624f6390f2b262365_petgdr.webp\",\"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613667/VoituresEliteFleet/ami_one_30_fywggq.jpg\",\"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673613550/VoituresEliteFleet/S1-essai-video-citroen-ami-que-vaut-l-electrique-a-6-000-eur-640498_jtqv8h.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        16,
        'Ligier',
        'MICROCAR',
        'Thermique',
        2019,
        'bleu',
        2,
        86,
        'Paris',
        4,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627TZE3',
        '{\"image1\": \"https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png\",\"image2\": \"https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png\",\"image3\": \"https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png\",\"image4\": \"https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        17,
        'Jiayuan',
        'ville Fun 45',
        'Electrique',
        2022,
        'jaune',
        2,
        6874,
        'Toulouse',
        7,
        2,
        1,
        NULL,
        NULL,
        1,
        'Libéa',
        'B6ZR27T3',
        '{\"image1\": \"https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg\",\"image2\": \"https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg\",\"image3\": \"https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg\",\"image4\": \"https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        18,
        'Bellier',
        'B8',
        'Thermique',
        2021,
        'vert',
        2,
        687,
        'Toulouse',
        15,
        1,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62E7T3',
        '{\"image1\": \"https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp\",\"image2\": \"https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp\",\"image3\": \"https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp\",\"image4\": \"https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        19,
        'Casalini',
        'M20 Supperleggera',
        'Thermique',
        2021,
        'blanc',
        2,
        6857,
        'Toulouse',
        12,
        3,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62723T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601852/VoituresEliteFleet/casalini-1-1200x800_bubdcj.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601853/VoituresEliteFleet/casalini-2-600x400_r0i6of.jpg\",\"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601852/VoituresEliteFleet/casalini-1-1200x800_bubdcj.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601853/VoituresEliteFleet/casalini-2-600x400_r0i6of.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        20,
        'Hummer',
        'Mini HX',
        'Electrique',
        2022,
        'rouge',
        2,
        687,
        'Paris',
        5,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62723T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601727/VoituresEliteFleet/2021032818193269509_pj9i5c.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601712/VoituresEliteFleet/2021032818192851564_otk3wi.jpg\",\"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601727/VoituresEliteFleet/2021032818193269509_pj9i5c.jpg\", \"image4\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601712/VoituresEliteFleet/2021032818192851564_otk3wi.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        21,
        'Estrima',
        'Biro',
        'Electrique',
        2022,
        'noir',
        2,
        7410,
        'Toulouse',
        5,
        1,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T23E3',
        '{\"image1\": \"https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg\",\"image2\": \"https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg\",\"image3\": \"https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg\",\"image4\": \"https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg\"}'
    );

/* Reservation*/

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        1,
        1,
        8,
        '2023-01-25',
        '2023-01-25'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        2,
        2,
        3,
        '2023-02-01',
        '2023-02-04'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        3,
        2,
        4,
        '2023-02-09',
        '2023-02-10'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        4,
        4,
        3,
        '2023-02-09',
        '2023-02-10'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        5,
        1,
        2,
        '2023-01-30',
        '2023-02-03'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        6,
        7,
        2,
        '2023-02-09',
        '2023-02-10'
    );