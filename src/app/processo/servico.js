import AbstractCrudService from "../abstract.crud.service";

export default class ProcessoServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/learnModularizado-web/lawofficer/processo')
  }

}

ProcessoServico.$inject = ['$http']
