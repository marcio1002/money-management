/**
 * Helper para formatar valores monetários
 * @param value 
 * @returns 
 * 
 * @example
 * formatPrice(1000) // R$ 1.000,00
 * formatPrice(100.50) // R$ 100,50
 * formatPrice(2450.99) // R$ 2.450,99
 */
export function formatPrice(value: string | number): string {
    return parseFloat(String(value)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
