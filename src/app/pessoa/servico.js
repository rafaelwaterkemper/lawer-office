import AbstractCrudService from "../abstract.crud.service";

export default class PessoaServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/learnModularizado-web/lawofficer/pessoa')
  }

}

PessoaServico.$inject = ['$http']
