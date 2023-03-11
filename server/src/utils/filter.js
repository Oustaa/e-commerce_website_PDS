function getFilters(filters) {
  const maxPrice = filters.maxPrice
    ? { price: { $lte: filters.maxPrice } }
    : {};
  const minPrice = filters.minPrice
    ? { price: { $gte: filters.minPrice } }
    : {};

  return [maxPrice, minPrice];
}

module.exports = { getFilters };
