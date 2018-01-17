export default class AbstractCrudService {
  
    constructor($http, url) {
      this._http = $http
      this._url = url
    }
  
    findAll(limit, offset, filter, sort) {
      return this._http.get(`${this._url}`, {
        params: {
          limit,
          offset,
          filter,
          sort
        }
      })
        .then(response => response.data)
    }
  
    findById(id) {
      return this._http.get(`${this._url}/${id}`)
        .then(response => response.data)
    }
  
    save(record) {
      console.log("record" + record);
      if (record.id) {
        return this._http.put(`${this._url}/${record.id}`, record)
      } else {
        console.log(this._url);
        console.log(record);
        return this._http.post(this._url, record)
      }
    }
  
    remove(id) {
      return this._http.delete(`${this._url}/${id}`)
    }
  
  }
  