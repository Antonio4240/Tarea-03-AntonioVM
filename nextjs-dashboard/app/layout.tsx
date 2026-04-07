import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}antialiased`}>
        <h1>Un titulo para la pagina bien tituloso</h1>
          Esto es parte del layout
        <div style= {{ border: '16px solid #000'}}> 
        {children}</div>
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor de un estudiante
        </footer>
        </body>
    </html>
  );
}
