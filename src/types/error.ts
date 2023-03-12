export type ApiErrorResponse = {
  message: string;
  versions: Inline_model;
};

export type Inline_model = {
  controller: string;
  interfaceMax: string;
  interfaceMin: string;
};
