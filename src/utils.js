const formatPublishedDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
}

export { formatPublishedDate }