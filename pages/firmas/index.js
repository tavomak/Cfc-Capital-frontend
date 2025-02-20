import { useState } from 'react';

import Layout from '@/components/Templates/Layout';
import Signature from '@/components/Molecules/Signature';
import FormRequestSign from '@/components/Molecules/Forms/FormRequestSign';

const SignaturePage = () => {
  const [data, setData] = useState(undefined);

  return (
    <Layout noindex>
      <div className="container mx-auto px-4 flex flex-wrap justify-center min-h-[calc(100vh-217px)]">
        {data ? (
          <Signature data={data.user} setData={setData} />
        ) : (
          <div className="flex items-center justify-center">
            <FormRequestSign setData={setData} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SignaturePage;
