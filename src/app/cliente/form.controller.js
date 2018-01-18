export default class FormController {

    constructor($stateParams, $state, ClienteServico, Notification, PessoaServico) {
        this.record = {}
        this.pessoas = [];
        this.edit;
        this.title = 'Adicionando registro'
        this._service = ClienteServico
        this._pessoa_service = PessoaServico;
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
        this.loadPessoas();
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('cliente.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
            })
    }

    loadPessoas() {
        if(!this.edit){
            this._pessoa_service.findAll(0, 0, 0, 0)
            .then(data => {
                this.pessoas = data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

FormController.$inject = ['$stateParams', '$state', 'ClienteServico', 'Notification', 'PessoaServico']
