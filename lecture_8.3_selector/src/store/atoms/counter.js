import {atom,selector} from 'recoil';

export const counterAtom = atom({
  key: 'counter',
  default: 0
});
export const evenSelector =selector({
  key: 'isEven',
  //its value is derieved from another atom
  get: ({get}) => {
    const count = get(counterAtom);
    return count % 2 === 0;
  }
}); 
//• Equality Check, Not a Boolean Trigger: Selectors do not check if the return value is true or false to decide whether to re-render. Instead, they compare the new return value of the selector against its previous return value using a reference equality check (===).
//• Re-render Condition: The component will only re-render if the equality check fails—meaning the new return value is different from the old return value. If the selector returns the exact same value or reference as the last time it ran, React bails out and skips the re-render