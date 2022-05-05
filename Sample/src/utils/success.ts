export const wrapSuccess = (result: any, message: string, status: number) => {
    return {
        status,
        message,
        data: result
    };
}