import {ProjectReason} from '../models/project-reason-model';

export const PROJECTREASONS: ProjectReason[] = [
  { id: 1, name: 'Initial Submission' },
  { id: 2, name: 'Engineering Change(s)' },
  { id: 3, name: 'Tooling: Transfer, Replacement, Refurbishment, or Additional' },
  { id: 4, name: 'Correction of Discrepancy' },
  { id: 5, name: 'Tooling Inactive > than 1 year' },
  { id: 6, name: 'Change to Optional Construction or Material' },
  { id: 7, name: 'Sub-Supplier or Material Source Change'},
  { id: 8, name: 'Change in Part Processing'},
  { id: 9, name: 'Parts produced at Additional Location'},
  { id: 10, name: 'Other - please specify'}
];
