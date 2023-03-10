function getPagination({ page, offset }) {
  page = page || 0;
  console.log(page);
  const skip = page === 1 ? 0 : (page - 1) * offset;

  return { skip, limit: offset };
}

module.exports = { getPagination };
