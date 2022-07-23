import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

async function list() {
    const result = await api.get('/jobs');
    return result.data;
}

async function get(id) {
    if (Number.isNaN(Number(id)))
        throw Error(`JobService.get parameter 'id' must be a number: ${id}`);

    const result = await api.get(`/jobs/${id}`);
    return result.data;
}

async function remove(id) {
    if (Number.isNaN(Number(id)))
        throw Error(`JobService.remove parameter 'id' must be a number: ${id}`);

}

async function update(job) {

}

async function save(job) {
    const result = await api.post('/jobs', job);
    return result.data;
}

async function search(term) {
    const result = await api.get(`/jobs?title_like=${term}`);
    return result.data;
}

const JobService = { list, get, remove, save, update, search }
export default JobService;

