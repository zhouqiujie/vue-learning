import API from './api'

const baseUrl = '***'

export const getInfo = upn => {
  return API.get(`${baseUrl}/Roles/Assignments/Upns/${upn}`, {
    params: {
      'api-version': '2018-09-01-preview'
    }
  })
}
