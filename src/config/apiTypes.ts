export type Error = {
  errors: Record<string, string[]> | string[];
  status: number;
};