export interface UserLoginRequest {
    email: string,
    mobileNo: string,
    password: string,
}

export interface UserRegisterRequest {
    email: string,
    mobileNo: string,
    password: string,
    password2: string,
    fullName: string,
    shortName: string,
    dateOfBirth: string | Date,
    sex: Sex,
}

export interface AuthenticateResponse {
    userId: number;
    fullName: string;
    email: string;
    mobileNo: string;
    token: string;
    expires: string;
}

export interface UserResponse {
    id: number;
    fullName: string;
    shortName: string;
    nickname?: string | null;
    dateOfBirth?: string | null;
    bcNo?: string | null;
    sex: Sex;
    nicNo?: string | null;
    passportNo?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    address?: string | null;
    image?: string | null;

    isGuardian: boolean;
    isStudent: boolean;
    isStaff: boolean;
    isTeacher: boolean;
    isPrincipal: boolean;
}

export enum Sex {
    NotKnown = 0,
    Male = 1,
    Female = 2,
    NotApplicable = 9,
}