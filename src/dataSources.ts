import { HTTPDataSource, Request, RequestError } from "apollo-datasource-http";
import { Project, Tree } from "./generated/graphql";

export class DigitalHumaniApi extends HTTPDataSource {
    constructor() {
        super(process.env.DIGITAL_HUMANI_BASE_URL !, {
            requestOptions: {
                headers: {
                    'X-Api-Key': process.env.DIGITAL_HUMANI_API_KEY,
                },
            },
        })
    }

    onError(error: Error, request: Request): void {
        if (error instanceof RequestError) {
            console.log(error.request, error.response)
        }
    }

    async getProject(id: string): Promise<Project> {
        const result = await this.get<Project>(`/project/${id}`);
        return result.body;
    }

    async getProjects(): Promise<Project[]> {
        const projects = await this.get<Project[]>(`/project`)
        return projects.body;
    }

    async searchProjects(substring: string): Promise<Project[]> {
        const projects = await this.getProjects();
        return projects.filter((project: Project) => {
            return project.name.match(substring);
        });
    }

    async plantTree(enterpriseId: string, projectId: string, user: string, treeCount: number): Promise<Tree> {
        let result = await this.post<Tree>(`/tree`, {
            body: {
                enterpriseId: enterpriseId,
                projectId: projectId,
                user: user,
                treeCount: treeCount
            }
        });
        return result.body;
    }
}
