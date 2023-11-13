import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getPage1(language) {
    if (language == 'PT') {
      return {
        acessoNaoPermitido: 'Acesso não permitido',
        facaLogin: 'Faça login',
        regressar: 'Regressar',
        aboutUs: 'Sobre nós',
        contacts: 'Contactos',
        dadosDaNossaEmpresa: 'Dados da nossa empresa',
        nif: 'Nif',
        address: 'Endereço',
        contact: 'Contacto',
      }
    } else if (language == 'EN') {
      return {
        acessoNaoPermitido: 'Access not allowed',
        facaLogin: 'Login',
        regressar: 'Return',
        aboutUs: 'About us',
        contacts: 'Contacts',
        dadosDaNossaEmpresa: 'Our company data',
        nif: 'Nif',
        address: 'Address',
        contact: 'Contact',
      }
    } else {
      return {
        acessoNaoPermitido: 'Accès non autorisé',
        facaLogin: 'Login',
        regressar: 'Revenir',
        aboutUs: 'À propos de nous',
        contacts: 'Contacts',
        dadosDaNossaEmpresa: "Nos données d'entreprise",
        nif: 'Nif',
        address: 'Adresse',
        contact: 'Contact',
      }
    }
  }

  getLoginPage(language) {
    if (language == 'PT') {
      return {
        dadosEmFalta: 'Dados em falta',
        osCamposSaoObrigatorios: 'Os campos são obrigatórios',
        success: 'Sucesso',
        canStartWorking: 'Pode começar a trabalhar',
        proseguir: 'Proseguir',
        erroNoAcesso: 'Erro no acesso',
        oEmailOuAPasswordEstaoErrados: 'O email ou a password estão errados',
        erroDeComunicacao: 'Erro de comunicação',
        certifiqueSeQueEstaLigadoAInternet: 'Certifique-se que está ligado à internet',
      }
    } else if (language == 'EN') {
      return {
        dadosEmFalta: 'Missing data',
        osCamposSaoObrigatorios: 'Os campos são obrigatórios',
        success: 'Success',
        canStartWorking: 'Can start working',
        proseguir: 'Proceed',
        erroNoAcesso: 'Access error',
        oEmailOuAPasswordEstaoErrados: 'Wrong email or password',
        erroDeComunicacao: 'Comunication error',
        certifiqueSeQueEstaLigadoAInternet: 'Make sure you are connected to the internet.',
      }
    } else {
      return {
        dadosEmFalta: 'Données manquantes',
        osCamposSaoObrigatorios: 'Os campos são obrigatórios',
        success: 'Succès',
        canStartWorking: 'Peut commencer à travailler',
        proseguir: 'Continuer',
        erroNoAcesso: "Erreur d'accès",
        oEmailOuAPasswordEstaoErrados: "L'email ou le mot de passe est erroné",
        erroDeComunicacao: 'Erreur de communication',
        certifiqueSeQueEstaLigadoAInternet: 'Assurez-vous que vous êtes connecté à Internet.',
      }
    }
  }

  getPage2(language) {
    if (language == 'PT') {
      return {
        acessoNaoPermitido: 'Acesso não permitido',
        facaLogin: 'Faça login',
        regressar: 'Regressar',
        catalogos: 'Catálogos',
        procurarPorReferencia: 'Procurar por referência',
        procurarPorCatalogo: 'Procurar por catálogo',
      }
    } else if (language == 'EN') {
      return {
        acessoNaoPermitido: 'Access not allowed',
        facaLogin: 'Login',
        regressar: 'Return',
        catalogos: 'Catalogs',
        procurarPorReferencia: 'Search by reference',
        procurarPorCatalogo: 'Search by catalog',
      }
    } else {
      return {
        acessoNaoPermitido: 'Accès non autorisé',
        facaLogin: 'Login',
        regressar: 'Revenir',
        catalogos: 'Catalogues',
        procurarPorReferencia: 'Recherche par référence',
        procurarPorCatalogo: 'Recherche par catalogue',
      }
    }
  }

  getPage3(language) {
    if (language == 'PT') {
      return {
        acessoNaoPermitido: 'Acesso não permitido',
        facaLogin: 'Faça login',
        regressar: 'Regressar',
        cancelar: 'Cancelar',
        temACerteza: 'Tem a certeza?',
        aAccaoEIrreversivel: 'A acção é irreversivel',
        apagarTudo: 'Apagar tudo',
        apagar: 'Apagar',
        encomendaSemProductos: 'Encomenda sem productos',
        coloqueProductosAntesDeFecharAEncomenda: 'Coloque productos antes de fechar a encomenda.',
        irParaCatalogos: 'Ir para catálogos',
        faltamDadosEmINFORMACOESADICIONAIS: 'Faltam dados em INFORMAÇÕES ADICIONAIS',
        eObrigatorioQuePreenchaADataDeEntregaEAsCondicoesDePagamento: 'É obrigatório que preencha a data de entrega e as condições de pagamento.',
        encomendaEnviada: 'Encomenda enviada',
        osDadosDaEncomendaForamEnviadosPorEmail: 'Os dados da encomenda foram enviados por email',
        podeConfirmarARececaoNoEmailEEscolherOsMetodosDePagamentoConstantesNoMesmo: 'Pode confirmar a receção no email e escolher os métodos de pagamento constantes no mesmo',
        fechar: 'Fechar',
        iVAs: 'IVAs',
        pesquisarCliente: 'Pesquisar cliente',
        totalComIVA: 'Total com IVA',
        nome: 'Nome',
        nIF: 'NIF',
        telefone: 'Telefone',
        acrescentarNumeros: 'Alterar quantidade',
        editar: 'Editar',
        alterarTaxaDeIVAParaProduto: 'Alterar taxa de IVA para produto?',
        enderecosDisponiveis: 'Endereços disponíveis',
        escolhaOEnderecoDeEntrega: 'Escolha o endereço de entrega',
        informacoesAdicionais: 'Informações adicionais',
        fecharEncomenda: 'Fechar encomenda',
        pagar: 'Pagar',
      }
    } else if (language == 'EN') {
      return {
        acessoNaoPermitido: 'Access not allowed',
        facaLogin: 'Login',
        cancelar: 'Cancel',
        temACerteza: 'Are you sure?',
        aAccaoEIrreversivel: 'The action is irreversible',
        apagarTudo: 'Delete everything',
        apagar: 'Delete',
        encomendaSemProductos: 'Order without products',
        coloqueProductosAntesDeFecharAEncomenda: 'Place products before placing the order.',
        irParaCatalogos: 'Go to catalogs',
        faltamDadosEmINFORMACOESADICIONAIS: 'ADDITIONAL INFORMATION missing data',
        eObrigatorioQuePreenchaADataDeEntregaEAsCondicoesDePagamento: 'It is mandatory that you fill in the delivery date and payment terms.',
        encomendaEnviada: 'Order sent',
        osDadosDaEncomendaForamEnviadosPorEmail: 'Order details were sent by email',
        podeConfirmarARececaoNoEmailEEscolherOsMetodosDePagamentoConstantesNoMesmo: 'You can confirm receipt by email and choose the payment methods contained in it.',
        fechar: 'Close',
        iVAs: 'VATs',
        pesquisarCliente: 'Search customer',
        totalComIVA: 'Total with VAT',
        nome: 'Name',
        nIF: 'VAT',
        telefone: 'Phone',
        acrescentarNumeros: 'Add numbers',
        editar: 'Edit',
        alterarTaxaDeIVAParaProduto: 'Change VAT rate for product?',
        enderecosDisponiveis: 'Available addresses',
        escolhaOEnderecoDeEntrega: 'Choose the delivery address',
        informacoesAdicionais: 'Additional Information',
        fecharEncomenda: 'Close order',
        pagar: 'Pay',
      }
    } else {
      return {
        acessoNaoPermitido: 'Accès non autorisé',
        facaLogin: 'Login',
        regressar: 'Revenir',
        cancelar: 'Annuler',
        temACerteza: 'Es-tu sûr?',
        aAccaoEIrreversivel: "L'action est irréversible",
        apagarTudo: 'Tout supprimer',
        apagar: 'Effacer',
        encomendaSemProductos: 'Commande sans produits',
        coloqueProductosAntesDeFecharAEncomenda: 'Placer les produits avant de passer la commande.',
        irParaCatalogos: 'Aller aux catalogues',
        faltamDadosEmINFORMACOESADICIONAIS: 'INFORMATIONS COMPLÉMENTAIRES données manquantes',
        eObrigatorioQuePreenchaADataDeEntregaEAsCondicoesDePagamento: 'Il est obligatoire de renseigner la date de livraison et les modalités de paiement.',
        encomendaEnviada: 'Commande envoyée',
        osDadosDaEncomendaForamEnviadosPorEmail: 'Les détails de la commande ont été envoyés par e-mail',
        podeConfirmarARececaoNoEmailEEscolherOsMetodosDePagamentoConstantesNoMesmo: 'Vous pouvez confirmer la réception par e-mail et choisir les modes de paiement qui y sont contenus.',
        fechar: 'Fermer',
        iVAs: 'TVA',
        pesquisarCliente: 'Rechercher un client',
        totalComIVA: 'Total avec TVA',
        nome: 'Nom',
        nIF: 'TVA',
        telefone: 'Téléphone',
        acrescentarNumeros: 'Ajouter des nombres',
        editar: 'Éditer',
        alterarTaxaDeIVAParaProduto: 'Changer le taux de TVA pour un produit ?',
        enderecosDisponiveis: 'Adresses disponibles',
        escolhaOEnderecoDeEntrega: "Choisissez l'adresse de livraison",
        informacoesAdicionais: 'Information additionnelle',
        fecharEncomenda: 'Fermer la commande',
        pagar: 'Payer',
      }
    }
  }

  getPage4(language) {
    if (language == 'PT') {
      return {
        acessoNaoPermitido: 'Acesso não permitido',
        facaLogin: 'Faça login',
        regressar: 'Regressar',
        novaDespesa: 'Nova despesa',
        sujeitaAAprovacao: 'Sujeita a aprovação',
        descricao: 'Descrição',
        despesa: 'Despesa',
        continuar: 'Continuar',
        osCamposSaoObrigatorios: 'Os campos são obrigatórios',
        cancelar: 'Cancelar',
        dadosPessoais: 'Dados pessoais',
        sobreMim: 'Sobre mim',
        nome: 'Nome',
        observacoes: 'Observações',
        agenda: 'Agenda',
        encomendas: 'Encomendas',
        despesas: 'Despesas',
        entradasDeAgenda: 'Entradas de agenda',
        notasDeEncomenda: 'Notas de encomenda',
        historico: 'Histórico',
        pesquisaPorNomeDeCliente: 'Pesquisa por nome de cliente',
        encomenda: 'Encomenda',
        em: 'em',
        valor: 'Valor',
        aguardaPagamento: 'Aguarda pagamento',
        pago: 'Pago',
        cancelado: 'Cancelado',
        naoEntregue: 'Não entregue',
        entregue: 'Entregue',
        valorAtribuido: 'Valor atribuido',
        saldo: 'Saldo',
        naoVerificada: 'Não verificada',
        aprovada: 'Aprovada',
        rejeitada: 'Rejeitada',
      }
    } else if (language == 'EN') {
      return {
        acessoNaoPermitido: 'Access not allowed',
        facaLogin: 'Login',
        regressar: 'Return',
        novaDespesa: 'New expense',
        sujeitaAAprovacao: "Subject to approval",
        descricao: 'Description',
        despesa: 'Expense',
        continuar: 'Continue',
        osCamposSaoObrigatorios: 'Fields are required',
        cancelar: 'Cancel',
        dadosPessoais: 'Personal data',
        sobreMim: 'About me',
        nome: 'Name',
        observacoes: 'Comments',
        agenda: 'Schedule',
        encomendas: 'Orders',
        despesas: 'Expenses',
        entradasDeAgenda: 'Calendar entries',
        notasDeEncomenda: 'Purchase orders',
        historico: 'Historic',
        pesquisaPorNomeDeCliente: 'Search by customer name',
        encomenda: 'Order',
        em: 'in',
        valor: 'Value',
        aguardaPagamento: 'Awaiting payment',
        pago: 'Paid out',
        cancelado: 'Canceled',
        naoEntregue: 'Not delivered',
        entregue: 'Delivered',
        valorAtribuido: 'Assigned value',
        saldo: 'Balance',
        naoVerificada: 'Not verified',
        aprovada: 'Approved',
        rejeitada: 'Rejected',
      }
    } else {
      return {
        acessoNaoPermitido: 'Accès non autorisé',
        facaLogin: 'Login',
        regressar: 'Revenir',
        novaDespesa: 'Nouvelle dépense',
        sujeitaAAprovacao: "Soumis à l'approbation",
        descricao: 'La description',
        despesa: 'Frais',
        continuar: 'Continuer',
        osCamposSaoObrigatorios: 'Les champs sont obligatoires',
        cancelar: 'Annuler',
        dadosPessoais: 'Données personnelles',
        sobreMim: 'À propos de moi',
        nome: 'Nom',
        observacoes: 'Commentaires',
        agenda: 'Calendrier',
        encomendas: 'Ordres',
        despesas: 'Dépense',
        entradasDeAgenda: 'Entrées de calendrier',
        notasDeEncomenda: 'Acheter en ligne',
        historico: 'Historique',
        pesquisaPorNomeDeCliente: 'Recherche par nom de client',
        encomenda: 'Ordre',
        em: 'dans',
        valor: 'Valeur',
        aguardaPagamento: 'En attente de paiement',
        pago: 'Payé',
        cancelado: 'Annulé',
        naoEntregue: 'Non livrés',
        entregue: 'Livré',
        valorAtribuido: 'valeur assignée',
        saldo: 'Balance',
        naoVerificada: 'Non vérifié',
        aprovada: 'Approuvé',
        rejeitada: 'Rejeté',
      }
    }
  }

  getPage5(language) {
    if (language == 'PT') {
      return {
        acessoNaoPermitido: 'Acesso não permitido',
        facaLogin: 'Faça login',
        regressar: 'Regressar',
        clientes: 'Clientes',
        clientesDaEmpresa: 'Clientes da empresa',
        pesquisaPorNomeDeCliente: 'Pesquisa por nome de cliente',
        nome: 'Nome',
        nif: 'NIF',
        telefone: 'Telefone',
        editar: 'Editar',
        seNaoEncontrar: 'Se não encontrar o seu cliente no pesquisador, na área de checkout, pode criar no botão abaixo.',
      }
    } else if (language == 'EN') {
      return {
        acessoNaoPermitido: 'Access not allowed',
        facaLogin: 'Login',
        regressar: 'Return',
        clientes: 'Customers',
        clientesDaEmpresa: 'Company customers',
        pesquisaPorNomeDeCliente: 'Search by customer name',
        nome: 'Name',
        nif: 'VAT',
        telefone: 'Telephone',
        editar: 'Edit',
        seNaoEncontrar: "If you don't find your client in the searcher, in the checkout area, you can create it in the button below.",
      }
    } else {
      return {
        acessoNaoPermitido: 'Accès non autorisé',
        facaLogin: 'Login',
        regressar: 'Revenir',
        clientes: 'Clients',
        clientesDaEmpresa: "clients de l'entreprise",
        pesquisaPorNomeDeCliente: 'Recherche par nom de client',
        nome: 'Nom',
        nif: 'TVA',
        telefone: 'Téléphone',
        editar: 'Éditer',
        seNaoEncontrar: 'Si vous ne trouvez pas votre client dans le moteur de recherche, dans la zone de paiement, vous pouvez le créer dans le bouton ci-dessous.',
      }
    }
  }

  getDiferentSpecifications(language) {
    if (language == 'PT') {
      return {
        encomendaComAlteracoes: 'Encomenda com alterações',
        caracteristicas: 'Caracteristicas',
        alterar: 'Alterar',
        precoDaVariacao: 'Preço da variação',
        encomendar: 'Encomendar',
        resumo: 'Resumo',
        cancelar: 'Cancelar',
        adicionarAEncomenda: 'Adicionar à encomenda',
      }
    } else if (language == 'EN') {
      return {
        encomendaComAlteracoes: 'Order with changes',
        caracteristicas: 'Features',
        alterar: 'Change',
        precoDaVariacao: 'Variation price',
        encomendar: 'Order',
        resumo: 'Summary',
        cancelar: 'Cancel',
        adicionarAEncomenda: 'Add to order',
      }
    } else {
      return {
        encomendaComAlteracoes: 'Commande avec modifications',
        caracteristicas: 'Caractéristiques',
        alterar: 'Changer',
        precoDaVariacao: 'Prix ​​de variation',
        encomendar: 'Ordre',
        resumo: 'Sommaire',
        cancelar: 'Annuler',
        adicionarAEncomenda: 'Ajouter à la commande',
      }
    }
  }

  getObs(language) {
    if (language == 'PT') {
      return {
        informacoesAdicionais: 'Informações adicionais',
        observacoes: 'Observações',
        dataDeEntrega: 'Data de entrega',
        condicoesExtraordinariasDePagamento: 'Condições extraordinárias de pagamento',
        cancelar: 'Cancelar',
        gravar: 'Gravar',
      }
    } else if (language == 'EN') {
      return {
        informacoesAdicionais: 'Additional Information',
        observacoes: 'Comments',
        dataDeEntrega: 'Delivery date',
        condicoesExtraordinariasDePagamento: 'Extraordinary Payment Terms',
        cancelar: 'Cancel',
        gravar: 'Save',
      }
    } else {
      return {
        informacoesAdicionais: 'Information additionnelle',
        observacoes: 'Commentaires',
        dataDeEntrega: 'La date de livraison',
        condicoesExtraordinariasDePagamento: 'Conditions de paiement extraordinaires',
        cancelar: 'Annuler',
        gravar: 'Enregistrer',
      }
    }
  }

  getOrder(language) {
    if (language == 'PT') {
      return {
        encomenda: 'Encomenda',
        criadaEm: 'criada em',
        nif: 'NIF',
        comIva: 'com IVA',
        semIva: 'sem IVA',
        observacoes: 'Observações',
        entrega: 'Entrega',
        condicoesEspeciaisDeVenda: 'Condições especiais de venda',
        fechar: 'Fechar',
      }
    } else if (language == 'EN') {
      return {
        encomenda: 'Order',
        criadaEm: 'created in',
        nif: 'VAT',
        comIva: 'with VAT',
        semIva: 'without VAT',
        observacoes: 'Comments',
        entrega: 'Delivery',
        condicoesEspeciaisDeVenda: 'Special sales conditions',
        fechar: 'Close',
      }
    } else {
      return {
        encomenda: 'Ordre',
        criadaEm: 'créé en',
        nif: 'TVA',
        comIva: 'avec TVA',
        semIva: 'sans TVA',
        observacoes: 'Commentaires',
        entrega: 'Livraison',
        condicoesEspeciaisDeVenda: 'Conditions de vente particulières',
      }
    }
  }

  getOrderEdit(language) {
    if (language == 'PT') {
      return {
        editarEncomenda: 'Editar encomenda',
        quantidade: 'Quantidade',
        caracteristicas: 'Caracteristicas',
        observacoes: 'Observações',
        cancelar: 'Cancelar',
        gravar: 'Gravar',
      }
    } else if (language == 'EN') {
      return {
        editarEncomenda: 'Edit order',
        quantidade: 'quantity',
        caracteristicas: 'Features',
        observacoes: 'Comments',
        cancelar: 'Cancel',
        gravar: 'Save',
      }
    } else {
      return {
        editarEncomenda: 'Modifier la commande',
        quantidade: 'Quantité',
        caracteristicas: 'Caractéristiques',
        observacoes: 'Commentaires',
        cancelar: 'Annuler',
        gravar: 'Enregistrer',
      }
    }
  }

  getReadSchedule(language) {
    if (language == 'PT') {
      return {
        dadosInsuficientes: 'Dados insuficientes',
        asObservacoesSaoObrigatorias: 'As observações são obrigatórias',
        atualizadoComSucesso: 'Atualizado com sucesso',
        podeContinuar: 'Pode continuar',
        temACerteza: 'Tem a certeza?',
        vaiPerderTodosOsDadosDaVisita: 'Vai perder todos os dados da visita.',
        agendamento: 'Agendamento',
        cliente: 'Cliente',
        dataEHora: 'Data e hora',
        observacoes: 'Observações',
        estadoDaVisita: 'Estado da visita',
        atribuirVenda: 'Atribuir venda',
        encomenda: 'Encomenda',
        visitaRealizada: 'Visita realizada',
        cancelarVisita: 'Cancelar visita',
        fechar: 'Fechar',
      }
    } else if (language == 'EN') {
      return {
        dadosInsuficientes: 'Insufficient data',
        asObservacoesSaoObrigatorias: 'Observations are mandatory',
        atualizadoComSucesso: 'Successfully updated',
        podeContinuar: 'Keep going',
        temACerteza: 'Are you sure?',
        vaiPerderTodosOsDadosDaVisita: 'You will lose all visit data.',
        agendamento: 'Scheduling',
        cliente: 'Client',
        dataEHora: 'Date and time',
        observacoes: 'Comments',
        estadoDaVisita: 'Visit status',
        atribuirVenda: 'Assign sale',
        encomenda: 'Order',
        visitaRealizada: 'Visit made',
        cancelarVisita: 'Cancel visit',
        fechar: 'Close',
      }
    } else {
      return {
        dadosInsuficientes: 'Données insuffisantes',
        asObservacoesSaoObrigatorias: 'Les observations sont obligatoires',
        atualizadoComSucesso: 'Mis à jour avec succès',
        podeContinuar: 'Continue',
        temACerteza: 'Es-tu sûr?',
        vaiPerderTodosOsDadosDaVisita: 'Vous perdrez toutes les données de visite.',
        agendamento: 'Planification',
        cliente: 'Client',
        dataEHora: "Date et l'heure",
        observacoes: 'Commentaires',
        estadoDaVisita: 'Statut de la visite',
        atribuirVenda: 'Attribuer la vente',
        encomenda: 'Commander',
        visitaRealizada: 'Visite effectuée',
        cancelarVisita: 'Annuler la visite',
        fechar: 'Fermer',
      }
    }
  }

  getSchedule(language) {
    if (language == 'PT') {
      return {
        dadosInsuficientes: 'Dados insuficientes',
        peloMenosADataEOClienteDevemSerPreenchidos: 'Pelo menos a data e o cliente devem ser preenchidos.',
        criadoComSucesso: 'Criado com sucesso',
        podeRegressarAAgenda: 'Pode regressar à agenda.',
        temACerteza: 'Tem a certeza?',
        vaiPerderTodosOsDadosDaVisita: 'Vai perder todos os dados da visita.',
        apagar: 'Apagar',
        cancelar: 'Cancelar',
        marcacaoDeVisita: 'Marcação de visita',
        pesquisapornomedecliente: 'Pesquisa por nome de cliente.',
        dataEHora: 'Data e hora',
        observacoes: 'Observações',
        gravar: 'Gravar',
      }
    } else if (language == 'EN') {
      return {
        dadosInsuficientes: 'Insufficient data',
        peloMenosADataEOClienteDevemSerPreenchidos: 'At least the date and customer must be filled in.',
        criadoComSucesso: 'Successfully created',
        podeRegressarAAgenda: 'You can return to the schedule.',
        temACerteza: 'Are you sure?',
        vaiPerderTodosOsDadosDaVisita: 'You will lose all visit data.',
        apagar: 'Delete',
        cancelar: 'Cancel',
        marcacaoDeVisita: 'Appointment booking',
        pesquisapornomedecliente: 'Search by customer name.',
        dataEHora: 'Date and time',
        observacoes: 'Comments',
        gravar: 'Save',
      }
    } else {
      return {
        dadosInsuficientes: 'Données insuffisantes',
        peloMenosADataEOClienteDevemSerPreenchidos: 'Au moins la date et le client doivent être renseignés.',
        criadoComSucesso: 'Créé avec succès',
        podeRegressarAAgenda: "Vous pouvez revenir à l'horaire.",
        temACerteza: 'Es-tu sûr?',
        vaiPerderTodosOsDadosDaVisita: 'Vous perdrez toutes les données de visite.',
        apagar: 'Effacer',
        cancelar: 'Annuler',
        marcacaoDeVisita: 'Prise de rendez-vous',
        pesquisapornomedecliente: 'Recherche par nom de client.',
        dataEHora: "Date et l'heure",
        observacoes: 'Commentaires',
        gravar: 'Enregistrer',
      }
    }
  }

  getSpecifications(language) {
    if (language == 'PT') {
      return {
        quantidade: 'Quantidade',
        observacoes: 'Observações',
        cancelar: 'Cancelar',
        inserir: 'Inserir',
        encomendaNormal: 'Encomenda normal',
        caracteristicas: 'Caracteristicas',
        precoDaVariacao: 'Preço da variação',
        encomendar: 'Encomendar',
        resumo: 'Resumo',
        adicionarAEncomenda: 'Adicionar à encomenda',
      }
    } else if (language == 'EN') {
      return {
        quantidade: 'Amount',
        observacoes: 'Comments',
        cancelar: 'Cancel',
        inserir: 'Insert',
        encomendaNormal: 'Normal order',
        caracteristicas: 'Features',
        precoDaVariacao: 'Variation price',
        encomendar: 'Order',
        resumo: 'Summary',
        adicionarAEncomenda: 'Add to order',
      }
    } else {
      return {
        quantidade: 'La quantité',
        observacoes: 'Commentaires',
        cancelar: 'Annuler',
        inserir: 'Insérer',
        encomendaNormal: 'Ordre normal',
        caracteristicas: 'Caractéristiques',
        precoDaVariacao: 'Prix ​​de variation',
        encomendar: 'Ordre',
        resumo: 'Sommaire',
        adicionarAEncomenda: 'Ajouter à la commande',
      }
    }
  }

  getAnotherImages(language) {
    if (language == 'PT') {
      return {
        imagemRotativa: 'Imagem rotativa',
        descricao: 'Descrição',
        catalogo: 'Catálogo',
        categoria: 'Categoria',
        precoDeVendaRecomendadoPVR: 'Preço de venda recomendado (PVR)',
        video: 'Video',
        encomendaNormal: 'Encomenda normal',
        encomendaComAlteracoes: 'Encomenda com alterações',
      }
    } else if (language == 'EN') {
      return {
        imagemRotativa: 'Rotating image',
        descricao: 'Description',
        catalogo: 'Catalog',
        categoria: 'Category',
        precoDeVendaRecomendadoPVR: 'Recommended Selling Price (RSP)',
        video: 'Video',
        encomendaNormal: 'Normal order',
        encomendaComAlteracoes: 'Order with changes',
      }
    } else {
      return {
        imagemRotativa: 'Image en rotation',
        descricao: 'Description',
        catalogo: 'Catalogue',
        categoria: 'Catégorie',
        precoDeVendaRecomendadoPVR: 'Prix ​​de vente recommandé (PVR)',
        video: 'Vidéo',
        encomendaNormal: 'Ordre normal',
        encomendaComAlteracoes: 'Commande avec modifications',
      }
    }
  }

  getProduct(language) {
    if (language == 'PT') {
      return {
        outrasImagens: 'Outras imagens',
        descricao: 'Descrição',
        catalogo: 'Catálogo',
        categoria: 'Categoria',
        precoDeVendaRecomendadoPVR: 'Preço de venda recomendado (PVR)',
        video: 'Video',
        encomendaNormal: 'Encomenda normal',
        encomendaComAlteracoes: 'Encomenda com alterações',
      }
    } else if (language == 'EN') {
      return {
        outrasImagens: 'Other images',
        descricao: 'Description',
        catalogo: 'Catalog',
        categoria: 'Category',
        precoDeVendaRecomendadoPVR: 'Recommended Selling Price (RSP)',
        video: 'Video',
        encomendaNormal: 'Normal order',
        encomendaComAlteracoes: 'Order with changes',
      }
    } else {
      return {
        outrasImagens: 'Autres images',
        descricao: 'Description',
        catalogo: 'Catalogue',
        categoria: 'Catégorie',
        precoDeVendaRecomendadoPVR: 'Prix ​​de vente recommandé (PVR)',
        video: 'Vidéo',
        encomendaNormal: 'Ordre normal',
        encomendaComAlteracoes: 'Commande avec modifications',
      }
    }
  }

  getCatalog(language) {
    if (language == 'PT') {
      return {
        partilharCatalogo: 'Partilhar catálogo',
        cancelar: 'Cancelar',
        enviar: 'Enviar',
        enviado: 'Enviado',
        message: 'Mensagem',
      }
    } else if (language == 'EN') {
      return {
        partilharCatalogo: 'Share catalog',
        cancelar: 'Cancel',
        enviar: 'Send',
        enviado: 'Sent',
        message: 'Message',
      }
    } else {
      return {
        partilharCatalogo: 'Partager le catalogue',
        cancelar: 'Annuler',
        enviar: 'Envoyer',
        enviado: 'Envoyé',
        message: 'Message',
      }
    }
  }

  getCreateClient(language) {
    if (language == 'PT') {
      return {
        erroNaInsercao: 'Erro na inserção',
        todosOsCamposSaoObrigatorios: 'Todos os campos são obrigatórios',
        repetir: 'Repetir',
        sucesso: 'Sucesso',
        podeAvancarParaAEncomenda: 'Pode avançar para a encomenda',
        avancar: 'Avançar',
        novoCliente: 'Novo cliente',
        preenchaOsDadosDoClienteAbaixo: 'Preencha os dados do cliente abaixo',
        nomeDaEmpresa: 'Nome da empresa',
        niF: 'NIF',
        endereco: 'Endereço',
        codigoPostal: 'Código Postal',
        localidade: 'Localidade',
        pais: 'País',
        telefone: 'Telefone',
        enderecoDeEntregaAlternativo: 'Endereço de entrega alternativo',
        gravar: 'Gravar',
      }
    } else if (language == 'EN') {
      return {
        erroNaInsercao: 'Insertion error',
        todosOsCamposSaoObrigatorios: 'All fields are mandatory',
        repetir: 'Repeat',
        sucesso: 'Success',
        podeAvancarParaAEncomenda: 'You can proceed to order',
        avancar: 'Forward',
        novoCliente: 'New customer',
        preenchaOsDadosDoClienteAbaixo: 'Fill in the customer data below',
        nomeDaEmpresa: 'Company Name',
        niF: 'VAT',
        endereco: 'Address',
        codigoPostal: 'Postal Code',
        localidade: 'Location',
        pais: 'Country',
        telefone: 'Phone',
        enderecoDeEntregaAlternativo: 'Alternative delivery address',
        gravar: 'Save',
      }
    } else {
      return {
        erroNaInsercao: "Erreur d'insertion",
        todosOsCamposSaoObrigatorios: 'Tous les champs sont obligatoires',
        repetir: 'Répéter',
        sucesso: 'Succès',
        podeAvancarParaAEncomenda: 'Vous pouvez passer commande',
        avancar: 'Avance',
        novoCliente: 'Nouveau client',
        preenchaOsDadosDoClienteAbaixo: 'Remplissez les données client ci-dessous',
        nomeDaEmpresa: "Nom de l'entreprise",
        niF: 'TVA',
        endereco: 'Adresse',
        codigoPostal: 'Code postal',
        localidade: 'Localisation',
        pais: 'Pays',
        telefone: 'Téléphone',
        enderecoDeEntregaAlternativo: 'Adresse de livraison alternative',
        gravar: 'Enregistrer',
      }
    }
  }

  getEditClient(language) {
    if (language == 'PT') {
      return {
        erroNaInsercao: 'Erro na inserção',
        todosOsCamposSaoObrigatorios: 'Todos os campos são obrigatórios, exceto o NIF',
        repetir: 'Repetir',
        sucesso: 'Sucesso',
        podeAvancarParaAEncomenda: 'Pode avançar para a encomenda',
        avancar: 'Avançar',
        editarCliente: 'Atualizar dados',
        preenchaOsDadosDoClienteAbaixo: 'Preencha os dados do cliente abaixo',
        nomeDaEmpresa: 'Nome da empresa',
        niF: 'NIF',
        endereco: 'Endereço',
        codigoPostal: 'Código Postal',
        localidade: 'Localidade',
        pais: 'País',
        telefone: 'Telefone',
        enderecoDeEntregaAlternativo: 'Endereço de entrega alternativo',
        gravar: 'Gravar',
      }
    } else if (language == 'EN') {
      return {
        erroNaInsercao: 'Insertion error',
        todosOsCamposSaoObrigatorios: 'All fields are mandatory, except VAT',
        repetir: 'Repeat',
        sucesso: 'Success',
        podeAvancarParaAEncomenda: 'You can proceed to order',
        avancar: 'Forward',
        editarCliente: 'Update data',
        preenchaOsDadosDoClienteAbaixo: 'Fill in the customer data below',
        nomeDaEmpresa: 'Company Name',
        niF: 'VAT',
        endereco: 'Address',
        codigoPostal: 'Postal Code',
        localidade: 'Location',
        pais: 'Country',
        telefone: 'Phone',
        enderecoDeEntregaAlternativo: 'Alternative delivery address',
        gravar: 'Save',
      }
    } else {
      return {
        erroNaInsercao: "Erreur d'insertion",
        todosOsCamposSaoObrigatorios: 'Tous les champs sont obligatoires',
        repetir: 'Répéter',
        sucesso: 'Succès',
        podeAvancarParaAEncomenda: 'Vous pouvez passer commande',
        avancar: 'Avance',
        editarCliente: 'Modifier le client',
        preenchaOsDadosDoClienteAbaixo: 'Remplissez les données client ci-dessous',
        nomeDaEmpresa: "Nom de l'entreprise",
        niF: 'TVA',
        endereco: 'Adresse',
        codigoPostal: 'Code postal',
        localidade: 'Localisation',
        pais: 'Pays',
        telefone: 'Téléphone',
        enderecoDeEntregaAlternativo: 'Adresse de livraison alternative',
        gravar: 'Enregistrer',
      }
    }
  }

  getFilter(language) {
    if (language == 'PT') {
      return {
        filtroDeCategorias: 'Filtro de categorias',
        filtrar: 'Filtrar',
      }
    } else if (language == 'EN') {
      return {
        filtroDeCategorias: 'Category Filter',
        filtrar: 'Filter',
      }
    } else {
      return {
        filtroDeCategorias: 'Filtre de catégorie',
        filtrar: 'Filtre',
      }
    }
  }
}