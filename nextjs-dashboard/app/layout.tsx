import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Un titulo para la pagina bien tituloso</h1>
        <div style= {{ border: '16px solid #000'}}> 
        {children}</div>
        </body>
    </html>
  );
}
