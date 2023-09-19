export const useState1 = () => useState<number>('state1', () => 0);
export const useBreakcrumb = () => useState<Array<string>>('breakcrumb', () => []);
export const useClient = () => useState<Object>('client', () => ({clientId: '0001'}));
export const useExam = () => useState<Object>('exam', () => ({examId: '0002'}));