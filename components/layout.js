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
      <div className="flex justify-content-start flex-wrap">
        {model.map((item) => {
          return (
            <div
              className="top-button"
              key={item.label}
              // label={}
              icon={`pi ${item.icon}`}
              // className="mx-2 p-button-outlined"
              rounded
              severity="secondary"
              onClick={() => {
                router.push(item.url);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="pt-2">{children}</div>
    </>
  );
}
