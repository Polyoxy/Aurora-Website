// Empty Firebase type definition file to prevent TypeScript errors
declare module 'firebase/auth' {
  export function signInWithEmailAndPassword(auth: any, email: string, password: string): Promise<any>;
}

declare module 'firebase/firestore' {
  export function collection(db: any, path: string): any;
  export function getDocs(query: any): Promise<any>;
  export function addDoc(collection: any, data: any): Promise<any>;
  export function updateDoc(docRef: any, data: any): Promise<void>;
  export function deleteDoc(docRef: any): Promise<void>;
  export function doc(db: any, path: string, id?: string): any;
}

declare module 'firebase/storage' {
  // Empty storage definitions
} 