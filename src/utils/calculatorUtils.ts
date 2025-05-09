// Constants for Etsy fees
export const LISTING_FEE = 0.2;
export const TRANSACTION_FEE_PERCENT = 0.065;
export const PROCESSING_FEE_PERCENT = 0.03;
export const PROCESSING_FEE_FIXED = 0.25;
export const OFFSITE_ADS_FEE_HIGH = 0.15; // 15% for sellers under $10k sales
export const OFFSITE_ADS_FEE_LOW = 0.12; // 12% for sellers over $10k sales

// Calculate Etsy fees based on price and shipping
export const calculateEtsyFees = (price: number, shipping: number = 0, offsiteAds: boolean = false, offsiteAdsFeePercent: number = OFFSITE_ADS_FEE_HIGH) => {
  const totalRevenue = price + shipping;
  const listingFee = LISTING_FEE;
  const transactionFee = totalRevenue * TRANSACTION_FEE_PERCENT;
  const processingFee = totalRevenue * PROCESSING_FEE_PERCENT + PROCESSING_FEE_FIXED;
  
  // Calculate offsite ads fee if applicable
  const offsiteAdsFee = offsiteAds ? totalRevenue * offsiteAdsFeePercent : 0;
  
  const totalFees = listingFee + transactionFee + processingFee + offsiteAdsFee;
  
  return {
    listingFee,
    transactionFee,
    processingFee,
    offsiteAdsFee,
    totalFees
  };
};

// Calculate profit after all fees
export const calculateProfit = (price: number, productCost: number, shipping: number = 0, offsiteAds: boolean = false, offsiteAdsFeePercent: number = OFFSITE_ADS_FEE_HIGH) => {
  const fees = calculateEtsyFees(price, shipping, offsiteAds, offsiteAdsFeePercent);
  const profit = price + shipping - productCost - fees.totalFees;
  
  return {
    fees,
    profit,
    profitMargin: price > 0 ? (profit / price) * 100 : 0
  };
};

// Calculate price needed to achieve desired profit
export const calculatePriceForProfit = (desiredProfit: number, productCost: number, shipping: number = 0, discount: number = 0, offsiteAds: boolean = false, offsiteAdsFeePercent: number = OFFSITE_ADS_FEE_HIGH) => {
  // Formula derived from solving the equation:
  // desiredProfit = price + shipping - productCost - listingFee - (price+shipping)*transactionFeePercent - (price+shipping)*processingFeePercent - processingFeeFixed - (price+shipping)*offsiteAdsFeePercent
  
  const offsiteAdsFee = offsiteAds ? offsiteAdsFeePercent : 0;
  const denominatorFactor = 1 - TRANSACTION_FEE_PERCENT - PROCESSING_FEE_PERCENT - offsiteAdsFee;
  
  // Account for shipping as part of the revenue that contributes to profit
  const numerator = desiredProfit + productCost + LISTING_FEE + PROCESSING_FEE_FIXED 
                    - shipping * denominatorFactor;
  
  let priceAfterSale = numerator / denominatorFactor;
  
  // If discount is specified, calculate original price before discount
  let priceBeforeSale = discount > 0 ? priceAfterSale / (1 - discount / 100) : priceAfterSale;
  
  return {
    priceBeforeSale,
    priceAfterSale,
    fees: calculateEtsyFees(priceAfterSale, shipping, offsiteAds, offsiteAdsFeePercent)
  };
};

// Calculate price after sale based on pre-sale price and discount percentage
export const calculateSalePrice = (priceBeforeSale: number, discount: number) => {
  return priceBeforeSale * (1 - discount / 100);
};

// Calculate original price based on sale price and discount percentage
export const calculateOriginalPrice = (priceAfterSale: number, discount: number) => {
  return discount > 0 ? priceAfterSale / (1 - discount / 100) : priceAfterSale;
};

// Format currency values
export const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Format percentage values
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};
