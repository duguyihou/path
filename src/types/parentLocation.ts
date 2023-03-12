export type ParentLocation = {
  id: string;
  name: string;
  disassembledName: string;
  type: string;
  parent: ParentLocation;
};
