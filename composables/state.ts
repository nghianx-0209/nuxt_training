interface clientInterface {
    info: {
        userId: String,
        clientId: String
    },
    status: Boolean
}

interface examInterface {
    examId: String
}

export const useState1 = () => useState<number>("state1", () => 0);
export const useBreakcrumb = () => useState<Array<string>>("breakcrumb", () => []);
export const useClient = () => useState<clientInterface | undefined>("client", () => ({info: {userId: "nghia.com", clientId: "0001"}, status: true}));
export const useExam = () => useState<examInterface | undefined>("exam", () => ({examId: "1"}));