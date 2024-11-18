export const extractFirstParagraph = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    return doc.querySelector("p")?.innerText || "";
};

export const extractFirstSentence = (description: string) => {
    return description.split(".")[0] + ".";
};
