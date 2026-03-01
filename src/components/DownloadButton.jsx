function DownloadButton() {
  
  const arquivoUrl = '/curriculo.pdf';

  return (
    <a href={arquivoUrl} download="curriculo.pdf">
      <button>Baixar PDF</button>
    </a>
  );
}

export default DownloadButton;