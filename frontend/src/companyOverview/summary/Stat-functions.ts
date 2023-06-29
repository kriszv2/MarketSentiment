export function MarketCapCalculation(MarketCapitalization: number): string {
  if (MarketCapitalization > 1000 && MarketCapitalization < 1000000) {
    MarketCapitalization /= 1000;
    return MarketCapitalization.toFixed(2) + "K";
  } else if (MarketCapitalization >= 1000000 && MarketCapitalization <= 1000000000) {
    MarketCapitalization /= 1000000;
    return MarketCapitalization.toFixed(2) + "M";
  } else if (MarketCapitalization > 1000000000 && MarketCapitalization <= 1000000000000) {
    MarketCapitalization /= 1000000000;
    return MarketCapitalization.toFixed(2) + "B";
  } else if (MarketCapitalization > 1000000000000) {
    MarketCapitalization /= 1000000000000;
    return MarketCapitalization.toFixed(2) + "T";
  }
  return MarketCapitalization.toString();
}