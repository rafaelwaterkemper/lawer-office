import moment from 'moment';

export default class FormController {

    constructor($stateParams, $state, PessoaServico, Notification) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = PessoaServico
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                    this.record.dataNascimento = moment(data.dataNascimento).toDate();
                })
        }
        this._state = $state
        this._notify = Notification
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('pessoa.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'PessoaServico', 'Notification']
