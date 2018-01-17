import ListController from './list.controller'
import FormController from './form.controller'

import pessoaServico from './servico'

export const pessoaConfig = (modulo) => {

  modulo.service('PessoaServico', pessoaServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('pessoa', {
        template: require('@views/default.html'),
        url: '/pessoas',
        onEnter: ['$state', function($state) {
          $state.go('pessoa.list')
        }]
      })
      .state('pessoa.list', {
        template: require('@views/pessoas/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('pessoa.new', {
        template: require('@views/pessoas/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('pessoa.edit', {
        template: require('@views/pessoas/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
