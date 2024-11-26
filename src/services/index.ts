import { IDocument } from "../types";

export const fetchDocuments = async (): Promise<IDocument[]> => {
  try {
    const response = await fetch("/api/documents");
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }
    const jsonResponse: { data: IDocument[] } = await response.json();
    return jsonResponse?.data;
  } catch (e: any) {
    console.log(e);
    return [];
  }
};

export const saveDocuments = async (documents: IDocument[]) => {
  const response = await fetch("/api/documents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(documents),
  });
  if (!response.ok) {
    throw new Error("Failed to save documents");
  }
  const jsonResponse: { data: IDocument[] } = await response.json();
  return jsonResponse.data;
};
