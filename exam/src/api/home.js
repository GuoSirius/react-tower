import request from '../service/request'

export function getInitialScore() {
  return request({
    method: 'GET',
    // url: '/data/score.json'
    url: 'http://cgi.cse.unsw.edu.au/~cs6080/21T1/data/score.json'
  })
}
