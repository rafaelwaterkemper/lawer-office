export default class FormController {

    constructor($stateParams, $state, ProcessoServico, Notification, ClienteServico) {
        this.record = {}
        this.clientes = [];
        this.title = 'Adicionando registro'
        this._service = ProcessoServico
        this._cliente_service = ClienteServico;
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this.edit = true;
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                })
        }
        this._state = $state
        this._notify = Notification
        this.loadClientes();
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('processo.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
            })
    }

    loadClientes() {
            this._cliente_service.findAll(50, 0, "", 0)
            .then(data => {
                this.clientes = data
            })
            .catch(error => {
                console.log(error)
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'ProcessoServico', 'Notification', 'ClienteServico']
