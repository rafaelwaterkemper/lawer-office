import ListController from './list.controller'
import FormController from './form.controller'

import processoServico from './servico'

export const processoConfig = (modulo) => {

  modulo.service('ProcessoServico', processoServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('processo', {
        template: require('@views/default.html'),
        url: '/processos',
        onEnter: ['$state', function($state) {
          $state.go('processo.list')
        }]
      })
      .state('processo.list', {
        template: require('@views/processos/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('processo.new', {
        template: require('@views/processos/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('processo.edit', {
        template: require('@views/processos/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
