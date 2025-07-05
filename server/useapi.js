const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [url]);

  return data;
};
