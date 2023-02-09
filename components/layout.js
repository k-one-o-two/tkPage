import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';
import 'primereact/resources/primereact.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';

import { Button } from 'primereact/button';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Layout({ children, active }) {
  const [activeIndex, setActiveIndex] = useState(active);
  const router = useRouter();

  const model = [
    {
      label: 'About',
      icon: 'pi-user',
      url: '/',
    },
    {
      label: 'Photos',
      icon: 'pi-camera',
      url: '/photo',
    },
  ];

  return (
    <>
      <div className="surface-50 p-3 flex justify-content-center flex-wrap">
        {model.map((item) => {
          return (
            <Button
              key={item.label}
              label={item.label}
              icon={`pi ${item.icon}`}
              className="mx-2 p-button-outlined"
              onClick={() => {
                router.push(item.url);
              }}
            />
          );
        })}
      </div>
      <div className="pt-2 surface-200">{children}</div>
    </>
  );
}
