import React from 'react'

const Item = () => {
  return (
    <a href='/' className="flex flex-col gap-3">
      <img
        className="aspect-square rounded-2xl object-cover"
        src="https://ae-pic-a1.aliexpress-media.com/kf/S84ef02bad81447f599cd7a339b970a41K.jpg_220x220q75.jpg_.avif"
        alt=""
      />
      <h3 className="text-xl font-semibold">QIYIDA X99 D4</h3>
      <p className='truncate'>
        Placa-mãe QIYIDA X99 D4 TPM2.0 LGA 2011 3 com slot M.2 Suporte X99
        C612chip Memória DDR4 SATA3.0 USB3.0 PCI16X
      </p>
      <p>
        <span className="font-semibold">R$ 250</span>
      </p>
    </a>
  );
}

export default Item
