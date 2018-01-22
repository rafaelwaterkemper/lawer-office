import swal from 'sweetalert2'

export default class ListController {

    constructor(PessoaServico, Notification, $filter) {
        this.limit = 50;
        this.offset = 0;
        this.filterValue;
        this.sort = 0;
        this.records = []
        this._service = PessoaServico
        this._notify = Notification
        this.filter = $filter;
        this.load()
    }

    load() {
        
        this._service.findAll(this.limit, this.offset, this.filterValue, this.sort)
          .then(data => {
              this.records = data;
              this.records.map(data => 
                data.dataNascimento = this.filter('date')(data.dataNascimento, 'dd/MM/yyyy'));
          })
          .catch(error => {
              console.log(error)
          })
    }

    excluir(id) {
        swal({
            title: 'Remover registro',
            text: 'Deseja realmente remover o registro',
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Claro!',
            cancelButtonText: 'Não obrigado'
        }).then(resp => {
            return resp.value ? 
              this._service.remove(id) :
              Promise.reject({type: 'warning', message: 'Operação cancelada!!!'})
        }).then(response => {
            this.load()
            this._notify.success('Registro excluído com sucesso')
        }).catch(erro => {
            this._notify({message: erro.message || 'Problemas ao excluir o registro'}, erro.type || 'error')
        }) 
    }
}

ListController.$inject = ['PessoaServico', 'Notification', '$filter']
