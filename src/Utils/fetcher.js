const fetcher = (...args) =>
  fetch(...args).then(async (r) => {
    if (r.ok) return r.json();
    return [];
  });

export default fetcher;
