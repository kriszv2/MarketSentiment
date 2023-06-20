export function MarketCapCalculation(MarketCapitalization) {
  if (MarketCapitalization.length > 3 && MarketCapitalization.length < 7) {
    MarketCapitalization /= 1000 + "K";
    return MarketCapitalization;
  } else if (
    MarketCapitalization.length >= 7 &&
    MarketCapitalization.length <= 12
  ) {
    MarketCapitalization /= 1000000000;
    MarketCapitalization += "B";
    return MarketCapitalization;
  } else if (MarketCapitalization.length > 12) {
    MarketCapitalization /= 1000000000000;
    MarketCapitalization += "T";
    return MarketCapitalization;
  }
}
