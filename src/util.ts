import { ProjectProvider, TreeProvider } from "./providers";

export interface Context {
    dataSources: {
        projectProvider: ProjectProvider,
        treeProvider: TreeProvider,
    }
}
