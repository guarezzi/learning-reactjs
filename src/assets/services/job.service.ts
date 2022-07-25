import axios from "axios";
import { IJobListDTO } from "components/JobCard/IJobListDTO";
import { IJobDTO } from "components/JobDetails/JobDTO";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

async function list(): Promise<IJobListDTO[]> {
    const result = await api.get<IJobListDTO[]>('/jobs');
    return result.data;
}

async function get(id: number): Promise<IJobDTO> {
    if (Number.isNaN(Number(id)))
        throw Error(`JobService.get parameter 'id' must be a number: ${id}`);

    const result = await api.get<IJobDTO>(`/jobs/${id}`);
    return result.data;
}

async function remove(id: number) {
    if (Number.isNaN(Number(id)))
        throw Error(`JobService.remove parameter 'id' must be a number: ${id}`);

    const result = await api.delete(`/jobs/${id}`);
    return result.data;
}

async function update(job: IJobDTO) {

}

async function save(job: IJobDTO): Promise<IJobDTO> {
    const result = await api.post<IJobDTO>('/jobs', job);
    return result.data;
}

async function search(term: string): Promise<IJobListDTO[]> {
    const result = await api.get<IJobListDTO[]>(`/jobs?title_like=${term}`);
    return result.data;
}

const JobService = { list, get, remove, save, update, search }
export default JobService;

