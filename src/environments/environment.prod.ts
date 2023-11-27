export const environment = {
  production: true,
  // apiUrl: "http://52.6.235.199:8888/",

  /// Prod environnement
  //apiUrlBiometrie: "https://apibiometrie.esmcgie.com",
  //apiUrl:"http://apis-test.esmcgie.com:8888/",
   apiUrl: "https://api.esmcgie.com/",

  // API Panel
  apiPanel: "https://testing.esmcgie.com/",

  /// Testing environnement
  // apiUrl: "https://apis-test.esmcgie.com/",
  
  apiUrlBiometrie: "https://apibiometrie.esmcgie.com",

  deviseKey: "041776ad21-b61b2ca6c4-rhqtin",

  /// variable
  venteAvr: "VENTE_AVR",
  achatAvr: "ACHAT_AVR",
  engageAvr: "ENGAGE",
  achat: "ACHAT",
  vente: "VENTE",
  achatFifo: "ACHAT PAR FIFO",
  venteFifo: "VENTE PAR FIFO",
  vague: 1,
  montantKsu: 70000,
  montantCarte: 10000,
  filBciValue: "105000000",
  felmBciValue: "385000000",
  flbBciValue: "35000000",

  filBciCode: "047856416",
  felmBciCode: "047856416",
  flbBciCode: "047856416",


  idAgentAcnev: 3012,
  filAndFlbStages: {
    filChaineDist: 1,
    filChaineValeurs: 2,
    filInstitutions: 3,
    FlbOeChaineDist: 4,
    FlbOeChaineValeurs: 5,
    FlbOeChambres: 6,
    FlbOseCibles: 7,
    FlbOseIndicateurs: 8,
    FlbOseAgenceOdd: 9,
  },

  /// debug
  //Liste des Agents Franchis� z�ro
  agentIds: {
    agentGeneral: 1,
    agentConseilDivision: 24,
    agentDivisionDetentrice: 32,
    agentTechnopoleDd: 33,
    agentFiliereDd: 205,
    agentACNEVDd: 228,
    agentOperationsDd: 257,
    agentServiceDd: 363,

    agentChargementKSU: 2332,
    agentEtablissementKSU: 2333,
    agentPhotoKSU: 2334,
    agentEmpreinteKSU: 2335,
    agentEditionKSU: 2336,
    agentRetraitKSU: 2337,
    agentVenteKSUReactivation: 2339,
    agentVenteKSUActivation: 2463,
    agentPassifs: 3016,
    agentReinitialisation: 3018,
    agentAchatDesendettement: 3019,

    agentVenteDesndettementKsu: 3168,
    agentVenteDesndettementFranchise: 3169,
    agentVenteDesndettementCertification: 3170,
  },
};
