export function formatMoney(value: number): string{
    const price = value.toFixed(2).toString().replace('.', ',')
    return price
}