export const goToNextPage = (
  offset: number,
  total: number,
  setOffset: (page?: number) => void,
) => {
  if (offset === total) {
    return;
  }
  let page = offset + 20;
  if (page > total) {
    page = total;
  }
  return setOffset(page);
};

export const goToPreviousPage = (
  offset: number,
  setOffset: (page?: number) => void,
) => {
  if (offset === 0) {
    return 0;
  }
  let page = offset - 20;
  if (page < 0) {
    page = 0;
  }
  return setOffset(page);
};
