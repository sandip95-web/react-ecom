const FormatMoney=({price})=>{
    return Intl.NumberFormat('en-NP', {
        currencyDisplay: "narrowSymbol", 
        style: 'currency', 
        currency: "NPR",
        maximumFractionDigits:2, 
    }).format(price/100);
}
export default FormatMoney