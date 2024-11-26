import { HttpResponse, http, delay } from "msw";
import { IDocument } from "../types";
import { setupWorker } from "msw/browser";

const localStorageKey = "documentGridData";

const initialData = [
  { type: "bank-draft", title: "Bank Draft", position: 0 },
  { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
  { type: "invoice", title: "Invoice", position: 2 },
  { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
  { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
];
const storageData = localStorage.getItem(localStorageKey);
if (!storageData) {
  localStorage.setItem(localStorageKey, JSON.stringify(initialData));
}

export const handlers = [
  http.all("*", async () => {
    await delay(1000);
  }),

  http.get<{}, {}, { data: IDocument[] }, "/api/documents">(
    "/api/documents",
    () => {
      const data = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
      const dataToBeSent = { data: data };
      return HttpResponse.json(dataToBeSent, {
        status: 200,
        statusText: "Fetched documents successfully",
      });
    }
  ),

  http.post<{}, { documents: IDocument[] }, undefined, "/api/documents">(
    "/api/documents",
    async ({ request }) => {
      const newData = await request.json();
      localStorage.setItem(localStorageKey, JSON.stringify(newData));
      return HttpResponse.json(newData, {
        status: 201,
        statusText: "Updated documents successfully",
      });
    }
  ),
];

export const worker = setupWorker(...handlers);
