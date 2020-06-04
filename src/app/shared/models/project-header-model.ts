import { ProjectReason } from './project-reason-model';

export class ProjectHeader {
  public partNumber: string;
  public partRev: string;
  public revDate: Date;
  public partName: string;
  public supplier: string;
  public reasonSubmit: ProjectReason;
  public projectId?: string;
  public createdDate?: Date;
}
