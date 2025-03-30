export interface UseAddContactRequest {
    type: string;
    phone?: string;
    email?: string;
    name?: string;
}
export interface UseAddContactResponse {
    message: string;
}
