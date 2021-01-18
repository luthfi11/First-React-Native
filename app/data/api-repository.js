/* eslint-disable prettier/prettier */

class ApiRepository {
  static getJobList() {
    return fetch('https://jobs.github.com/positions.json')
      .then((result) => result.json())
      .catch((error) => console.log(error));
  }

  static getJobDetail(id) {
    return fetch(`https://jobs.github.com/positions/${id}.json`)
    .then((result) => result.json())
    .catch((error) => console.log(error));
  }
}

export default ApiRepository;
