import { DataSource } from 'apollo-datasource';
import {
    MutationPlantTreeArgs,
    QueryProjectArgs, QuerySearchProjectsArgs,
    QueryTreeArgs,
} from './generated/graphql';

const axios = require('axios').default;

export class DigitalHumaniDAL {


    headers = {'X-Api-Key': process.env.DIGITAL_HUMANI_API_KEY};
    digitalHumaniBaseUrl = process.env.DIGITAL_HUMAN_BASE_URL

    async getProject(id: string) {
        let result = await axios.get(`${this.digitalHumaniBaseUrl}/project/${id}`, { headers: this.headers });
        return result.data
    }

    async getProjects() {
        let result = await axios.get(`${this.digitalHumaniBaseUrl}/project`, { headers: this.headers })
        return result.data;
    }

    async searchProjects(substring: string) {
        let result = await this.getProjects();
        return result.filter((project: any) => {
            return project.name.match(substring);
        });
    }

    async getTree(uuid: string) {
        let result = await axios.get(`${this.digitalHumaniBaseUrl}/tree/${uuid}`, { headers: this.headers })
        return result.data;
    }

    async plantTree(enterpriseId: string, projectId: string, user: string, treeCount: number) {
        let result = await axios.post(`${this.digitalHumaniBaseUrl}/tree`, {
            enterpriseId, projectId, user, treeCount
        },{ headers: this.headers })
        return result.data;
    }
}

export class ProjectProvider extends DataSource {

    private digitalHumaniDal: DigitalHumaniDAL;

    constructor() {
        super();
        this.digitalHumaniDal = new DigitalHumaniDAL();
    }

    public async getProject(args: QueryProjectArgs) {
        return this.digitalHumaniDal.getProject(args['id']);
    }

    public async getProjects() {
        return this.digitalHumaniDal.getProjects();
    }

    public async searchProjects(args: QuerySearchProjectsArgs) {
        return this.digitalHumaniDal.searchProjects(args['substring'])
    }
}

export class TreeProvider extends DataSource {

    private digitalHumaniDal: DigitalHumaniDAL;

    constructor() {
        super();
        this.digitalHumaniDal = new DigitalHumaniDAL();
    }

    public async plantTree(args: MutationPlantTreeArgs) {
        return this.digitalHumaniDal.plantTree(args['enterpriseId'], args['projectId'], args['user'], args['treeCount']);
    }

    public async getTree(args: QueryTreeArgs) {
        return this.digitalHumaniDal.getTree(args['uuid']);
    }
}
