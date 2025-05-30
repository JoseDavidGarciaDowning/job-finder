

export interface User {
    id: number;
    email: string;
    isActive: boolean;
    currentRole: string;
}


export type AllowedRoles = 'applicant' | 'company' | 'admin';