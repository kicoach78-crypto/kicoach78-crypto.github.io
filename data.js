// data.js - Toutes les données de l'application

// ==================== GROUPES MUSCULAIRES ====================
const muscleGroups = [
    {
        id: 'pectoraux',
        name: 'Pectoraux',
        color: '#EF4444',
        image: '👨‍🦰',
        description: 'Muscles de la poitrine',
        subGroups: ['Grand pectoral', 'Petit pectoral', 'Sterno-costal']
    },
    {
        id: 'dos',
        name: 'Dos',
        color: '#10B981',
        image: '💪',
        description: 'Muscles du dos',
        subGroups: ['Grand dorsal', 'Trapèzes', 'Rhomboides', 'Lombaires', 'Érecteurs du rachis']
    },
    {
        id: 'epaules',
        name: 'Épaules',
        color: '#3B82F6',
        image: '🏋️‍♂️',
        description: 'Muscles des épaules',
        subGroups: ['Deltoïde antérieur', 'Deltoïde moyen', 'Deltoïde postérieur']
    },
    {
        id: 'jambes',
        name: 'Jambes',
        color: '#8B5CF6',
        image: '🦵',
        description: 'Muscles des jambes',
        subGroups: ['Quadriceps', 'Ischio-jambiers', 'Fessiers', 'Mollets', 'Adducteurs']
    },
    {
        id: 'bras',
        name: 'Bras',
        color: '#F59E0B',
        image: '💪',
        description: 'Muscles des bras',
        subGroups: ['Biceps', 'Triceps', 'Avant-bras']
    },
    {
        id: 'abdos',
        name: 'Abdominaux',
        color: '#06B6D4',
        image: '🏃‍♂️',
        description: 'Muscles abdominaux',
        subGroups: ['Grand droit', 'Obliques', 'Transverse']
    },
    {
        id: 'avant-bras',
        name: 'Avant-bras',
        color: '#EC4899',
        image: '🤲',
        description: 'Muscles de l\'avant-bras',
        subGroups: ['Fléchisseurs', 'Extenseurs', 'Supinateurs']
    },
    {
        id: 'fessiers',
        name: 'Fessiers',
        color: '#8B5CF6',
        image: '🍑',
        description: 'Muscles fessiers',
        subGroups: ['Grand fessier', 'Moyen fessier', 'Petit fessier']
    },
    {
        id: 'mollets',
        name: 'Mollets',
        color: '#6366F1',
        image: '🦶',
        description: 'Muscles du mollet',
        subGroups: ['Gastrocnémien', 'Soléaire']
    },
    {
        id: 'lombaires',
        name: 'Lombaires',
        color: '#059669',
        image: '🧘‍♂️',
        description: 'Muscles lombaires',
        subGroups: ['Érecteurs du rachis', 'Carré des lombes']
    },
    {
        id: 'trapezes',
        name: 'Trapèzes',
        color: '#3B82F6',
        image: '👔',
        description: 'Muscles trapèzes',
        subGroups: ['Trapèze supérieur', 'Trapèze moyen', 'Trapèze inférieur']
    },
    {
        id: 'ischio',
        name: 'Ischio-jambiers',
        color: '#8B5CF6',
        image: '🦵',
        description: 'Muscles ischio-jambiers',
        subGroups: ['Biceps fémoral', 'Semi-tendineux', 'Semi-membraneux']
    }
];

// ==================== EXERCICES ====================
const exercises = [
    // ==================== PECTORAUX ====================
    { id: '1', name: 'Développé couché barre', muscleGroup: 'pectoraux', category: 'force', equipment: ['Barre', 'Banc'], description: 'Exercice de base pour les pectoraux', difficulty: 'Intermédiaire' },
    { id: '2', name: 'Développé couché haltères', muscleGroup: 'pectoraux', category: 'force', equipment: ['Haltères', 'Banc'], description: 'Version haltères du développé couché', difficulty: 'Intermédiaire' },
    { id: '3', name: 'Développé incliné barre', muscleGroup: 'pectoraux', category: 'force', equipment: ['Barre', 'Banc incliné'], description: 'Cible le haut des pectoraux', difficulty: 'Intermédiaire' },
    { id: '4', name: 'Développé incliné haltères', muscleGroup: 'pectoraux', category: 'force', equipment: ['Haltères', 'Banc incliné'], description: 'Version haltères du développé incliné', difficulty: 'Intermédiaire' },
    { id: '5', name: 'Écarté couché haltères', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Haltères', 'Banc'], description: 'Isolation des pectoraux', difficulty: 'Débutant' },
    { id: '6', name: 'Dips pectoraux', muscleGroup: 'pectoraux', category: 'force', equipment: ['Barres parallèles'], description: 'Exercice au poids du corps', difficulty: 'Avancé' },
    { id: '7', name: 'Pull-over haltère', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Haltère', 'Banc'], description: 'Étirement des pectoraux', difficulty: 'Intermédiaire' },
    { id: '8', name: 'Développé décliné barre', muscleGroup: 'pectoraux', category: 'force', equipment: ['Barre', 'Banc décliné'], description: 'Cible le bas des pectoraux', difficulty: 'Avancé' },
    { id: '9', name: 'Cable crossover', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Poulie'], description: 'Isolation avec poulie', difficulty: 'Intermédiaire' },
    { id: '10', name: 'Pec deck', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les pectoraux', difficulty: 'Débutant' },
    { id: '11', name: 'Pompes', muscleGroup: 'pectoraux', category: 'force', equipment: ['Sol'], description: 'Exercice au poids du corps', difficulty: 'Débutant' },
    { id: '12', name: 'Pompes inclinées', muscleGroup: 'pectoraux', category: 'force', equipment: ['Banc'], description: 'Variante des pompes', difficulty: 'Débutant' },
    { id: '13', name: 'Pompes déclinées', muscleGroup: 'pectoraux', category: 'force', equipment: ['Banc'], description: 'Variante des pompes', difficulty: 'Intermédiaire' },
    { id: '14', name: 'Développé couché prise serrée', muscleGroup: 'pectoraux', category: 'force', equipment: ['Barre', 'Banc'], description: 'Cible le milieu des pectoraux', difficulty: 'Intermédiaire' },
    { id: '15', name: 'Butterfly', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les pectoraux', difficulty: 'Débutant' },
    { id: '16', name: 'Développé couché Smith', muscleGroup: 'pectoraux', category: 'force', equipment: ['Machine Smith'], description: 'Version machine du développé couché', difficulty: 'Débutant' },
    { id: '17', name: 'Développé incliné Smith', muscleGroup: 'pectoraux', category: 'force', equipment: ['Machine Smith'], description: 'Version machine du développé incliné', difficulty: 'Débutant' },
    { id: '18', name: 'Développé décliné Smith', muscleGroup: 'pectoraux', category: 'force', equipment: ['Machine Smith'], description: 'Version machine du développé décliné', difficulty: 'Débutant' },
    { id: '19', name: 'Écarté à la poulie haute', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Poulie'], description: 'Isolation avec poulie haute', difficulty: 'Intermédiaire' },
    { id: '20', name: 'Écarté à la poulie basse', muscleGroup: 'pectoraux', category: 'isolation', equipment: ['Poulie'], description: 'Isolation avec poulie basse', difficulty: 'Intermédiaire' },
    { id: '21', name: 'Développé couché avec élastique', muscleGroup: 'pectoraux', category: 'force', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '22', name: 'Pompes avec prise large', muscleGroup: 'pectoraux', category: 'force', equipment: ['Sol'], description: 'Variante des pompes', difficulty: 'Débutant' },
    { id: '23', name: 'Pompes diamant', muscleGroup: 'pectoraux', category: 'force', equipment: ['Sol'], description: 'Variante des pompes', difficulty: 'Intermédiaire' },

    // ==================== DOS ====================
    { id: '24', name: 'Tirage horizontal', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Exercice pour l\'épaisseur du dos', difficulty: 'Débutant' },
    { id: '25', name: 'Tirage vertical prise large', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Exercice pour la largeur du dos', difficulty: 'Débutant' },
    { id: '26', name: 'Rowing barre', muscleGroup: 'dos', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour le dos', difficulty: 'Intermédiaire' },
    { id: '27', name: 'Rowing haltère', muscleGroup: 'dos', category: 'force', equipment: ['Haltère', 'Banc'], description: 'Version unilatérale du rowing', difficulty: 'Intermédiaire' },
    { id: '28', name: 'Pull-up', muscleGroup: 'dos', category: 'force', equipment: ['Barre fixe'], description: 'Exercice au poids du corps', difficulty: 'Avancé' },
    { id: '29', name: 'Chin-up', muscleGroup: 'dos', category: 'force', equipment: ['Barre fixe'], description: 'Variante du pull-up', difficulty: 'Intermédiaire' },
    { id: '30', name: 'Tirage vertical prise serrée', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Variante du tirage vertical', difficulty: 'Débutant' },
    { id: '31', name: 'Shrugs barre', muscleGroup: 'dos', category: 'isolation', equipment: ['Barre'], description: 'Pour les trapèzes', difficulty: 'Débutant' },
    { id: '32', name: 'Good morning', muscleGroup: 'dos', category: 'force', equipment: ['Barre'], description: 'Pour les lombaires', difficulty: 'Avancé' },
    { id: '33', name: 'Hyperextensions', muscleGroup: 'dos', category: 'isolation', equipment: ['Machine'], description: 'Pour les lombaires', difficulty: 'Débutant' },
    { id: '34', name: 'Rowing à la poulie basse', muscleGroup: 'dos', category: 'force', equipment: ['Poulie'], description: 'Version poulie du rowing', difficulty: 'Intermédiaire' },
    { id: '35', name: 'Tirage menton', muscleGroup: 'dos', category: 'force', equipment: ['Barre'], description: 'Pour les trapèzes et épaules', difficulty: 'Intermédiaire' },
    { id: '36', name: 'Rowing T-bar', muscleGroup: 'dos', category: 'force', equipment: ['Barre T'], description: 'Variante du rowing', difficulty: 'Intermédiaire' },
    { id: '37', name: 'Pull-down prise inversée', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Variante du tirage vertical', difficulty: 'Débutant' },
    { id: '38', name: 'Rowing unilatéral à la poulie', muscleGroup: 'dos', category: 'force', equipment: ['Poulie'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },
    { id: '39', name: 'Superman', muscleGroup: 'dos', category: 'isolation', equipment: ['Sol'], description: 'Pour les lombaires', difficulty: 'Débutant' },
    { id: '40', name: 'Rowing Yates', muscleGroup: 'dos', category: 'force', equipment: ['Barre'], description: 'Variante du rowing barre', difficulty: 'Intermédiaire' },
    { id: '41', name: 'Tirage horizontal prise neutre', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Variante du tirage horizontal', difficulty: 'Débutant' },
    { id: '42', name: 'Rowing à un bras avec haltère', muscleGroup: 'dos', category: 'force', equipment: ['Haltère', 'Banc'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },
    { id: '43', name: 'Lat pulldown machine', muscleGroup: 'dos', category: 'force', equipment: ['Machine'], description: 'Machine pour le dos', difficulty: 'Débutant' },
    { id: '44', name: 'Rowing à la barre fixe', muscleGroup: 'dos', category: 'force', equipment: ['Barre fixe'], description: 'Exercice au poids du corps', difficulty: 'Avancé' },
    { id: '45', name: 'Pull-up lesté', muscleGroup: 'dos', category: 'force', equipment: ['Barre fixe', 'Ceinture lestée'], description: 'Pull-up avec poids additionnel', difficulty: 'Avancé' },
    { id: '46', name: 'Chin-up lesté', muscleGroup: 'dos', category: 'force', equipment: ['Barre fixe', 'Ceinture lestée'], description: 'Chin-up avec poids additionnel', difficulty: 'Avancé' },
    { id: '47', name: 'Rowing avec élastique', muscleGroup: 'dos', category: 'force', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },

    // ==================== EPAULES ====================
    { id: '48', name: 'Développé militaire barre', muscleGroup: 'epaules', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour les épaules', difficulty: 'Intermédiaire' },
    { id: '49', name: 'Développé militaire haltères', muscleGroup: 'epaules', category: 'force', equipment: ['Haltères'], description: 'Version haltères du développé militaire', difficulty: 'Intermédiaire' },
    { id: '50', name: 'Élévations latérales haltères', muscleGroup: 'epaules', category: 'isolation', equipment: ['Haltères'], description: 'Pour le deltoïde moyen', difficulty: 'Débutant' },
    { id: '51', name: 'Élévations frontales haltères', muscleGroup: 'epaules', category: 'isolation', equipment: ['Haltères'], description: 'Pour le deltoïde antérieur', difficulty: 'Débutant' },
    { id: '52', name: 'Oiseau haltères', muscleGroup: 'epaules', category: 'isolation', equipment: ['Haltères'], description: 'Pour le deltoïde postérieur', difficulty: 'Intermédiaire' },
    { id: '53', name: 'Développé Arnold', muscleGroup: 'epaules', category: 'force', equipment: ['Haltères'], description: 'Variante du développé militaire', difficulty: 'Intermédiaire' },
    { id: '54', name: 'Face pull', muscleGroup: 'epaules', category: 'isolation', equipment: ['Poulie'], description: 'Pour les rotateurs externes', difficulty: 'Intermédiaire' },
    { id: '55', name: 'Élévations latérales câble', muscleGroup: 'epaules', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie des élévations latérales', difficulty: 'Intermédiaire' },
    { id: '56', name: 'Développé nuque', muscleGroup: 'epaules', category: 'force', equipment: ['Barre'], description: 'Variante du développé militaire', difficulty: 'Avancé' },
    { id: '57', name: 'Shrugs haltères', muscleGroup: 'epaules', category: 'isolation', equipment: ['Haltères'], description: 'Pour les trapèzes', difficulty: 'Débutant' },
    { id: '58', name: 'Développé militaire machine', muscleGroup: 'epaules', category: 'force', equipment: ['Machine'], description: 'Version machine du développé militaire', difficulty: 'Débutant' },
    { id: '59', name: 'Élévations latérales machine', muscleGroup: 'epaules', category: 'isolation', equipment: ['Machine'], description: 'Version machine des élévations latérales', difficulty: 'Débutant' },
    { id: '60', name: 'Développé militaire assis', muscleGroup: 'epaules', category: 'force', equipment: ['Barre', 'Banc'], description: 'Version assise du développé militaire', difficulty: 'Intermédiaire' },
    { id: '61', name: 'Élévations frontales à la poulie', muscleGroup: 'epaules', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie des élévations frontales', difficulty: 'Intermédiaire' },
    { id: '62', name: 'Oiseau à la poulie', muscleGroup: 'epaules', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie de l\'oiseau', difficulty: 'Intermédiaire' },
    { id: '63', name: 'Développé militaire avec élastique', muscleGroup: 'epaules', category: 'force', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '64', name: 'Élévations latérales avec élastique', muscleGroup: 'epaules', category: 'isolation', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '65', name: 'Développé militaire debout', muscleGroup: 'epaules', category: 'force', equipment: ['Barre'], description: 'Version debout du développé militaire', difficulty: 'Avancé' },
    { id: '66', name: 'Élévations latérales unilatérales', muscleGroup: 'epaules', category: 'isolation', equipment: ['Haltère'], description: 'Version unilatérale', difficulty: 'Débutant' },
    { id: '67', name: 'Développé haltère assis', muscleGroup: 'epaules', category: 'force', equipment: ['Haltères', 'Banc'], description: 'Version assise avec haltères', difficulty: 'Intermédiaire' },
    { id: '68', name: 'Shrugs à la machine', muscleGroup: 'epaules', category: 'isolation', equipment: ['Machine'], description: 'Version machine des shrugs', difficulty: 'Débutant' },
    { id: '69', name: 'Élévations frontales barre', muscleGroup: 'epaules', category: 'isolation', equipment: ['Barre'], description: 'Version barre des élévations frontales', difficulty: 'Intermédiaire' },

    // ==================== JAMBES ====================
    { id: '70', name: 'Squat barre', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour les jambes', difficulty: 'Intermédiaire' },
    { id: '71', name: 'Squat avant', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Variante du squat', difficulty: 'Avancé' },
    { id: '72', name: 'Soulevé de terre classique', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour le dos et les jambes', difficulty: 'Avancé' },
    { id: '73', name: 'Presse à cuisses', muscleGroup: 'jambes', category: 'force', equipment: ['Machine'], description: 'Machine pour les jambes', difficulty: 'Débutant' },
    { id: '74', name: 'Fentes marchées haltères', muscleGroup: 'jambes', category: 'force', equipment: ['Haltères'], description: 'Exercice unilatéral', difficulty: 'Intermédiaire' },
    { id: '75', name: 'Extensions de jambes', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les quadriceps', difficulty: 'Débutant' },
    { id: '76', name: 'Curly jambes', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les ischio-jambiers', difficulty: 'Débutant' },
    { id: '77', name: 'Soulevé de terre roumain', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Pour les ischio-jambiers', difficulty: 'Intermédiaire' },
    { id: '78', name: 'Hip thrust', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Pour les fessiers', difficulty: 'Intermédiaire' },
    { id: '79', name: 'Mollets debout', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les mollets', difficulty: 'Débutant' },
    { id: '80', name: 'Mollets assis', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les mollets', difficulty: 'Débutant' },
    { id: '81', name: 'Bulgarian split squat', muscleGroup: 'jambes', category: 'force', equipment: ['Haltères'], description: 'Exercice unilatéral avancé', difficulty: 'Avancé' },
    { id: '82', name: 'Goblet squat', muscleGroup: 'jambes', category: 'force', equipment: ['Haltère'], description: 'Variante du squat', difficulty: 'Débutant' },
    { id: '83', name: 'Pistol squat', muscleGroup: 'jambes', category: 'force', equipment: ['Poids du corps'], description: 'Squat unilatéral au poids du corps', difficulty: 'Avancé' },
    { id: '84', name: 'Squat sumo', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Variante du squat', difficulty: 'Intermédiaire' },
    { id: '85', name: 'Fentes stationnaires', muscleGroup: 'jambes', category: 'force', equipment: ['Haltères'], description: 'Variante des fentes', difficulty: 'Intermédiaire' },
    { id: '86', name: 'Soulevé de terre sumo', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Variante du soulevé de terre', difficulty: 'Avancé' },
    { id: '87', name: 'Squat hack', muscleGroup: 'jambes', category: 'force', equipment: ['Machine'], description: 'Machine pour les squats', difficulty: 'Intermédiaire' },
    { id: '88', name: 'Leg press', muscleGroup: 'jambes', category: 'force', equipment: ['Machine'], description: 'Machine pour les jambes', difficulty: 'Débutant' },
    { id: '89', name: 'Adducteurs machine', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les adducteurs', difficulty: 'Débutant' },
    { id: '90', name: 'Abducteurs machine', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Pour les abducteurs', difficulty: 'Débutant' },
    { id: '91', name: 'Squat avec barre de sécurité', muscleGroup: 'jambes', category: 'force', equipment: ['Barre de sécurité'], description: 'Variante sécurisée du squat', difficulty: 'Intermédiaire' },
    { id: '92', name: 'Fentes sautées', muscleGroup: 'jambes', category: 'force', equipment: ['Poids du corps'], description: 'Variante plyométrique', difficulty: 'Avancé' },
    { id: '93', name: 'Squat overhead', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Squat avec barre au-dessus de la tête', difficulty: 'Avancé' },
    { id: '94', name: 'Soulevé de terre jambes tendues', muscleGroup: 'jambes', category: 'force', equipment: ['Barre'], description: 'Variante du soulevé de terre', difficulty: 'Avancé' },
    { id: '95', name: 'Hip thrust machine', muscleGroup: 'jambes', category: 'force', equipment: ['Machine'], description: 'Version machine du hip thrust', difficulty: 'Débutant' },
    { id: '96', name: 'Squat à une jambe', muscleGroup: 'jambes', category: 'force', equipment: ['Poids du corps'], description: 'Exercice unilatéral', difficulty: 'Avancé' },
    { id: '97', name: 'Mollets à la presse', muscleGroup: 'jambes', category: 'isolation', equipment: ['Machine'], description: 'Variante pour les mollets', difficulty: 'Débutant' },
    { id: '98', name: 'Squat avec élastique', muscleGroup: 'jambes', category: 'force', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '99', name: 'Fentes avec élastique', muscleGroup: 'jambes', category: 'force', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },

    // ==================== BRAS ====================
    { id: '100', name: 'Curl biceps barre', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre'], description: 'Exercice de base pour les biceps', difficulty: 'Débutant' },
    { id: '101', name: 'Curl biceps haltères', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltères'], description: 'Version haltères du curl biceps', difficulty: 'Débutant' },
    { id: '102', name: 'Curl marteau', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltères'], description: 'Pour le brachial antérieur', difficulty: 'Débutant' },
    { id: '103', name: 'Extensions triceps poulie', muscleGroup: 'bras', category: 'isolation', equipment: ['Poulie'], description: 'Pour les triceps', difficulty: 'Débutant' },
    { id: '104', name: 'Barre au front', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre'], description: 'Pour les triceps', difficulty: 'Intermédiaire' },
    { id: '105', name: 'Curl concentration', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltère'], description: 'Isolation des biceps', difficulty: 'Débutant' },
    { id: '106', name: 'Curl pupitre', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre', 'Pupitre'], description: 'Pour les biceps', difficulty: 'Intermédiaire' },
    { id: '107', name: 'Kickback triceps', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltère'], description: 'Pour les triceps', difficulty: 'Débutant' },
    { id: '108', name: 'Dips triceps', muscleGroup: 'bras', category: 'force', equipment: ['Barres parallèles'], description: 'Exercice au poids du corps', difficulty: 'Intermédiaire' },
    { id: '109', name: 'Curl câble', muscleGroup: 'bras', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie du curl biceps', difficulty: 'Débutant' },
    { id: '110', name: 'Extensions triceps haltère', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltère'], description: 'Pour les triceps', difficulty: 'Débutant' },
    { id: '111', name: 'Curl Zottman', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltères'], description: 'Variante du curl', difficulty: 'Intermédiaire' },
    { id: '112', name: 'Curl incliné haltères', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltères', 'Banc incliné'], description: 'Version inclinée du curl', difficulty: 'Débutant' },
    { id: '113', name: 'Extensions triceps à la corde', muscleGroup: 'bras', category: 'isolation', equipment: ['Poulie', 'Corde'], description: 'Variante des extensions triceps', difficulty: 'Débutant' },
    { id: '114', name: 'Curl prise marteau barre', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre'], description: 'Version barre du curl marteau', difficulty: 'Débutant' },
    { id: '115', name: 'Extensions triceps au banc', muscleGroup: 'bras', category: 'isolation', equipment: ['Banc', 'Poids du corps'], description: 'Exercice au poids du corps', difficulty: 'Débutant' },
    { id: '116', name: 'Curl spider', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre', 'Banc incliné'], description: 'Variante du curl', difficulty: 'Intermédiaire' },
    { id: '117', name: 'Extensions triceps barre EZ', muscleGroup: 'bras', category: 'isolation', equipment: ['Barre EZ'], description: 'Pour les triceps', difficulty: 'Intermédiaire' },
    { id: '118', name: 'Curl haltère assis', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltères', 'Banc'], description: 'Version assise du curl', difficulty: 'Débutant' },
    { id: '119', name: 'Extensions triceps unilatérales', muscleGroup: 'bras', category: 'isolation', equipment: ['Haltère'], description: 'Version unilatérale', difficulty: 'Débutant' },
    { id: '120', name: 'Curl avec élastique', muscleGroup: 'bras', category: 'isolation', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '121', name: 'Extensions triceps avec élastique', muscleGroup: 'bras', category: 'isolation', equipment: ['Élastique'], description: 'Version avec élastique', difficulty: 'Débutant' },
    { id: '122', name: 'Curl à la poulie basse', muscleGroup: 'bras', category: 'isolation', equipment: ['Poulie'], description: 'Variante du curl', difficulty: 'Débutant' },
    { id: '123', name: 'Extensions triceps poulie haute', muscleGroup: 'bras', category: 'isolation', equipment: ['Poulie'], description: 'Variante des extensions', difficulty: 'Débutant' },

    // ==================== ABDOMINAUX ====================
    { id: '124', name: 'Crunch', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Exercice de base pour les abdominaux', difficulty: 'Débutant' },
    { id: '125', name: 'Relevés de jambes', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour le bas des abdominaux', difficulty: 'Intermédiaire' },
    { id: '126', name: 'Planche', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Exercice isométrique', difficulty: 'Débutant' },
    { id: '127', name: 'Russian twist', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Intermédiaire' },
    { id: '128', name: 'Crunch inversé', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Variante du crunch', difficulty: 'Débutant' },
    { id: '129', name: 'Mountain climbers', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Exercice dynamique', difficulty: 'Intermédiaire' },
    { id: '130', name: 'Crunch bicyclette', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Débutant' },
    { id: '131', name: 'Planche latérale', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Intermédiaire' },
    { id: '132', name: 'Relevés de buste', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Variante du crunch', difficulty: 'Débutant' },
    { id: '133', name: 'Crunch à la poulie', muscleGroup: 'abdos', category: 'isolation', equipment: ['Poulie'], description: 'Version avec résistance', difficulty: 'Intermédiaire' },
    { id: '134', name: 'Crunch jambes tendues', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Variante du crunch', difficulty: 'Débutant' },
    { id: '135', name: 'Ciseaux verticaux', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour le bas des abdominaux', difficulty: 'Débutant' },
    { id: '136', name: 'V-up', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Exercice complet', difficulty: 'Avancé' },
    { id: '137', name: 'Leg raises', muscleGroup: 'abdos', category: 'isolation', equipment: ['Barre fixe'], description: 'Exercice suspendu', difficulty: 'Avancé' },
    { id: '138', name: 'Windshield wipers', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Avancé' },
    { id: '139', name: 'Crunch avec medecine ball', muscleGroup: 'abdos', category: 'isolation', equipment: ['Medecine ball'], description: 'Version avec poids', difficulty: 'Intermédiaire' },
    { id: '140', name: 'Dragon flag', muscleGroup: 'abdos', category: 'isolation', equipment: ['Banc'], description: 'Exercice avancé', difficulty: 'Avancé' },
    { id: '141', name: 'Toes to bar', muscleGroup: 'abdos', category: 'isolation', equipment: ['Barre fixe'], description: 'Exercice suspendu', difficulty: 'Avancé' },
    { id: '142', name: 'Crunch machine', muscleGroup: 'abdos', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les abdominaux', difficulty: 'Débutant' },
    { id: '143', name: 'Russian twist avec poids', muscleGroup: 'abdos', category: 'isolation', equipment: ['Haltère'], description: 'Version avec poids', difficulty: 'Intermédiaire' },
    { id: '144', name: 'Plank jack', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Variante dynamique de la planche', difficulty: 'Intermédiaire' },
    { id: '145', name: 'Crunch oblique', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Débutant' },
    { id: '146', name: 'Reverse crunch', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Variante du crunch', difficulty: 'Débutant' },
    { id: '147', name: 'Flutter kicks', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour le bas des abdominaux', difficulty: 'Débutant' },
    { id: '148', name: 'Hollow hold', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Exercice isométrique', difficulty: 'Avancé' },
    { id: '149', name: 'Scissor kicks', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour le bas des abdominaux', difficulty: 'Débutant' },
    { id: '150', name: 'Crunch avec rotation', muscleGroup: 'abdos', category: 'isolation', equipment: ['Sol'], description: 'Pour les obliques', difficulty: 'Intermédiaire' },

    // ==================== AVANT-BRAS ====================
    { id: '151', name: 'Curl poignet barre', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Barre'], description: 'Pour les avant-bras', difficulty: 'Débutant' },
    { id: '152', name: 'Extensions poignet barre', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Barre'], description: 'Pour les extenseurs', difficulty: 'Débutant' },
    { id: '153', name: 'Farmers walk', muscleGroup: 'avant-bras', category: 'force', equipment: ['Haltères'], description: 'Exercice de force', difficulty: 'Intermédiaire' },
    { id: '154', name: 'Wrist roller', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Rouleau'], description: 'Pour les avant-bras', difficulty: 'Débutant' },
    { id: '155', name: 'Pinch grip', muscleGroup: 'avant-bras', category: 'force', equipment: ['Plaques'], description: 'Pour la force de préhension', difficulty: 'Intermédiaire' },
    { id: '156', name: 'Curl poignet haltère', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Haltère'], description: 'Version haltères', difficulty: 'Débutant' },
    { id: '157', name: 'Extensions poignet haltère', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Haltère'], description: 'Version haltères', difficulty: 'Débutant' },
    { id: '158', name: 'Plate pinch', muscleGroup: 'avant-bras', category: 'force', equipment: ['Plaques'], description: 'Pour la force de préhension', difficulty: 'Intermédiaire' },
    { id: '159', name: 'Wrist curls assis', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Haltères', 'Banc'], description: 'Version assise', difficulty: 'Débutant' },
    { id: '160', name: 'Reverse curls', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Barre'], description: 'Pour les extenseurs', difficulty: 'Intermédiaire' },
    { id: '161', name: 'Finger curls', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Haltère'], description: 'Pour les doigts', difficulty: 'Intermédiaire' },
    { id: '162', name: 'Wrist rotations', muscleGroup: 'avant-bras', category: 'isolation', equipment: ['Haltère'], description: 'Pour la mobilité', difficulty: 'Débutant' },
    { id: '163', name: 'Plate flips', muscleGroup: 'avant-bras', category: 'force', equipment: ['Plaque'], description: 'Exercice dynamique', difficulty: 'Avancé' },
    { id: '164', name: 'Towel pull-ups', muscleGroup: 'avant-bras', category: 'force', equipment: ['Barre', 'Serviette'], description: 'Pour la force de préhension', difficulty: 'Avancé' },

    // ==================== FESSIERS ====================
    { id: '165', name: 'Hip thrust barre', muscleGroup: 'fessiers', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour les fessiers', difficulty: 'Intermédiaire' },
    { id: '166', name: 'Fentes bulgares', muscleGroup: 'fessiers', category: 'force', equipment: ['Haltères'], description: 'Exercice unilatéral', difficulty: 'Intermédiaire' },
    { id: '167', name: 'Donkey kicks', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Sol'], description: 'Exercice d\'isolation', difficulty: 'Débutant' },
    { id: '168', name: 'Fire hydrant', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Sol'], description: 'Exercice d\'isolation', difficulty: 'Débutant' },
    { id: '169', name: 'Glute bridge', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Sol'], description: 'Exercice au poids du corps', difficulty: 'Débutant' },
    { id: '170', name: 'Cable kickback', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie', difficulty: 'Débutant' },
    { id: '171', name: 'Sumo deadlift', muscleGroup: 'fessiers', category: 'force', equipment: ['Barre'], description: 'Variante du soulevé de terre', difficulty: 'Avancé' },
    { id: '172', name: 'Step-ups', muscleGroup: 'fessiers', category: 'force', equipment: ['Haltères', 'Step'], description: 'Exercice fonctionnel', difficulty: 'Intermédiaire' },
    { id: '173', name: 'Hip abduction machine', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les fessiers', difficulty: 'Débutant' },
    { id: '174', name: 'Hip adduction machine', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les adducteurs', difficulty: 'Débutant' },
    { id: '175', name: 'Glute bridge unilatéral', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Sol'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },
    { id: '176', name: 'Hip thrust unilatéral', muscleGroup: 'fessiers', category: 'force', equipment: ['Haltère'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },
    { id: '177', name: 'Cable pull-through', muscleGroup: 'fessiers', category: 'force', equipment: ['Poulie'], description: 'Exercice avec poulie', difficulty: 'Intermédiaire' },
    { id: '178', name: 'Fentes arrière', muscleGroup: 'fessiers', category: 'force', equipment: ['Haltères'], description: 'Variante des fentes', difficulty: 'Intermédiaire' },
    { id: '179', name: 'Hip thrust machine', muscleGroup: 'fessiers', category: 'force', equipment: ['Machine'], description: 'Version machine', difficulty: 'Débutant' },
    { id: '180', name: 'Glute kickback machine', muscleGroup: 'fessiers', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les fessiers', difficulty: 'Débutant' },

    // ==================== MOLETS ====================
    { id: '181', name: 'Mollets debout machine', muscleGroup: 'mollets', category: 'isolation', equipment: ['Machine'], description: 'Exercice de base pour les mollets', difficulty: 'Débutant' },
    { id: '182', name: 'Mollets assis machine', muscleGroup: 'mollets', category: 'isolation', equipment: ['Machine'], description: 'Version assise', difficulty: 'Débutant' },
    { id: '183', name: 'Mollets à la presse', muscleGroup: 'mollets', category: 'isolation', equipment: ['Machine'], description: 'Version presse', difficulty: 'Débutant' },
    { id: '184', name: 'Mollets barre', muscleGroup: 'mollets', category: 'isolation', equipment: ['Barre'], description: 'Version avec barre', difficulty: 'Intermédiaire' },
    { id: '185', name: 'Mollets haltère', muscleGroup: 'mollets', category: 'isolation', equipment: ['Haltère'], description: 'Version avec haltère', difficulty: 'Débutant' },
    { id: '186', name: 'Mollets à une jambe', muscleGroup: 'mollets', category: 'isolation', equipment: ['Haltère'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },
    { id: '187', name: 'Donkey calf raise', muscleGroup: 'mollets', category: 'isolation', equipment: ['Machine'], description: 'Machine spécifique', difficulty: 'Intermédiaire' },
    { id: '188', name: 'Mollets à la poulie', muscleGroup: 'mollets', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie', difficulty: 'Débutant' },
    { id: '189', name: 'Mollets debout libre', muscleGroup: 'mollets', category: 'isolation', equipment: ['Poids du corps'], description: 'Version au poids du corps', difficulty: 'Débutant' },
    { id: '190', name: 'Mollets sur step', muscleGroup: 'mollets', category: 'isolation', equipment: ['Step'], description: 'Version avec amplitude', difficulty: 'Débutant' },

    // ==================== LOMBAIRES ====================
    { id: '191', name: 'Soulevé de terre', muscleGroup: 'lombaires', category: 'force', equipment: ['Barre'], description: 'Exercice de base pour les lombaires', difficulty: 'Avancé' },
    { id: '192', name: 'Hyperextensions', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Machine'], description: 'Exercice d\'isolation', difficulty: 'Débutant' },
    { id: '193', name: 'Good morning', muscleGroup: 'lombaires', category: 'force', equipment: ['Barre'], description: 'Exercice de flexion', difficulty: 'Avancé' },
    { id: '194', name: 'Superman', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Sol'], description: 'Exercice au poids du corps', difficulty: 'Débutant' },
    { id: '195', name: 'Back extension machine', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Machine'], description: 'Machine pour les lombaires', difficulty: 'Débutant' },
    { id: '196', name: 'Soulevé de terre roumain', muscleGroup: 'lombaires', category: 'force', equipment: ['Barre'], description: 'Variante du soulevé de terre', difficulty: 'Intermédiaire' },
    { id: '197', name: 'Reverse hyperextension', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Machine'], description: 'Machine spécifique', difficulty: 'Intermédiaire' },
    { id: '198', name: 'Bird dog', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Sol'], description: 'Exercice de stabilité', difficulty: 'Débutant' },
    { id: '199', name: 'Deadlift déficit', muscleGroup: 'lombaires', category: 'force', equipment: ['Barre'], description: 'Variante du soulevé de terre', difficulty: 'Avancé' },
    { id: '200', name: 'Hyperextensions lestées', muscleGroup: 'lombaires', category: 'isolation', equipment: ['Machine', 'Poids'], description: 'Version avec poids', difficulty: 'Intermédiaire' },

    // ==================== TRAPÈZES ====================
    { id: '201', name: 'Shrugs barre', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Barre'], description: 'Exercice de base pour les trapèzes', difficulty: 'Débutant' },
    { id: '202', name: 'Shrugs haltères', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Haltères'], description: 'Version haltères', difficulty: 'Débutant' },
    { id: '203', name: 'Shrugs machine', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Machine'], description: 'Version machine', difficulty: 'Débutant' },
    { id: '204', name: 'Upright row', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Barre'], description: 'Pour les trapèzes et épaules', difficulty: 'Intermédiaire' },
    { id: '205', name: 'Face pull', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Poulie'], description: 'Pour les trapèzes supérieurs', difficulty: 'Intermédiaire' },
    { id: '206', name: 'Shrugs derrière le dos', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Barre'], description: 'Variante des shrugs', difficulty: 'Intermédiaire' },
    { id: '207', name: 'Shrugs à la poulie', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie', difficulty: 'Débutant' },
    { id: '208', name: 'Shrugs unilatéraux', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Haltère'], description: 'Version unilatérale', difficulty: 'Débutant' },
    { id: '209', name: 'Power shrugs', muscleGroup: 'trapezes', category: 'force', equipment: ['Barre'], description: 'Variante explosive', difficulty: 'Avancé' },
    { id: '210', name: 'Shrugs avec rotation', muscleGroup: 'trapezes', category: 'isolation', equipment: ['Haltères'], description: 'Variante avec rotation', difficulty: 'Intermédiaire' },

    // ==================== ISCHIO-JAMBIERS ====================
    { id: '211', name: 'Leg curl allongé', muscleGroup: 'ischio', category: 'isolation', equipment: ['Machine'], description: 'Exercice de base pour les ischio-jambiers', difficulty: 'Débutant' },
    { id: '212', name: 'Leg curl assis', muscleGroup: 'ischio', category: 'isolation', equipment: ['Machine'], description: 'Version assise', difficulty: 'Débutant' },
    { id: '213', name: 'Leg curl debout', muscleGroup: 'ischio', category: 'isolation', equipment: ['Machine'], description: 'Version debout', difficulty: 'Débutant' },
    { id: '214', name: 'Good morning', muscleGroup: 'ischio', category: 'force', equipment: ['Barre'], description: 'Exercice composé', difficulty: 'Avancé' },
    { id: '215', name: 'Soulevé de terre roumain', muscleGroup: 'ischio', category: 'force', equipment: ['Barre'], description: 'Exercice composé', difficulty: 'Intermédiaire' },
    { id: '216', name: 'Nordic curl', muscleGroup: 'ischio', category: 'force', equipment: ['Partenaire'], description: 'Exercice au poids du corps', difficulty: 'Avancé' },
    { id: '217', name: 'Glute ham raise', muscleGroup: 'ischio', category: 'force', equipment: ['Machine'], description: 'Machine spécifique', difficulty: 'Avancé' },
    { id: '218', name: 'Leg curl à la poulie', muscleGroup: 'ischio', category: 'isolation', equipment: ['Poulie'], description: 'Version poulie', difficulty: 'Intermédiaire' },
    { id: '219', name: 'Swiss ball leg curl', muscleGroup: 'ischio', category: 'isolation', equipment: ['Swiss ball'], description: 'Version avec ballon', difficulty: 'Intermédiaire' },
    { id: '220', name: 'Leg curl unilatéral', muscleGroup: 'ischio', category: 'isolation', equipment: ['Machine'], description: 'Version unilatérale', difficulty: 'Intermédiaire' },

    // ==================== CARDIO ====================
    { id: '221', name: 'Course à pied', muscleGroup: 'cardio', category: 'endurance', equipment: ['Tapis roulant'], description: 'Cardio classique', difficulty: 'Débutant' },
    { id: '222', name: 'Vélo stationnaire', muscleGroup: 'cardio', category: 'endurance', equipment: ['Vélo'], description: 'Cardio faible impact', difficulty: 'Débutant' },
    { id: '223', name: 'Rameur', muscleGroup: 'cardio', category: 'endurance', equipment: ['Rameur'], description: 'Cardio complet', difficulty: 'Intermédiaire' },
    { id: '224', name: 'Elliptique', muscleGroup: 'cardio', category: 'endurance', equipment: ['Elliptique'], description: 'Cardio faible impact', difficulty: 'Débutant' },
    { id: '225', name: 'Corde à sauter', muscleGroup: 'cardio', category: 'endurance', equipment: ['Corde'], description: 'Cardio intense', difficulty: 'Intermédiaire' },
    { id: '226', name: 'Montée de marche', muscleGroup: 'cardio', category: 'endurance', equipment: ['Step machine'], description: 'Cardio pour les jambes', difficulty: 'Débutant' },
    { id: '227', name: 'HIIT', muscleGroup: 'cardio', category: 'endurance', equipment: ['Sol'], description: 'Entraînement par intervalles', difficulty: 'Avancé' },
    { id: '228', name: 'Burpees', muscleGroup: 'cardio', category: 'endurance', equipment: ['Sol'], description: 'Exercice complet', difficulty: 'Avancé' },
    { id: '229', name: 'Jumping jacks', muscleGroup: 'cardio', category: 'endurance', equipment: ['Sol'], description: 'Cardio léger', difficulty: 'Débutant' },
    { id: '230', name: 'Natation', muscleGroup: 'cardio', category: 'endurance', equipment: ['Piscine'], description: 'Cardio complet faible impact', difficulty: 'Intermédiaire' }
];

// ==================== ALIMENTS ====================
const foods = [
    // Viandes
    { id: '1', name: 'Poulet grillé', calories: 165, protein: 31, carbs: 0, fat: 3.6, category: 'viande', quantity: 100 },
    { id: '2', name: 'Steak de bœuf maigre', calories: 250, protein: 26, carbs: 0, fat: 15, category: 'viande', quantity: 100 },
    { id: '3', name: 'Dinde', calories: 135, protein: 29, carbs: 0, fat: 1, category: 'viande', quantity: 100 },
    { id: '4', name: 'Jambon blanc', calories: 145, protein: 22, carbs: 1, fat: 6, category: 'viande', quantity: 100 },
    { id: '5', name: 'Bacon', calories: 541, protein: 37, carbs: 1.4, fat: 42, category: 'viande', quantity: 100 },
    { id: '6', name: 'Agneau', calories: 294, protein: 25, carbs: 0, fat: 21, category: 'viande', quantity: 100 },
    { id: '7', name: 'Porc maigre', calories: 242, protein: 27, carbs: 0, fat: 14, category: 'viande', quantity: 100 },
    { id: '8', name: 'Foie de volaille', calories: 167, protein: 24, carbs: 1, fat: 7, category: 'viande', quantity: 100 },
    
    // Poissons
    { id: '9', name: 'Saumon', calories: 208, protein: 20, carbs: 0, fat: 13, category: 'poisson', quantity: 100 },
    { id: '10', name: 'Thon en boîte au naturel', calories: 128, protein: 23, carbs: 0, fat: 3, category: 'poisson', quantity: 100 },
    { id: '11', name: 'Cabillaud', calories: 82, protein: 18, carbs: 0, fat: 0.7, category: 'poisson', quantity: 100 },
    { id: '12', name: 'Sardine à l\'huile', calories: 208, protein: 25, carbs: 0, fat: 11, category: 'poisson', quantity: 100 },
    { id: '13', name: 'Maquereau', calories: 305, protein: 18, carbs: 0, fat: 25, category: 'poisson', quantity: 100 },
    { id: '14', name: 'Crevette', calories: 85, protein: 20, carbs: 0, fat: 0.5, category: 'poisson', quantity: 100 },
    { id: '15', name: 'Truite', calories: 148, protein: 21, carbs: 0, fat: 7, category: 'poisson', quantity: 100 },
    { id: '16', name: 'Hareng', calories: 158, protein: 18, carbs: 0, fat: 9, category: 'poisson', quantity: 100 },
    
    // Œufs
    { id: '17', name: 'Œuf entier', calories: 155, protein: 13, carbs: 1.1, fat: 11, category: 'oeuf', quantity: 100 },
    { id: '18', name: 'Blanc d\'œuf', calories: 52, protein: 11, carbs: 1, fat: 0.2, category: 'oeuf', quantity: 100 },
    { id: '19', name: 'Jaune d\'œuf', calories: 322, protein: 16, carbs: 3.6, fat: 27, category: 'oeuf', quantity: 100 },
    
    // Produits laitiers
    { id: '20', name: 'Fromage blanc 0%', calories: 45, protein: 7, carbs: 4, fat: 0, category: 'produit-laitier', quantity: 100 },
    { id: '21', name: 'Fromage blanc 20%', calories: 97, protein: 10, carbs: 4, fat: 5, category: 'produit-laitier', quantity: 100 },
    { id: '22', name: 'Yaourt nature', calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, category: 'produit-laitier', quantity: 100 },
    { id: '23', name: 'Lait demi-écrémé', calories: 50, protein: 3.4, carbs: 4.8, fat: 1.7, category: 'produit-laitier', quantity: 100 },
    { id: '24', name: 'Fromage type Emmental', calories: 382, protein: 29, carbs: 0, fat: 30, category: 'produit-laitier', quantity: 100 },
    { id: '25', name: 'Cottage cheese', calories: 98, protein: 11, carbs: 3, fat: 4, category: 'produit-laitier', quantity: 100 },
    { id: '26', name: 'Ricotta', calories: 174, protein: 11, carbs: 3, fat: 13, category: 'produit-laitier', quantity: 100 },
    { id: '27', name: 'Mozzarella', calories: 280, protein: 28, carbs: 3, fat: 17, category: 'produit-laitier', quantity: 100 },
    
    // Céréales
    { id: '28', name: 'Riz blanc cuit', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, category: 'cereale', quantity: 100 },
    { id: '29', name: 'Riz complet cuit', calories: 111, protein: 2.6, carbs: 23, fat: 0.9, category: 'cereale', quantity: 100 },
    { id: '30', name: 'Pâtes cuites', calories: 131, protein: 5, carbs: 25, fat: 1, category: 'cereale', quantity: 100 },
    { id: '31', name: 'Pâtes complètes cuites', calories: 124, protein: 5, carbs: 22, fat: 1, category: 'cereale', quantity: 100 },
    { id: '32', name: 'Pain complet', calories: 265, protein: 9, carbs: 49, fat: 3.5, category: 'cereale', quantity: 100 },
    { id: '33', name: 'Pain blanc', calories: 265, protein: 9, carbs: 49, fat: 3.5, category: 'cereale', quantity: 100 },
    { id: '34', name: 'Flocons d\'avoine', calories: 389, protein: 13, carbs: 66, fat: 7, category: 'cereale', quantity: 100 },
    { id: '35', name: 'Quinoa cuit', calories: 120, protein: 4, carbs: 21, fat: 2, category: 'cereale', quantity: 100 },
    { id: '36', name: 'Sarrasin cuit', calories: 92, protein: 3.4, carbs: 20, fat: 0.6, category: 'cereale', quantity: 100 },
    { id: '37', name: 'Boulgour cuit', calories: 83, protein: 3, carbs: 19, fat: 0.2, category: 'cereale', quantity: 100 },
    
    // Légumes
    { id: '38', name: 'Brocoli', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, category: 'legume', quantity: 100 },
    { id: '39', name: 'Épinards', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, category: 'legume', quantity: 100 },
    { id: '40', name: 'Carotte', calories: 41, protein: 0.9, carbs: 10, fat: 0.2, category: 'legume', quantity: 100 },
    { id: '41', name: 'Pomme de terre', calories: 77, protein: 2, carbs: 17, fat: 0.1, category: 'legume', quantity: 100 },
    { id: '42', name: 'Patate douce', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, category: 'legume', quantity: 100 },
    { id: '43', name: 'Courgette', calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, category: 'legume', quantity: 100 },
    { id: '44', name: 'Poivron', calories: 20, protein: 0.9, carbs: 4.6, fat: 0.2, category: 'legume', quantity: 100 },
    { id: '45', name: 'Tomate', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, category: 'legume', quantity: 100 },
    { id: '46', name: 'Concombre', calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, category: 'legume', quantity: 100 },
    { id: '47', name: 'Chou-fleur', calories: 25, protein: 2, carbs: 5, fat: 0.1, category: 'legume', quantity: 100 },
    { id: '48', name: 'Haricots verts', calories: 31, protein: 1.8, carbs: 7, fat: 0.1, category: 'legume', quantity: 100 },
    { id: '49', name: 'Poireau', calories: 61, protein: 1.5, carbs: 14, fat: 0.3, category: 'legume', quantity: 100 },
    { id: '50', name: 'Asperge', calories: 20, protein: 2.2, carbs: 3.9, fat: 0.1, category: 'legume', quantity: 100 },
    
    // Fruits
    { id: '51', name: 'Pomme', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, category: 'fruit', quantity: 100 },
    { id: '52', name: 'Banane', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, category: 'fruit', quantity: 100 },
    { id: '53', name: 'Orange', calories: 47, protein: 0.9, carbs: 12, fat: 0.1, category: 'fruit', quantity: 100 },
    { id: '54', name: 'Fraise', calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, category: 'fruit', quantity: 100 },
    { id: '55', name: 'Raisin', calories: 69, protein: 0.7, carbs: 18, fat: 0.2, category: 'fruit', quantity: 100 },
    { id: '56', name: 'Poire', calories: 57, protein: 0.4, carbs: 15, fat: 0.1, category: 'fruit', quantity: 100 },
    { id: '57', name: 'Pêche', calories: 39, protein: 0.9, carbs: 10, fat: 0.3, category: 'fruit', quantity: 100 },
    { id: '58', name: 'Kiwi', calories: 61, protein: 1.1, carbs: 15, fat: 0.5, category: 'fruit', quantity: 100 },
    { id: '59', name: 'Ananas', calories: 50, protein: 0.5, carbs: 13, fat: 0.1, category: 'fruit', quantity: 100 },
    { id: '60', name: 'Mangue', calories: 60, protein: 0.8, carbs: 15, fat: 0.4, category: 'fruit', quantity: 100 },
    { id: '61', name: 'Avocat', calories: 160, protein: 2, carbs: 9, fat: 15, category: 'fruit', quantity: 100 },
    { id: '62', name: 'Melon', calories: 34, protein: 0.8, carbs: 8, fat: 0.2, category: 'fruit', quantity: 100 },
    { id: '63', name: 'Pastèque', calories: 30, protein: 0.6, carbs: 8, fat: 0.2, category: 'fruit', quantity: 100 },
    { id: '64', name: 'Cerise', calories: 50, protein: 1, carbs: 12, fat: 0.3, category: 'fruit', quantity: 100 },
    
    // Légumineuses
    { id: '65', name: 'Lentilles cuites', calories: 116, protein: 9, carbs: 20, fat: 0.4, category: 'legumineuse', quantity: 100 },
    { id: '66', name: 'Pois chiches cuits', calories: 164, protein: 9, carbs: 27, fat: 2.6, category: 'legumineuse', quantity: 100 },
    { id: '67', name: 'Haricots rouges cuits', calories: 127, protein: 9, carbs: 23, fat: 0.5, category: 'legumineuse', quantity: 100 },
    { id: '68', name: 'Haricots blancs cuits', calories: 139, protein: 9, carbs: 25, fat: 0.4, category: 'legumineuse', quantity: 100 },
    { id: '69', name: 'Pois cassés cuits', calories: 118, protein: 8, carbs: 21, fat: 0.4, category: 'legumineuse', quantity: 100 },
    { id: '70', name: 'Fèves cuites', calories: 88, protein: 8, carbs: 17, fat: 0.4, category: 'legumineuse', quantity: 100 },
    
    // Noix et graines
    { id: '71', name: 'Amandes', calories: 579, protein: 21, carbs: 22, fat: 49, category: 'noix', quantity: 100 },
    { id: '72', name: 'Noix', calories: 654, protein: 15, carbs: 14, fat: 65, category: 'noix', quantity: 100 },
    { id: '73', name: 'Noix de cajou', calories: 553, protein: 18, carbs: 30, fat: 44, category: 'noix', quantity: 100 },
    { id: '74', name: 'Noisettes', calories: 628, protein: 15, carbs: 17, fat: 61, category: 'noix', quantity: 100 },
    { id: '75', name: 'Pistaches', calories: 560, protein: 20, carbs: 28, fat: 45, category: 'noix', quantity: 100 },
    { id: '76', name: 'Graines de chia', calories: 486, protein: 17, carbs: 42, fat: 31, category: 'noix', quantity: 100 },
    { id: '77', name: 'Graines de lin', calories: 534, protein: 18, carbs: 29, fat: 42, category: 'noix', quantity: 100 },
    { id: '78', name: 'Graines de tournesol', calories: 584, protein: 21, carbs: 20, fat: 51, category: 'noix', quantity: 100 },
    { id: '79', name: 'Beurre de cacahuète', calories: 588, protein: 25, carbs: 20, fat: 50, category: 'noix', quantity: 100 },
    { id: '80', name: 'Tahini', calories: 595, protein: 17, carbs: 21, fat: 53, category: 'noix', quantity: 100 },
    
    // Boissons
    { id: '81', name: 'Café noir', calories: 2, protein: 0.3, carbs: 0, fat: 0, category: 'boisson', quantity: 100 },
    { id: '82', name: 'Thé vert', calories: 1, protein: 0.2, carbs: 0.3, fat: 0, category: 'boisson', quantity: 100 },
    { id: '83', name: 'Jus d\'orange 100%', calories: 45, protein: 0.7, carbs: 10, fat: 0.2, category: 'boisson', quantity: 100 },
    { id: '84', name: 'Jus de pomme 100%', calories: 46, protein: 0.1, carbs: 11, fat: 0.1, category: 'boisson', quantity: 100 },
    { id: '85', name: 'Eau', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'boisson', quantity: 100 },
    { id: '86', name: 'Boisson protéinée (25g protéine)', calories: 110, protein: 25, carbs: 2, fat: 1, category: 'boisson', quantity: 30 },
    
    // Matières grasses
    { id: '87', name: 'Huile d\'olive', calories: 884, protein: 0, carbs: 0, fat: 100, category: 'matiere-grasse', quantity: 100 },
    { id: '88', name: 'Huile de coco', calories: 862, protein: 0, carbs: 0, fat: 100, category: 'matiere-grasse', quantity: 100 },
    { id: '89', name: 'Beurre', calories: 717, protein: 0.9, carbs: 0.1, fat: 81, category: 'matiere-grasse', quantity: 100 },
    { id: '90', name: 'Margarine', calories: 717, protein: 0.2, carbs: 0.7, fat: 81, category: 'matiere-grasse', quantity: 100 },
    { id: '91', name: 'Mayonnaise', calories: 680, protein: 1, carbs: 1.3, fat: 75, category: 'matiere-grasse', quantity: 100 },
    { id: '92', name: 'Vinaigrette allégée', calories: 86, protein: 0.2, carbs: 4.5, fat: 7, category: 'matiere-grasse', quantity: 100 },
    
    // Sucreries
    { id: '93', name: 'Chocolat noir 70%', calories: 598, protein: 7.8, carbs: 45, fat: 43, category: 'sucre', quantity: 100 },
    { id: '94', name: 'Chocolat au lait', calories: 535, protein: 7.7, carbs: 59, fat: 30, category: 'sucre', quantity: 100 },
    { id: '95', name: 'Miel', calories: 304, protein: 0.3, carbs: 82, fat: 0, category: 'sucre', quantity: 100 },
    { id: '96', name: 'Confiture', calories: 260, protein: 0.4, carbs: 65, fat: 0.1, category: 'sucre', quantity: 100 },
    { id: '97', name: 'Sucre blanc', calories: 387, protein: 0, carbs: 100, fat: 0, category: 'sucre', quantity: 100 },
    
    // Snacks
    { id: '98', name: 'Barre protéinée', calories: 350, protein: 20, carbs: 30, fat: 15, category: 'snack', quantity: 60 },
    { id: '99', name: 'Chips de pomme de terre', calories: 536, protein: 7, carbs: 53, fat: 35, category: 'snack', quantity: 100 },
    { id: '100', name: 'Biscuit sec', calories: 440, protein: 7, carbs: 70, fat: 15, category: 'snack', quantity: 100 },
    { id: '101', name: 'Popcorn nature', calories: 387, protein: 13, carbs: 78, fat: 5, category: 'snack', quantity: 100 },
    { id: '102', name: 'Bretzels', calories: 380, protein: 10, carbs: 80, fat: 4, category: 'snack', quantity: 100 },
    
    // Plats préparés
    { id: '103', name: 'Pizza Margherita', calories: 266, protein: 11, carbs: 33, fat: 10, category: 'plat-prepare', quantity: 100 },
    { id: '104', name: 'Burger au bœuf', calories: 295, protein: 17, carbs: 30, fat: 12, category: 'plat-prepare', quantity: 150 },
    { id: '105', name: 'Sushi (maki saumon)', calories: 150, protein: 6, carbs: 28, fat: 2, category: 'plat-prepare', quantity: 100 },
    { id: '106', name: 'Lasagnes', calories: 135, protein: 7, carbs: 13, fat: 6, category: 'plat-prepare', quantity: 100 },
    { id: '107', name: 'Riz cantonais', calories: 163, protein: 6, carbs: 27, fat: 4, category: 'plat-prepare', quantity: 100 },
    { id: '108', name: 'Couscous', calories: 176, protein: 6, carbs: 30, fat: 4, category: 'plat-prepare', quantity: 100 },
    
    // Compléments alimentaires
    { id: '109', name: 'Whey protéine', calories: 400, protein: 80, carbs: 10, fat: 5, category: 'complement', quantity: 100 },
    { id: '110', name: 'Caséine', calories: 380, protein: 75, carbs: 8, fat: 4, category: 'complement', quantity: 100 },
    { id: '111', name: 'BCAA (poudre)', calories: 350, protein: 100, carbs: 0, fat: 0, category: 'complement', quantity: 100 },
    { id: '112', name: 'Créatine monohydrate', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'complement', quantity: 5 },
    { id: '113', name: 'Vitamines multi', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'complement', quantity: 1 },
    { id: '114', name: 'Omega-3 (capsule)', calories: 9, protein: 0, carbs: 0, fat: 1, category: 'complement', quantity: 1 },
    
    // Divers
    { id: '115', name: 'Levure de bière', calories: 325, protein: 40, carbs: 35, fat: 2, category: 'divers', quantity: 100 },
    { id: '116', name: 'Spiruline', calories: 290, protein: 57, carbs: 24, fat: 8, category: 'divers', quantity: 100 },
    { id: '117', name: 'Gelée royale', calories: 139, protein: 12, carbs: 14, fat: 4, category: 'divers', quantity: 100 },
    { id: '118', name: 'Ginseng', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'divers', quantity: 1 },
    { id: '119', name: 'Caféine (comprimé)', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'divers', quantity: 1 },
    { id: '120', name: 'Magnésium', calories: 0, protein: 0, carbs: 0, fat: 0, category: 'divers', quantity: 1 }
];

// ==================== SÉANCES PRÉ-DÉFINIES ====================
const Workouts = {
    
    fullbody_beginner: {
        id: 'fullbody_beginner',
        name: 'Full Body Débutant',
        description: 'Circuit complet pour les débutants - Tous les groupes musculaires',
        difficulty: 'Débutant',
        duration: 60,
        frequency: '3x/semaine',
        goals: ['Prise de masse', 'Force', 'Conditionnement'],
        exercises: [
            { exerciseId: '70', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Garder le dos droit' },
            { exerciseId: '1', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Contrôler la descente' },
            { exerciseId: '24', sets: 3, reps: '10-15', weight: 0, rest: 90, notes: 'Tirer avec le dos' },
            { exerciseId: '48', sets: 3, reps: '8-12', weight: 0, rest: 60, notes: 'Ne pas arquer le dos' },
            { exerciseId: '100', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Contracter les biceps' },
            { exerciseId: '103', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Garder les coudes fixes' },
            { exerciseId: '124', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Expirer en montant' },
            { exerciseId: '126', sets: 3, reps: '30-60s', weight: 0, rest: 45, notes: 'Gainage' }
        ]
    },
    
    fullbody_intermediate: {
        id: 'fullbody_intermediate',
        name: 'Full Body Intermédiaire',
        description: 'Programme complet pour pratiquants intermédiaires',
        difficulty: 'Intermédiaire',
        duration: 75,
        frequency: '3-4x/semaine',
        goals: ['Force', 'Volume', 'Définition'],
        exercises: [
            { exerciseId: '70', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Squat profond' },
            { exerciseId: '1', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Explosif à la montée' },
            { exerciseId: '72', sets: 3, reps: '5-8', weight: 0, rest: 120, notes: 'Dos plat' },
            { exerciseId: '26', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Rowing strict' },
            { exerciseId: '48', sets: 3, reps: '6-10', weight: 0, rest: 90, notes: 'Épaules stables' },
            { exerciseId: '100', sets: 3, reps: '8-12', weight: 0, rest: 60, notes: 'Curl concentré' },
            { exerciseId: '103', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Extensions complètes' },
            { exerciseId: '125', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Contrôler la descente' },
            { exerciseId: '126', sets: 3, reps: '45-60s', weight: 0, rest: 45, notes: 'Planche parfaite' }
        ]
    },
    
    fullbody_advanced: {
        id: 'fullbody_advanced',
        name: 'Full Body Avancé',
        description: 'Programme intensif pour pratiquants confirmés',
        difficulty: 'Avancé',
        duration: 90,
        frequency: '4x/semaine',
        goals: ['Force maximale', 'Volume musculaire', 'Endurance'],
        exercises: [
            { exerciseId: '70', sets: 5, reps: '3-6', weight: 0, rest: 180, notes: 'Squat lourd' },
            { exerciseId: '1', sets: 5, reps: '3-6', weight: 0, rest: 180, notes: 'Développé lourd' },
            { exerciseId: '72', sets: 4, reps: '3-5', weight: 0, rest: 180, notes: 'Deadlift lourd' },
            { exerciseId: '28', sets: 4, reps: '4-8', weight: 0, rest: 120, notes: 'Pull-ups' },
            { exerciseId: '48', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Military press' },
            { exerciseId: '104', sets: 3, reps: '6-10', weight: 0, rest: 90, notes: 'Barre au front lourde' },
            { exerciseId: '100', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Curl lourd' },
            { exerciseId: '136', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'V-ups' },
            { exerciseId: '126', sets: 3, reps: '60-90s', weight: 0, rest: 60, notes: 'Planche longue' }
        ]
    },
    
    // ==================== SPLIT CLASSIQUE ====================
    push_day: {
        id: 'push_day',
        name: 'Push Day (Pousser)',
        description: 'Journée pectoraux, épaules, triceps',
        difficulty: 'Intermédiaire',
        duration: 75,
        frequency: '2x/semaine',
        goals: ['Volume pectoraux', 'Force épaules', 'Développement triceps'],
        exercises: [
            { exerciseId: '1', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Exercice de base' },
            { exerciseId: '3', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Haut des pectoraux' },
            { exerciseId: '48', sets: 4, reps: '6-10', weight: 0, rest: 90, notes: 'Épaules avant' },
            { exerciseId: '50', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Épaules latérales' },
            { exerciseId: '103', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Triceps poulie' },
            { exerciseId: '104', sets: 3, reps: '8-12', weight: 0, rest: 60, notes: 'Triceps barre' },
            { exerciseId: '5', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Écarté finition' }
        ]
    },
    
    pull_day: {
        id: 'pull_day',
        name: 'Pull Day (Tirer)',
        description: 'Journée dos, biceps, arrière épaules',
        difficulty: 'Intermédiaire',
        duration: 75,
        frequency: '2x/semaine',
        goals: ['Épaisseur dos', 'Largeur dos', 'Volume biceps'],
        exercises: [
            { exerciseId: '26', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Rowing lourd' },
            { exerciseId: '24', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Largeur dos' },
            { exerciseId: '28', sets: 3, reps: '6-12', weight: 0, rest: 90, notes: 'Pull-ups' },
            { exerciseId: '27', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Rowing unilatéral' },
            { exerciseId: '100', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Biceps barre' },
            { exerciseId: '102', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Curl marteau' },
            { exerciseId: '52', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Arrière épaules' }
        ]
    },
    
    legs_day: {
        id: 'legs_day',
        name: 'Leg Day (Jambes)',
        description: 'Journée jambes complète',
        difficulty: 'Intermédiaire',
        duration: 80,
        frequency: '1-2x/semaine',
        goals: ['Force jambes', 'Volume quadriceps', 'Développement fessiers'],
        exercises: [
            { exerciseId: '70', sets: 4, reps: '6-10', weight: 0, rest: 120, notes: 'Squat lourd' },
            { exerciseId: '72', sets: 3, reps: '6-8', weight: 0, rest: 120, notes: 'Deadlift' },
            { exerciseId: '73', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Presse' },
            { exerciseId: '74', sets: 3, reps: '10-12', weight: 0, rest: 90, notes: 'Fentes' },
            { exerciseId: '75', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Extensions' },
            { exerciseId: '76', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Leg curl' },
            { exerciseId: '79', sets: 4, reps: '15-20', weight: 0, rest: 45, notes: 'Mollets' },
            { exerciseId: '81', sets: 3, reps: '10-12', weight: 0, rest: 60, notes: 'Split squat' }
        ]
    },
    
    // ==================== PROGRAMMES SPÉCIALISÉS ====================
    strength_powerlifting: {
        id: 'strength_powerlifting',
        name: 'Force - Powerlifting',
        description: 'Programme orienté force pure (Squat, Développé, Deadlift)',
        difficulty: 'Avancé',
        duration: 90,
        frequency: '3-4x/semaine',
        goals: ['Force maximale', 'Performance powerlifting', 'Recrutement neuromusculaire'],
        exercises: [
            { exerciseId: '70', sets: 5, reps: '3-5', weight: 0, rest: 180, notes: 'Squat lourd' },
            { exerciseId: '1', sets: 5, reps: '3-5', weight: 0, rest: 180, notes: 'Bench lourd' },
            { exerciseId: '72', sets: 3, reps: '3-5', weight: 0, rest: 180, notes: 'Deadlift lourd' },
            { exerciseId: '14', sets: 3, reps: '5-8', weight: 0, rest: 120, notes: 'Développé serré' },
            { exerciseId: '32', sets: 3, reps: '8-10', weight: 0, rest: 120, notes: 'Good morning' },
            { exerciseId: '104', sets: 3, reps: '6-10', weight: 0, rest: 90, notes: 'Triceps assistance' }
        ]
    },
    
    hypertrophy_volume: {
        id: 'hypertrophy_volume',
        name: 'Volume - Hypertrophie',
        description: 'Programme volume musculaire maximum',
        difficulty: 'Intermédiaire',
        duration: 80,
        frequency: '5-6x/semaine',
        goals: ['Volume musculaire', 'Congestion', 'Pompe'],
        exercises: [
            { exerciseId: '1', sets: 4, reps: '8-12', weight: 0, rest: 90, notes: 'Base pectoraux' },
            { exerciseId: '5', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Isolation' },
            { exerciseId: '9', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Cable finition' },
            { exerciseId: '50', sets: 4, reps: '12-15', weight: 0, rest: 60, notes: 'Lateral raises' },
            { exerciseId: '103', sets: 4, reps: '15-20', weight: 0, rest: 45, notes: 'Triceps high reps' },
            { exerciseId: '107', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Kickback' }
        ]
    },
    
    endurance_circuit: {
        id: 'endurance_circuit',
        name: 'Endurance - Circuit',
        description: 'Circuit training pour endurance musculaire',
        difficulty: 'Tous niveaux',
        duration: 45,
        frequency: '3-5x/semaine',
        goals: ['Endurance', 'Conditionnement', 'Perte de graisse'],
        exercises: [
            { exerciseId: '70', sets: 3, reps: '15-20', weight: 0, rest: 30, notes: 'Squat léger' },
            { exerciseId: '11', sets: 3, reps: '15-20', weight: 0, rest: 30, notes: 'Pompes' },
            { exerciseId: '74', sets: 3, reps: '12-15', weight: 0, rest: 30, notes: 'Fentes' },
            { exerciseId: '24', sets: 3, reps: '15-20', weight: 0, rest: 30, notes: 'Tirage' },
            { exerciseId: '124', sets: 3, reps: '20-25', weight: 0, rest: 30, notes: 'Crunch' },
            { exerciseId: '129', sets: 3, reps: '30-40s', weight: 0, rest: 30, notes: 'Mountain climbers' },
            { exerciseId: '221', sets: 1, reps: '5min', weight: 0, rest: 0, notes: 'Cardio' }
        ]
    },
    
    // ==================== PROGRAMMES CARDIO ====================
    cardio_hiit: {
        id: 'cardio_hiit',
        name: 'Cardio HIIT',
        description: 'High Intensity Interval Training',
        difficulty: 'Intermédiaire',
        duration: 30,
        frequency: '2-3x/semaine',
        goals: ['Brûle-graisses', 'Conditionnement', 'Endurance cardio'],
        exercises: [
            { exerciseId: '221', sets: 8, reps: '30s sprint', weight: 0, rest: 30, notes: 'Sprint intense' },
            { exerciseId: '228', sets: 5, reps: '45s', weight: 0, rest: 15, notes: 'Burpees' },
            { exerciseId: '225', sets: 5, reps: '60s', weight: 0, rest: 30, notes: 'Corde à sauter' },
            { exerciseId: '92', sets: 4, reps: '30s', weight: 0, rest: 30, notes: 'Fentes sautées' },
            { exerciseId: '229', sets: 4, reps: '45s', weight: 0, rest: 15, notes: 'Jumping jacks' }
        ]
    },
    
    cardio_liss: {
        id: 'cardio_liss',
        name: 'Cardio LISS',
        description: 'Low Intensity Steady State - Cardio long',
        difficulty: 'Débutant',
        duration: 45,
        frequency: '3-5x/semaine',
        goals: ['Endurance', 'Récupération', 'Brûle-graisses doux'],
        exercises: [
            { exerciseId: '221', sets: 1, reps: '30min', weight: 0, rest: 0, notes: 'Course lente' },
            { exerciseId: '222', sets: 1, reps: '15min', weight: 0, rest: 0, notes: 'Vélo' }
        ]
    },
    
    // ==================== PROGRAMMES SPÉCIFIQUES ====================
    arms_specialization: {
        id: 'arms_specialization',
        name: 'Spécialisation Bras',
        description: 'Programme intensif pour les bras',
        difficulty: 'Intermédiaire',
        duration: 60,
        frequency: '2x/semaine',
        goals: ['Volume biceps', 'Volume triceps', 'Définition bras'],
        exercises: [
            { exerciseId: '100', sets: 4, reps: '8-12', weight: 0, rest: 90, notes: 'Curl barre' },
            { exerciseId: '101', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Curl haltères' },
            { exerciseId: '105', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Curl concentration' },
            { exerciseId: '103', sets: 4, reps: '12-15', weight: 0, rest: 90, notes: 'Extensions poulie' },
            { exerciseId: '104', sets: 3, reps: '8-12', weight: 0, rest: 60, notes: 'Barre au front' },
            { exerciseId: '107', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Kickback' },
            { exerciseId: '108', sets: 3, reps: '8-12', weight: 0, rest: 60, notes: 'Dips' }
        ]
    },
    
    abs_core: {
        id: 'abs_core',
        name: 'Abdos & Core',
        description: 'Programme complet pour la ceinture abdominale',
        difficulty: 'Tous niveaux',
        duration: 30,
        frequency: '4-6x/semaine',
        goals: ['Définition abdos', 'Force core', 'Stabilité'],
        exercises: [
            { exerciseId: '124', sets: 3, reps: '20-25', weight: 0, rest: 30, notes: 'Crunch classique' },
            { exerciseId: '125', sets: 3, reps: '15-20', weight: 0, rest: 30, notes: 'Relevés de jambes' },
            { exerciseId: '126', sets: 3, reps: '45-60s', weight: 0, rest: 30, notes: 'Planche' },
            { exerciseId: '127', sets: 3, reps: '20-25', weight: 0, rest: 30, notes: 'Russian twist' },
            { exerciseId: '130', sets: 3, reps: '20-30', weight: 0, rest: 30, notes: 'Bicycle crunch' },
            { exerciseId: '131', sets: 3, reps: '30-45s', weight: 0, rest: 30, notes: 'Planche latérale' },
            { exerciseId: '136', sets: 3, reps: '10-15', weight: 0, rest: 30, notes: 'V-ups' }
        ]
    },
    
    // ==================== PROGRAMMES POUR DÉBUTANTS ====================
    beginner_4week: {
        id: 'beginner_4week',
        name: 'Débutant - 4 Semaines',
        description: 'Programme d\'initiation progressive sur 4 semaines',
        difficulty: 'Débutant',
        duration: 45,
        frequency: '3x/semaine',
        goals: ['Apprentissage', 'Adaptation', 'Prise de confiance'],
        exercises: [
            { exerciseId: '82', sets: 3, reps: '10-15', weight: 0, rest: 90, notes: 'Goblet squat léger' },
            { exerciseId: '11', sets: 3, reps: '8-12', weight: 0, rest: 90, notes: 'Pompes genoux' },
            { exerciseId: '27', sets: 3, reps: '10-15', weight: 0, rest: 90, notes: 'Rowing haltère léger' },
            { exerciseId: '118', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Curl assis' },
            { exerciseId: '115', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Extensions au banc' },
            { exerciseId: '124', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Crunch' },
            { exerciseId: '169', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Glute bridge' }
        ]
    },
    
    // ==================== PROGRAMMES POUR FEMMES ====================
    women_toning: {
        id: 'women_toning',
        name: 'Femme - Tonification',
        description: 'Programme féminin pour tonification et forme',
        difficulty: 'Débutant',
        duration: 60,
        frequency: '3-4x/semaine',
        goals: ['Tonification', 'Forme', 'Brûle-graisses'],
        exercises: [
            { exerciseId: '70', sets: 3, reps: '12-15', weight: 0, rest: 90, notes: 'Squat léger' },
            { exerciseId: '165', sets: 3, reps: '15-20', weight: 0, rest: 90, notes: 'Hip thrust' },
            { exerciseId: '74', sets: 3, reps: '12-15', weight: 0, rest: 90, notes: 'Fentes' },
            { exerciseId: '24', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Tirage dos' },
            { exerciseId: '50', sets: 3, reps: '15-20', weight: 0, rest: 60, notes: 'Élévations latérales' },
            { exerciseId: '169', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Glute bridge' },
            { exerciseId: '167', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Donkey kicks' },
            { exerciseId: '222', sets: 1, reps: '20min', weight: 0, rest: 0, notes: 'Cardio vélo' }
        ]
    },
    
    // ==================== PROGRAMMES DE RÉCUPÉRATION ====================
    recovery_active: {
        id: 'recovery_active',
        name: 'Récupération Active',
        description: 'Séance légère pour les jours de récupération',
        difficulty: 'Tous niveaux',
        duration: 40,
        frequency: '1-2x/semaine',
        goals: ['Récupération', 'Mobilité', 'Circulation sanguine'],
        exercises: [
            { exerciseId: '222', sets: 1, reps: '20min', weight: 0, rest: 0, notes: 'Vélo très léger' },
            { exerciseId: '126', sets: 2, reps: '60s', weight: 0, rest: 30, notes: 'Planche' },
            { exerciseId: '131', sets: 2, reps: '30s', weight: 0, rest: 30, notes: 'Planche latérale' },
            { exerciseId: '169', sets: 2, reps: '15-20', weight: 0, rest: 30, notes: 'Glute bridge' },
            { exerciseId: '39', sets: 1, reps: '5min', weight: 0, rest: 0, notes: 'Étirements' }
        ]
    },
    
    // ==================== PROGRAMMES AVEC PEU D'EQUIPEMENT ====================
    home_workout: {
        id: 'home_workout',
        name: 'Maison - Sans Matériel',
        description: 'Programme complet à faire à domicile',
        difficulty: 'Tous niveaux',
        duration: 40,
        frequency: '3-5x/semaine',
        goals: ['Maintien forme', 'Conditionnement', 'Poids du corps'],
        exercises: [
            { exerciseId: '83', sets: 3, reps: '10-15', weight: 0, rest: 60, notes: 'Pistol squat progression' },
            { exerciseId: '11', sets: 3, reps: 'max', weight: 0, rest: 60, notes: 'Pompes' },
            { exerciseId: '44', sets: 3, reps: '5-10', weight: 0, rest: 60, notes: 'Pull-up progression' },
            { exerciseId: '136', sets: 3, reps: '10-15', weight: 0, rest: 45, notes: 'V-ups' },
            { exerciseId: '126', sets: 3, reps: '45-60s', weight: 0, rest: 45, notes: 'Planche' },
            { exerciseId: '228', sets: 3, reps: '10-15', weight: 0, rest: 45, notes: 'Burpees' },
            { exerciseId: '129', sets: 3, reps: '30-45s', weight: 0, rest: 30, notes: 'Mountain climbers' }
        ]
    },
    
    // ==================== PROGRAMMES AVEC ELASTIQUES ====================
    resistance_bands: {
        id: 'resistance_bands',
        name: 'Élastiques - Full Body',
        description: 'Programme complet avec bandes élastiques',
        difficulty: 'Tous niveaux',
        duration: 50,
        frequency: '3-4x/semaine',
        goals: ['Tonification', 'Endurance', 'Mobilité'],
        exercises: [
            { exerciseId: '98', sets: 3, reps: '15-20', weight: 0, rest: 60, notes: 'Squat élastique' },
            { exerciseId: '21', sets: 3, reps: '12-15', weight: 0, rest: 60, notes: 'Développé élastique' },
            { exerciseId: '63', sets: 3, reps: '15-20', weight: 0, rest: 60, notes: 'Military élastique' },
            { exerciseId: '64', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Lateral raises élastique' },
            { exerciseId: '120', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Curl élastique' },
            { exerciseId: '121', sets: 3, reps: '15-20', weight: 0, rest: 45, notes: 'Triceps élastique' },
            { exerciseId: '124', sets: 3, reps: '20-25', weight: 0, rest: 30, notes: 'Crunch' }
        ]
    }
};