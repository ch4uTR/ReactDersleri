function Summary({ isFull, count }) {
  const message = isFull
    ? `Alışveriş sepetinizde ${count} ürün bulunmakta!`
    : "Alışveriş sepetiniz henüz boş!";

  return (
    <footer className="summary">
      {message}
    </footer>
  );
}

export default Summary