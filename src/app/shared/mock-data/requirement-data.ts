import { Requirements } from './../models/requirements-model';

export const REQUIREMENTS: Requirements[] = [
  {name: '1. Design Records', qtyFlag: false},
  {name: '2. Authorized Engineering Change Documents', qtyFlag: false},
  {name: '3. Customer Engineering Approval, if required', qtyFlag: false},
  {name: '4. Design Failure Modes and Effects Analysis (DFMEA), applied in special situations', qtyFlag: false},
  {name: '5. Process Flow Diagram', qtyFlag: false},
  {name: '6. Process Failure Modes and Effects', qtyFlag: false},
  {name: '7. Control Plan', qtyFlag: false},
  {name: '8. Measurement System Analysis (MSA)', qtyFlag: false},
  {name: '9. Dimensional Results', qtyFlag: true},
  {name: '10. Records of Material / Performance Test Results', qtyFlag: false},
  {name: '11. Initial Process Studies', qtyFlag: false},
  {name: '12. Qualified Laboratory Documentation', qtyFlag: false},
  {name: '13. Appearance Approval Report (AAR)', qtyFlag: false},
  {name: '14. Sample Production Parts', qtyFlag: true},
  {name: '15. Master Sample', qtyFlag: true},
  {name: '16. Checking Aids', qtyFlag: false},
  {name: '17. Customer-Specific Requirements', qtyFlag: false},
  {name: '18. Part Submission Warrant (PSW)', qtyFlag: false},
  {name: '19. Other', qtyFlag: false}
];
