import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    requirement: string;
    isProcessed: boolean;
    phone: string;
}
export interface backendInterface {
    deleteProcessed(): Promise<void>;
    deleteSubmission(id: bigint): Promise<void>;
    getSubmissionCount(isProcessed: boolean): Promise<bigint>;
    getSubmissions(isProcessed: boolean): Promise<Array<ContactSubmission>>;
    markAllProcessed(): Promise<void>;
    markAsProcessed(id: bigint): Promise<void>;
    searchByEmail(email: string): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, phone: string, email: string, requirement: string): Promise<bigint>;
}
