export const useBreakcrumb = (breakcrumb = []) => {
  const companyName = "Sun Aterisk - ASP1";
  return useState("breakcrumb", () => [companyName, ...breakcrumb]);
};
