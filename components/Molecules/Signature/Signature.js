import { useState } from 'react';
import useNotify from '@/hooks/useNotify';
import Button from '@/components/Atoms/Button';
import SignatureCard from '../SignatureCard';

const Signature = ({ data, setData }) => {
  const [notification] = useNotify();
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    setLoading(true);

    try {
      const tableElement = document.getElementById('signatureTable');
      const tableHtml = tableElement.outerHTML;

      // Crear el objeto ClipboardItem con el formato correcto
      const clipboardItem = new ClipboardItem({
        'text/html': new Blob([tableHtml], { type: 'text/html' }),
        // También incluimos el texto plano como fallback
        'text/plain': new Blob([tableElement.innerText], {
          type: 'text/plain',
        }),
      });

      // Usar writeText para navegadores que no soportan write
      if (!navigator.clipboard.write) {
        await navigator.clipboard.writeText(tableHtml);
      } else {
        // Usar el método write para copiar el HTML formateado
        await navigator.clipboard.write([clipboardItem]);
      }

      setLoading(false);
      notification('success', 'Firma de correo copiada en el portapapeles');
    } catch (error) {
      console.log({ error });
      setLoading(false);
      notification('error', '¡Oh! algo salió mal, inténtalo de nuevo');
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-11/12 lg:w-1/2">
        <h5 className="mb-10 font-bold text-center text-blue">
          Previsualización de firma de correo
        </h5>
        <SignatureCard
          mode="vertical-no-rrss"
          data={data}
          direction="Av El Bosque 92, piso 11 Las Condes"
        >
          <tbody>
            <tr>
              <td
                style={{
                  paddingBottom: '20px',
                  paddingRight: '20px',
                }}
              >
                <a href="https://cfccapital.cl/" target="_blank">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/signature-logo.png"
                    width="160"
                    style={{
                      display: 'block',
                      maxWidth: '160px',
                      margin: '0 auto',
                    }}
                    alt="CFC Capital"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </SignatureCard>
        <div className="flex justify-center py-5">
          <Button
            className="btn btn-primary"
            onClick={handleCopy}
            loading={loading}
            text="Copiar al portapapeles"
          />
          <Button className="btn btn-secondary" onClick={() => setData(null)}>
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signature;
