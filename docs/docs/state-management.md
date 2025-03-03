
---

### **3. State Management Explanation**
Create a file: `docs/docs/state-management.md`

```md
# State Management

## Library Used: Zustand
We use Zustand for state management because:
- It's lightweight and easy to set up.
- It provides a centralized store for the crypto data.
- No unnecessary re-renders like with `useState` or `Context API`.

## Zustand Store Setup
We created a global store to:
- Hold `cryptos` data.
- Store a `loading` state.
- Implement a `fetchCryptos()` function.

```ts
import { create } from "zustand";

export const useCryptoStore = create((set) => ({
  cryptos: [],
  loading: false,
  fetchCryptos: async () => {
    set({ loading: true });
    try {
      const { data } = await axios.get(API_URL);
      set({ cryptos: data, loading: false });
    } catch (error) {
      console.error("Error:", error);
      set({ loading: false });
    }
  },
}));
