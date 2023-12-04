export function formatPrice(value: string | number): string {
    return parseFloat(String(value)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
