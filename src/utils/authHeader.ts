const authStorageKey = "auth";
export function getAuthHeader(): string {
  return localStorage.getItem(authStorageKey) || "";
}

export function setAuthHeader(address: string, signature: string): void {
  const header = btoa(`${address.toLowerCase()}:${signature.toLowerCase()}`);
  localStorage.setItem(authStorageKey, header);
}

export function removeAuthHeader(): void {
  localStorage.removeItem(authStorageKey);
}
