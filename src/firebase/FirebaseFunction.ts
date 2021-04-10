import { Functions } from './firebase';

export const FirebaseFunction = (name: string) => {
  return Functions().httpsCallable(name);
};

export const helloWorld = FirebaseFunction('helloWorld');
