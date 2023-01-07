export interface GlobalContraints {
  userKey: string;
  apiUrl: string;
};
export const constraints: GlobalContraints = {
  userKey: 'auth.user',
  apiUrl: 'http://localhost/api/public'
};