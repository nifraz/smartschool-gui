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
    id: number;
    fullName: string;
    email: string;
    mobileNo: string;
    token: string;
}


export enum Sex {
    NotKnown = 0,
    Male = 1,
    Female = 2,
    NotApplicable = 9,
}