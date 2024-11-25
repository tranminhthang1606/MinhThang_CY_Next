import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);
        if (existingProduct) {
            localStorage.setItem('cart', JSON.stringify(state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )));
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        } else {
            localStorage.setItem('cart', JSON.stringify([...state.cart, { ...product, quantity: 1 }]));
            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            };
        }
    }),

    removeFromCart: (productId) => set((state) => {
        localStorage.setItem('cart', JSON.stringify(state.cart.filter((item) => item.id !== productId)))
        return {
            cart: state.cart.filter((item) => item.id !== productId),
        }
    }),

    clearCart: () => set({ cart: [] }),
}))