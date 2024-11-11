import { PersonModel } from "../../../graphql/generated";

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

export interface RegisterResponse {
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

    isEmailVerified: boolean;
    isMobileNoVerified: boolean;
}

export interface VerifyEmailRequest
{
    email: string;
    otp: string;
    token: string;
}

export interface VerifyEmailResponse
{
    email: string;
    isEmailVerified: boolean;
}

export interface FormlyOption {
    value: any | undefined;
    label: any | undefined;
}

export enum Sex {
    NotKnown = 0,
    Male = 1,
    Female = 2,
    NotApplicable = 9,
}