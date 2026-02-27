function DownloadButton() {
  
  const arquivoUrl = '../Files/curriculo.pdf';

  return (
    <a href={arquivoUrl} download="curriculo.pdf">
      <button>Baixar PDF</button>
    </a>
  );
}

export default DownloadButton;