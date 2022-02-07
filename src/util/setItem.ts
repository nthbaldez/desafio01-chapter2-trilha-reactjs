import { Product } from '../types';

export function setItem(updatedCart: Product[]) {
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
  return;
}